import { FunctionComponent, useEffect, useState } from 'react';
import { RepoProps } from './repo/Repo';
import User, { IUser } from './user/user';
import './pages.css';
import InitialState from '../InittialState/InitialState';
import noUser from '../../assets/svg/noUser.svg';
import Repos from './repos/Repos';

interface PagesProps {
  onSubmitHand: (value: string, pageNumber: string) => Promise<RepoProps[]>;
  onGetUser: (value: string) => Promise<IUser>;
  value: string;
  pageNum: string;
  getPageNumber: (value: string) => void;
}

const Pages: FunctionComponent<PagesProps> = ({
  onSubmitHand,
  onGetUser,
  value,
  pageNum,
  getPageNumber,
}) => {
  const [repos, setRepos] = useState<RepoProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setuserData] = useState<IUser>({
    name: '',
    login: '',
    followers: '',
    following: '',
    html_url: '',
    avatar_url: '',
    public_repos: '',
  });

  useEffect(() => {
    async function getData() {
      if (value) {
        setIsLoading(true);
        const repos = await onSubmitHand(value, pageNum);
        const userData = await onGetUser(value);
        setIsLoading(false);
        setRepos(repos);
        setuserData(userData);
      }
    }

    getData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, pageNum]);

  return (
    <div className="pages">
      {isLoading ? (
        <div className="loader"></div>
      ) : userData.name ? (
        <User {...userData} />
      ) : (
        <InitialState span="User not found" logo={noUser} />
      )}

      {userData.name ? (
        <Repos
          userData={userData}
          repos={repos}
          getPageNumber={getPageNumber}
        />
      ) : null}
    </div>
  );
};

export default Pages;
