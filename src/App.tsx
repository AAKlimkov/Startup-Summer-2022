import React, { FunctionComponent, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import InitialState from './components/InittialState/InitialState';
import Pages from './components/pages/Pages';
import { RepoProps } from './components/pages/repo/Repo';

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  // const dispatch = useDispatch();
  const [data, setData] = useState('');
  const [value, setValue] = useState('');

  const onSubmitHandle = async (value: string) => {
    const url = `https://api.github.com/users/${value}/repos`;
    const res = await fetch(url);
    const data: RepoProps[] = await res.json();
    // console.log(data);
    // res.catch()

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
        <Pages onSubmitHand={onSubmitHandle} value={value} />
      ) : (
        <InitialState />
      )}
    </div>
  );
};
export default App;
