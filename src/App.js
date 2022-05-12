import './App.css';
import { ClassState } from './components/ClassState';
import { UseState } from './components/UseState'

function App() {
  return (
    <div className="App">
      <ClassState name='ClassState'/>
      <UseState name='UseState'/>
    </div>
  );
}

export default App;
