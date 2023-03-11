import { useState } from 'react';
import Banner from './componente/Banner';
import Formulario from './componente/Formulario';
import Categoria from './componente/Categoria';

function App() {

  const categorias = [

    {
      nome: 'Leve',
      corPrimaria: '#0F0D0E',
    },
    {
      nome: 'Médio',
      corPrimaria: '#920A0A',
    },
    {
      nome: 'Pesado',
      corPrimaria: '#0F0D0E',
    },
    {
      nome: 'Super-Pesado',
      corPrimaria: '#920A0A',
    },
    {
      nome: 'Absoluto',
      corPrimaria: '#0F0D0E',
    }
  ]

  const [atletas, setAtletas] = useState([])

  const aoNovoAtletaAdd = (atleta) => {
    debugger
    setAtletas([...atletas, atleta])
}


  return (
    <div className="App">
      <Banner/>
      <Formulario categorias={categorias.map(categoria => categoria.nome)} aoAtletaCadastrado={atleta => aoNovoAtletaAdd(atleta)}/> 

      {categorias.map(categoria => <Categoria
      key={categoria.nome}
      nome={categoria.nome}
      corPrimaria={categoria.corPrimaria}
      atletas={atletas.filter(atleta => atleta.categoria === categoria.nome)}
      />)}
    
    </div>
  );
}

export default App;
