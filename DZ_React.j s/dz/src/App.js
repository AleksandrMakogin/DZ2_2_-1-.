
import './App.css';

import TodoItem from './Componenets/TodoItem'
import Items from './Componenets/Items'



function App() {
  return (
    
      <div className='Container' >
        {
          Items.map(item=><TodoItem id={item.id} text={item.text} completed={item.completed}/>)
        }
      </div>
  
  );
}

export default App;
