import AddTask from "./components/AddTask";
import Tasks from "./components/tasks";

function App() {
  // State (Estado)
  //message virou a nova variável no lugar do let message, setMessage é a variável que vai
  // receber o novo valor

  //let message = "Olá Mundo!";
  return (
    <div>
      <h1 className="text-red-500">Gerenciador de Tarefas</h1>;<Tasks></Tasks>
      <AddTask></AddTask>
    </div>
  );
}

export default App;
