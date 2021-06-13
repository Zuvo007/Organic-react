import "./App.css";
import Navbar from "./components/Navbar";
import Brief from "./components/Brief";
import Greetings from "./components/Greetings";
import Imagecard from "./components/Imagecard";
import Presentative from "./components/Presentative";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Brief />
      <Greetings />
      <Imagecard />
      <Presentative />
      <Subscribe />
    </div>
  );
}

export default App;
