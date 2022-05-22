import { FunctionComponent } from 'react';
import './initialState.css';

interface InitialProps {
  span: string;
  logo: string;
}

const Initial: FunctionComponent<InitialProps> = (props) => {
  return (
    <div className="initial">
      <img src={props.logo} alt="searchLogo" />
      <span>{props.span}</span>
    </div>
  );
};

export default Initial;
