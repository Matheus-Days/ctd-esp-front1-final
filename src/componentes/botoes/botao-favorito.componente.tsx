import React from 'react';
import startFilledSvg from '../../assets/img/star_filled.svg';
import startOutlinedSvg from '../../assets/img/star_outline.svg';
import "./botao-favorito.css";

interface IBotaoFavoritoProps {
  isFavorito: Boolean;
  onClick?: (e: React.MouseEvent) => void;
}

/**
 * Botão que indica se um elemento é favorito ou não, e dá a possibilidade de marcá-lo/desmarcá-lo
 *
 * Terá que tipar as propriedades se utilizar este componente
 *
 *
 * @returns Elemento JSX
 */
const BotaoFavorito = ({ isFavorito, onClick }: IBotaoFavoritoProps) => {
  const src = isFavorito ? startFilledSvg : startOutlinedSvg;

  return (
    <div className="botao-favorito" onClick={(e) => onClick && onClick(e)}>
      <img src={src} alt={"favorito"} />
    </div>
  );
};

export default BotaoFavorito;
