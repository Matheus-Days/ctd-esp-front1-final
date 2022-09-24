import "./paginacao.css";

interface IPaginacaoProps {
  next?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  prev?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disablePrev: boolean;
  disableNext: boolean;
}

/**
 * Componente que contém os botões para paginar
 *
 * Você deve adicionar as propriedades necessárias para que funcione corretamente
 *
 *
 * @returns Elemento JSX
 */
const Paginacao = ({ next, prev, disableNext, disablePrev }: IPaginacaoProps) => {
  return (
    <div className="paginacao">
      <button disabled={disablePrev} className={"primary"} onClick={prev}>
        Anterior
      </button>
      <button disabled={disableNext} className={"primary"} onClick={next}>
        Próximo
      </button>
    </div>
  );
};

export default Paginacao;
