import "./App.css";
import { TailSpin } from "react-loader-spinner";

function App() {
  return (
    <>
      <div id="app">
        <TailSpin color="#808000" height={80} width={80} />
        <span id="text">Loading...</span>
      </div>
    </>
  );
}

export default App;
