import './Atleta.css';

const Atleta = ({nome, equipe, peso, imagem, corDeFundo}) => {
    return (<div className='atleta'>
        <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h1>{nome}</h1>
            <h4>{equipe}</h4>
            <h4>{peso}</h4>
        </div>
    </div>)

}

export default Atleta