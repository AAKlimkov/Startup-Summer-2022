import { FunctionComponent, useEffect, useState } from 'react';
// import ReactPaginate from 'react-paginate'
// import { useDispatch, useSelector } from 'react-redux';
// import { getRepos } from '../../actions/repos';
// import { IRepItem } from '../../reducers/reposReduser';
import { RepoProps } from './repo/Repo';
import User, { IUser } from './user/user';
import './pages.css';
import InitialState from '../InittialState/InitialState';
import noUser from '../../assets/svg/noUser.svg';
import Repos from './repos/Repos';

// import { IError } from '../../App';

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
        const repos = await onSubmitHand(value, pageNum);
        const userData = await onGetUser(value);
        setRepos(repos);
        setuserData(userData);
      }
    }
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, pageNum]);

  return (
    <div className="pages">
      {userData.name ? (
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
