import { FunctionComponent, useEffect, useState } from 'react';
// import ReactPaginate from 'react-paginate'
// import { useDispatch, useSelector } from 'react-redux';
// import { getRepos } from '../../actions/repos';
// import { IRepItem } from '../../reducers/reposReduser';
import Repo, { RepoProps } from './repo/Repo';
import User, { IUser } from './user/user';
import './pages.css';

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
    name: 'string',
    login: 'string',
    followers: 'string',
    following: 'string',
    html_url: 'string',
    avatar_url: 'string'
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
      <div>
        {repos.map((repo: RepoProps) => (
          <Repo {...repo} />
        ))}
      </div>
    </div>
  );
};

export default Pages;
