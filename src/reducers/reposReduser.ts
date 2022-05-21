import { RepoProps } from "../components/pages/repo/Repo";

const SET_REPOS = 'SET_REPOS';

export interface IRepItem {
  items: Array<RepoProps>
  isFethcing: boolean;
  
}
const defaultState: IRepItem = {
  items: [],
  isFethcing: true,
};



export default function reposReduser(state = defaultState, action: any) {
  switch (action.type) {
    case SET_REPOS:
      return {
        ...state,
        items: action.payload.items,
      };
    default:
      return state;
  }
}

export const setRepos = (repos: any) => ({
  type: SET_REPOS,
  payload: repos,
});
