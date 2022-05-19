import { FunctionComponent } from 'react';
import searchLogo from '../../svg/search.svg';
import './initialState.css'

interface InitialProps {}

const Initial: FunctionComponent<InitialProps> = () => {
  return (
    <div>
      <div className='initial'>
        <img src={searchLogo} alt="searchLogo" />
        <span>Start with searching a GitHub user</span>
      </div>
    </div>
  );
};

export default Initial;
