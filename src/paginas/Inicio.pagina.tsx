import Filtros from '../componentes/personagens/filtros.componente';
import GradePersonagens from '../componentes/personagens/grade-personagens.componente';
import Paginacao from '../componentes/paginacao/paginacao.componente';
import { useDispatch } from 'react-redux';
import {
  charactersSelector,
  fetchCharacters,
  nextPage,
  previousPage,
  setSearch
} from '../state/characters';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

/**
 * Esta é a página principal. Aqui você deve ver o painel de filtro junto com a grade de personagens.
 *
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns Página inicio
 */
const PaginaInicio = () => {
  const charactersResponse = useSelector(charactersSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch])

  const handlePreviousPage = () => {
    dispatch(previousPage());
    dispatch(fetchCharacters());
  };

  const handleNextPage = () => {
    dispatch(nextPage());
    dispatch(fetchCharacters());
  };
  
  const handleClearSearch = () => {
    dispatch(setSearch(''));
    dispatch(fetchCharacters());
  }

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personagens</h3>
        <button className="danger" onClick={handleClearSearch}>Limpar filtros</button>
      </div>
      <Filtros />
      <Paginacao
        disablePrev={!charactersResponse.info?.prev}
        disableNext={!charactersResponse.info?.next}
        prev={handlePreviousPage}
        next={handleNextPage}
      />
      <GradePersonagens characters={charactersResponse.results} />
      <Paginacao
        disablePrev={!charactersResponse.info?.prev}
        disableNext={!charactersResponse.info?.next}
        prev={handlePreviousPage}
        next={handleNextPage}
      />
    </div>
  );
};

export default PaginaInicio;
