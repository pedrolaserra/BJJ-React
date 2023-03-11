import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [equipe, setEquipe] = useState('')
    const [peso, setPeso] = useState('')
    const [imagem, setImagem] = useState('')
    const [categoria, setCategoria] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoAtletaCadastrado({
            nome,
            equipe,
            peso,
            imagem,
            categoria
        })
        
        setNome('')
        setEquipe('')
        setPeso('')
        setImagem('')
        setCategoria('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>INSCREVA-SE</h2>
                <CampoTexto 
                    obrigatorio={true}
                    placeholder="Nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    placeholder="Equipe" 
                    valor={equipe}
                    aoAlterado={valor => setEquipe(valor)}
                />

                <CampoTexto
                    obrigatorio={true}
                    placeholder="Peso" 
                    valor={peso}
                    aoAlterado={valor => setPeso(valor)}
                />

                <CampoTexto
                    obrigatorio={true}
                    placeholder="Imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa
                    obrigatorio={true}
                    label= <b>CATEGORIA</b> 
                    itens={props.categorias}
                    valor={categoria}
                    aoAlterado={valor => setCategoria(valor)}
                />


                <Botao texto="ENVIAR"/>

            </form>
        </section>
    )
}

export default Formulario