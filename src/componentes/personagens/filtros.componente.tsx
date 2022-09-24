import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  fetchCharacters,
  searchSelector,
  setSearch
} from '../../state/characters';
import './filtros.css';

const Filtros = () => {
  const dispatch = useDispatch();
  const search = useSelector(searchSelector);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
    dispatch(fetchCharacters());
  };

  return (
    <div className="filtros">
      <label htmlFor="nome">Filtrar por nome:</label>
      <input
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nome"
        value={search}
        onChange={handleChange}
      />
    </div>
  );
};

export default Filtros;
