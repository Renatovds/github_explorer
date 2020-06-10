import React, { useState, FormEvent, useEffect } from 'react';
import { Title, Form, Repository, Error } from './styleTitle';
import {Link} from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api'
import icon from '../../assets/icon.svg';


interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('')
  const [reposytories, setRepositories] = useState<Repository[]>(()=>{
    const repositoryLocalStorage = localStorage.getItem('@GithubExplorer:repositories');
    if(repositoryLocalStorage){
      return JSON.parse(repositoryLocalStorage);
    }
    return [];
  });
  const [inputError, setInputError] = useState('')

  async function addRepositoryHandler(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Digite autor/nome do repositório.')
      return
    };
    try {

      const response = await api.get<Repository>(`repos/${newRepo}`);

      const repository = response.data;

      setRepositories([...reposytories, repository])
      setInputError('');
    }
    catch (err) {
      setInputError('Erro na busca pelo repositório.')

    }


  }

  useEffect(() => {
    localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(reposytories))
  }, [reposytories]);

  return (
    <>
      <img src={icon} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub</Title>
      <Form hasError={!!inputError} onSubmit={addRepositoryHandler}>
        <input placeholder="Digite o nome do repositório" value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)} />
        <button type="submit">Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repository>
        {reposytories.map(repository => (

          <Link key={repository.full_name} to={`repositories/${repository.full_name}`}>
            <img src={repository.owner.avatar_url} alt="" />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight />
          </Link>

        ))}
      </Repository>


    </>
  );
};

export default Dashboard;
