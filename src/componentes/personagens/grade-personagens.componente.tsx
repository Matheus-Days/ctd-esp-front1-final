import './grade-personagem.css';
import CardPersonagem from './card-personagem.componente';
import { ICharacter } from '../../state/characters';

interface IGradePersonagemProps { characters?: ICharacter[] }

/**
 * Grade de personagens para a página inicial
 *
 * Você precisará adicionar as funções necessárias para exibir e paginar os personagens
 *
 *
 * @returns Elemento JSX
 */
const GradePersonagem = ({ characters }: IGradePersonagemProps) => {
  return (
    <div className="grade-personagens">
      {characters && characters.map((char) => (
        <CardPersonagem key={char.id} characterData={char} />
      ))}
    </div>
  );
};

export default GradePersonagem;
