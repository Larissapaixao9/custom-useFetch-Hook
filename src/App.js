import React from 'react'
import useFetch from './useFetch';

function App() {
  const URL = "https://v2.jokeapi.dev/joke/Any"

  const {data, loading, erro} = useFetch(URL)

  if(loading) return <h1>Carregando...</h1>

  if(erro) console.log(erro)
  return (
    <div className="App">

      <h1>{data?.setup}: {data?.delivery}</h1>
    </div>
  );
}

export default App;
