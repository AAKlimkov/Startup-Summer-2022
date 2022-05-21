import { FunctionComponent } from 'react';
import './user.css'

export interface IUser {
  name: string;
  login: string;
  followers: string;
  following: string;
  html_url: string;
  avatar_url: string;
}

const User1: FunctionComponent<IUser> = (props) => {
  const { name, login, followers, following, avatar_url } = props;
  return (
    <div className="user">
      <img src={avatar_url} alt="avatar_url" className='avatar'/>
      <div className="name">{name}</div>
      <div className="login">{login}</div>
      <div className="followers">{followers}</div>
      <div className="following">{following}</div>
    </div>
  );
};

export default User1;
