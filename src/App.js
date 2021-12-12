import './App.css';
import Sidebar from './Sidebar/Sidebar'
import Mainbody from './Mainbody/Mainbody'

function App() {
  return (
    <div className="App">
      <div className = 'port-container'>
        <Sidebar /> 
        <Mainbody />
      </div>
    </div>
  );
}

export default App;
