import Atleta from '../Atleta'
import './Categoria.css'

const Categoria = (props) => {

    const css = { backgroundColor: props.corSecundaria }
    return (

        (props.atletas.length > 0) ? <section className='categoria' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='atletas'>
                {props.atletas.map(atleta => <Atleta corDeFundo={props.corPrimaria} key={atleta.nome} nome={atleta.nome} equipe={atleta.equipe} peso={atleta.peso} imagem={atleta.imagem} />)}
            </div>
        </section>
        : ''
    )
}

export default Categoria