import React, { FunctionComponent, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import InitialState from './components/InittialState/InitialState';
import Pages from './components/pages/Pages';
import { RepoProps } from './components/pages/repo/Repo';
import { IUser } from './components/pages/user/user';
import searchLogo from './assets/svg/search.svg';

export interface IError {
  message: string;
  documentation_url: string;
}

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  const [value, setValue] = useState('');
  const [pageNumber, setPageNumber] = useState('1');

  const onGetRepos = async (value: string, pageNum: string) => {
    const url = `https://api.github.com/users/${value}/repos?per_page=4&page=${pageNum}`;
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
  };

  const getPageNumber = (pageNumber: string) => {
    setPageNumber(pageNumber);
  };

  return (
    <div className="App">
      <Header getValue={getValue} />
      {value ? (
        <Pages
          onSubmitHand={onGetRepos}
          onGetUser={onGetUser}
          value={value}
          pageNum={pageNumber}
          getPageNumber={getPageNumber}
        />
      ) : (
        <InitialState
          span="Start with searching a GitHub user"
          logo={searchLogo}
        />
      )}
    </div>
  );
};
export default App;
