import { FunctionComponent } from 'react';
import logo from '../../svg/github.svg';
import Input from '../Input/Input';

interface HeaderProps {
  onSubmitHead: (value: string) => void;
}

const Header: FunctionComponent<HeaderProps> = ({ onSubmitHead }) => {
  return (
    <header className="App-header">
      <img src={logo} alt="github logo" />
      <Input onSubmitInp = {onSubmitHead} />
    </header>
  );
};

export default Header;
