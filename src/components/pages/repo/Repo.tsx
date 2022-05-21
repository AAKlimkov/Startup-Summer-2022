import { FunctionComponent } from 'react';

export interface RepoProps {
  name: string;
  stargazers_count: string;
  updated_at: string;
  html_url: string;
  description: string
}

const Repo: FunctionComponent<RepoProps> = (props) => {
  const { name, description, html_url } = props;
  return (
    <div className="repo">
      <div className="repo-header">
      <a href={html_url} className="repo-link">
        {name}
      </a>
      <div className="repo-description">{description}</div>
      </div>
    </div>
  );
};

export default Repo;
