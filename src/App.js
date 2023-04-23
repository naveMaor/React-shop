import logo from './logo.svg';
import './App.css';
import Todos from "./components/Todos";
import Counter from "./components/Counter";
import ShowHideText from "./components/ShowHideText";
function App() {
  //פה כותבים את הפונקציה

  return (
      <div className="App">
         {/*<Counter />*/}
          <ShowHideText> <h1>todo list</h1> </ShowHideText>
          {/*<ShowHideText> <h1>hello</h1> </ShowHideText>*/}
          <Todos/>
      </div>
  );
}

export default App;
