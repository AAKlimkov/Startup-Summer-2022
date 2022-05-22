import { FunctionComponent } from 'react';
import './repo.css';

export interface RepoProps {
  name: string;
  stargazers_count: string;
  updated_at: string;
  html_url: string;
  description: string;
  message: string;
}

const Repo: FunctionComponent<RepoProps> = (props) => {
  const { name, description, html_url } = props;
  return (
    <div className="repo">
      <div className="repo-header">
        <a
          href={html_url}
          className="repo-link"
          target="_blank"
          rel="noreferrer"
        >
          {name}
        </a>
      </div>
      <div className="repo-description">{description}</div>
    </div>
  );
};

export default Repo;
