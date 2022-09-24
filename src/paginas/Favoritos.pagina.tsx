import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GradePersonagens from "../componentes/personagens/grade-personagens.componente";
import { charactersSelector, clearFavorites, favoritesSelector, fetchFavorites, setCharacters } from '../state/characters';

/**
 * Esta é a página de favoritos. Aqui você deve ver todos os personagens marcados como favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns Página de favoritos
 */
const PaginaFavoritos = () => {
  const charactersResponse = useSelector(charactersSelector);
  const favorites = useSelector(favoritesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCharacters({}))
    dispatch(fetchFavorites());
  }, [dispatch, favorites])

  const handleClearFavorites = () => {
    dispatch(clearFavorites());
    dispatch(fetchFavorites());
  }

  return (
    <div className="container">
      <div className="actions">
        <h3>Personagens Favoritos</h3>
        <button className="danger" onClick={handleClearFavorites}>Remover tudo</button>
      </div>
      <GradePersonagens characters={charactersResponse?.results} />
    </div>
  );
};

export default PaginaFavoritos;
