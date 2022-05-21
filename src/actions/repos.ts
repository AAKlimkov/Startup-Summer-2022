import { Dispatch } from 'react';
import { setRepos } from '../reducers/reposReduser';

export const getRepos = (value: string = 'AAklimkov') => {
  return async (dispatch: Dispatch<any>) => {
    const url = `https://api.github.com/users/${value}/repos`;
    const res = await fetch(url);
    dispatch(setRepos(res.json()));
  };
};
