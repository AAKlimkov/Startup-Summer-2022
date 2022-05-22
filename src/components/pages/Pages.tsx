import { FunctionComponent, useEffect, useState } from 'react';
// import ReactPaginate from 'react-paginate'
// import { useDispatch, useSelector } from 'react-redux';
// import { getRepos } from '../../actions/repos';
// import { IRepItem } from '../../reducers/reposReduser';
import Repo, { RepoProps } from './repo/Repo';
import User, { IUser } from './user/user';
import './pages.css';
import InitialState from '../InittialState/InitialState';
import repoLogo from '../../assets/svg/noRepos.svg';

// import { IError } from '../../App';

interface PagesProps {
  onSubmitHand: (value: string) => Promise<RepoProps[]>;
  onGetUser: (value: string) => Promise<IUser>;
  value: string;
}

const Pages: FunctionComponent<PagesProps> = ({
  onSubmitHand,
  onGetUser,
  value,
}) => {
  const [repos, setRepos] = useState<RepoProps[]>([]);
  const [userData, setuserData] = useState<IUser>({
    name: '',
    login: '',
    followers: '',
    following: '',
    html_url: '',
    avatar_url: '',
    public_repos: '',
  });
  // const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      if (value) {
        const repos = await onSubmitHand(value);
        const userData = await onGetUser(value);
        setRepos(repos);
        setuserData(userData);
      }
    }
    getData();
  }, [onSubmitHand, repos, value, onGetUser]);

  return (
    <div className="pages">
      <User {...userData} />
      {userData.public_repos ? (
        <div className="repos">
          Repositories ({userData.public_repos})
          {repos.map((repo: RepoProps) => (
            <Repo {...repo} />
          ))}
        </div>
      ) : <InitialState span = 'Repository list is empty' logo = {repoLogo}/>}
    </div>
  );
};

export default Pages;
