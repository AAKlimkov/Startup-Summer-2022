import React, { FunctionComponent, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import InitialState from './components/InittialState/InitialState';
import Pages from './components/pages/Pages';
import { RepoProps } from './components/pages/repo/Repo';
import { IUser } from './components/pages/user/user';

interface IError {
  message: string;
  documentation_url: string;
}

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  // const dispatch = useDispatch();
  // const [data, setData] = useState('');
  const [value, setValue] = useState('');

  const onGetRepos = async (value: string) => {
    const url = `https://api.github.com/users/${value}/repos`;
    const res = await fetch(url);
    let data: RepoProps[] = await res.json();
    return data;
  };
  const onGetUser = async (value: string) => {
    const url = `https://api.github.com/users/${value}`;
    const res = await fetch(url);
    let data: IUser = await res.json();
    return data;
  };

  const getValue = (value: string) => {
    setValue(value);
    console.log(value);
  };
  // console.log(value);

  // const count = useSelector<{ repos: IRepItem }, number>((state) => {
  //   return state.repos.count;
  // });

  return (
    <div className="App">
      <Header getValue={getValue} />

      {value ? (
        <Pages onSubmitHand={onGetRepos} onGetUser = {onGetUser} value={value} />
      ) : (
        <InitialState />
      )}
    </div>
  );
};
export default App;
