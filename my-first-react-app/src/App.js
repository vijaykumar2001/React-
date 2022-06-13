import logo from './logo.svg';
import './App.css';
import Hey from './Component/Hello';
// import { Hello } from './Component/Hello';
import Welcome from './Component/Welcome';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Hey/>
      <Welcome/>
    </div>
  );
 }

export default App;