import { FunctionComponent, useState } from 'react';
import InitialState from '../../InittialState/InitialState';
import Repo, { RepoProps } from '../repo/Repo';
import { IUser } from '../user/user';
import noRepos from '../../../assets/svg/noRepos.svg';
import './repos.css';
import ReactPaginate from 'react-paginate';

interface ReposProps {
  userData: IUser;
  repos: RepoProps[];
  getPageNumber: (value: string) => void;
}

const Repos: FunctionComponent<ReposProps> = ({
  userData,
  repos,
  getPageNumber,
}) => {
  const [pageOffset, setPageOffset] = useState(0);
  const handlePageChange = (event: any) => {
    getPageNumber((event.selected + 1).toString());
    setPageOffset(event.selected);
  };
  return userData.public_repos ? (
    <div className="repos">
      <span className="repos-heading">
        Repositories ({userData.public_repos})
      </span>
      {repos.map((repo: RepoProps) => (
        <Repo {...repo} />
      ))}
      <ReactPaginate
        previousLabel="<"
        nextLabel=">"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        pageCount={Math.ceil(+userData.public_repos / 10)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        activeClassName="active"
        forcePage={pageOffset}
      />
    </div>
  ) : (
    <InitialState span="Repository list is empty" logo={noRepos} />
  );
};

export default Repos;
