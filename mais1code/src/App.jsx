import { useState } from 'react'

const minhaListaIngredientes = [
  {id: 0, ingrediente: 'frango'},
  {id: 1, ingrediente: 'alho'},
  {id: 2, ingrediente: 'óleo'},
  {id: 3, ingrediente: 'creme de leite'},
  {id: 4, ingrediente: 'massa de tomate'},
  {id: 5, ingrediente: 'batata palha'},
]

function App() {
  const [listaIngredientes, setListaIngredientes] = useState(minhaListaIngredientes)
  const [inputIngrediente, setInputIngrediente] = useState('')

  const AddIngrediente = () => {
    const listaNova = [...listaIngredientes, {id: listaIngredientes.length, ingrediente: inputIngrediente}]
    setListaIngredientes(listaNova)
    setInputIngrediente('')
  }

  const RemoveIngrediente = (selecionado) => {
    let filtrado = listaIngredientes.filter(item => item.id !== selecionado.id )
    setListaIngredientes(filtrado)
  }

  return (
    <div>
      <h2> Strogonoff </h2>

      <label> Ingrediente </label>
      <input id="input-ingrediente" type="text" value={inputIngrediente} onChange={(e) => setInputIngrediente(e.target.value)}/>
      <button id="btn-adicionar-ingrediente" onClick={() => AddIngrediente()}> Adicionar </button>

      <h3> Ingredientes </h3>
      <ul id="ul-ingredientes">
        {listaIngredientes.map(item => 
          <li key={item.id}>
            {item.ingrediente}
            <button onClick={() => RemoveIngrediente(item)}>x</button>
          </li>
        )}
      </ul>

      <div style={{height: '10px', width: '100%', background: 'red'}}></div>
      <br />

      <label> Passo </label>
      <input id="input-passo" type="text" />
      <button id="btn-adicionar-passo" onClick={() => {}}> Adicionar </button>

      <h3> Modo de Preparo </h3>
      <ol id="ol-passos">
      </ol>
    </div>
  )
}

export default App
