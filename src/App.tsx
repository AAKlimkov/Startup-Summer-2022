import React, { FunctionComponent, useState } from 'react';
import './App.css';
import Header from './assets/components/Header/Header';
import InitialState from './assets/components/InittialState/InitialState';

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  const [data, setData] = useState('');

  const onSubmitHandle = async (value: string) => {
    
    const url = `https://api.github.com/users/${value}`;
    const res = await fetch(url);
    const data = await res.json();
    setData(data)
    console.log(data);
  };

  return (
    <div className="App">
      <Header onSubmitHead = {onSubmitHandle}/>
      {data ? JSON.stringify(data): <InitialState />}
    </div>
  );
};
export default App;
