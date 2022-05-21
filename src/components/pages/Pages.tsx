import { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRepos } from '../../actions/repos';
import { IRepItem } from '../../reducers/reposReduser';
import Repo, { RepoProps } from './repo/Repo';
import User, { IUser } from './user/user';
import './pages.css';

interface PagesProps {
  onSubmitHand: (value: string) => Promise<RepoProps[]>;
  onGetUser: (value: string) => Promise<IUser>;
  value: string;
}

// const onSubmitHandle = async (value: string = 'AAKlimkov') => {
//   const url = `https://api.github.com/users/${value}/repos`;
//   const res = await fetch(url);
//   const data: RepoProps[] = await res.json();
//   console.log(data);

//   return data;
// };

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
  const dispatch = useDispatch();
  //   const repos = useSelector<{ repos: IRepItem }, any[]>(
  //     (state) => state.repos.items
  //   );

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
  }, [onSubmitHand, repos, value]);

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
