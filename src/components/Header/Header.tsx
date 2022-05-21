import { FunctionComponent } from 'react';
import logo from '../../assets/svg/github.svg';
import Input from '../Input/Input';

interface HeaderProps {
  getValue: (value: string) => void
}

const Header: FunctionComponent<HeaderProps> = ({ getValue }) => {
  return (
    <header className="App-header">
      <img src={logo} alt="github logo" />
      <Input getValue = {getValue} />
    </header>
  );
};

export default Header;
