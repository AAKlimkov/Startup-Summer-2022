import { FunctionComponent } from 'react';
import './user.css';
import followersImg from '../../../assets/svg/followers.svg';
import followingImg from '../../../assets/svg/following.svg';
export interface IUser {
  name: string;
  login: string;
  followers: string;
  following: string;
  html_url: string;
  avatar_url: string;
  public_repos: string
}

const User1: FunctionComponent<IUser> = (props) => {
  const { name, login, followers, following, avatar_url, html_url } = props;
  return (
    <div className="user">
      <img src={avatar_url} alt="avatar_url" className="avatar" />
      <div className="name">{name}</div>
      <a href={html_url} className="user-link" target="_blank" rel="noreferrer">
        {login}
      </a>
      <div className="follow">
        <div className="followers">
          <img src={followersImg} alt="followers logo" />
          {followers} followers
        </div>
        <div className="following">
          <img src={followingImg} alt="following logo" />
          {following} following
        </div>
      </div>
    </div>
  );
};

export default User1;
