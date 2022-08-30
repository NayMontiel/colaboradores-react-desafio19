import Header from "./components/Header";
import Formulario from "./components/Formulario";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import { ListaColaboradores } from "./components/ListaColaboradores";
import { useState } from "react";

function App() {

  const [list, setList] = useState(ListaColaboradores)
  const [searchData, setSearchData] = useState(list)

  const getChildren = (data) => {
    setSearchData(data)
  }

  return (
    <div className="App">

      {/* func funciona como un props y lo que hace es obtener la informacion del componente hijo */}
      <Header func={getChildren} list={list}/>

      <Formulario list={list} setList={setList}/>

      {/* searchData y setSearchData  se usa para "pintar" la informacion de busqueda en el header */}
      <TodoList searchData={searchData} setSearchData={setSearchData} list={list} setList={setList}/>

      <Footer />
    </div>
  );
}

export default App;
