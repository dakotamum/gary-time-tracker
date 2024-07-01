import { useState } from 'react';
import './styles/App.css';
import './styles/Common.css'
import Header from './components/Header';
import Todo from './components/Todo';

function App() {

  const [theme, setTheme] = useState('sevendeez');

  return (
    <div className="App" data-theme={theme}>
      <Header />
      <Todo status="pending" name="do this" priority="high"/>
      <Todo status="pending" name="no, do this" priority="high"/>
      <div className="generic-div">
        Add Do
      </div>
    </div>
  );
}

export default App;
