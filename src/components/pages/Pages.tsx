import { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRepos } from '../../actions/repos';
import { IRepItem } from '../../reducers/reposReduser';
import Repo, { RepoProps } from './repo/Repo';

interface PagesProps {
  onSubmitHand: (value: string) => Promise<RepoProps[]>;
  value: string;
}

// const onSubmitHandle = async (value: string = 'AAKlimkov') => {
//   const url = `https://api.github.com/users/${value}/repos`;
//   const res = await fetch(url);
//   const data: RepoProps[] = await res.json();
//   console.log(data);

//   return data;
// };

const Pages: FunctionComponent<PagesProps> = ({
  onSubmitHand,
  value,
}) => {
  const [repos, setRepos] = useState<RepoProps[]>([]);
  const dispatch = useDispatch();
  //   const repos = useSelector<{ repos: IRepItem }, any[]>(
  //     (state) => state.repos.items
  //   );

  useEffect(() => {
    async function getData() {
      if (value) {
        const repos = await onSubmitHand(value);
        setRepos(repos);
      }
    }
    getData();
  }, [onSubmitHand, repos, value]);

  return (
    <div>
      {repos.map((repo: RepoProps) => (
        <Repo {...repo} />
      ))}
    </div>
  );
};

export default Pages;
