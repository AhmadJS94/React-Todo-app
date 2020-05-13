import React from 'react';
import ToDo from "./components/toDo.js"
import './App.css';
import './index.css';
import todosData from './todosData'


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }


  
  handleChange(id){
  this.setState(prevState =>{
  const updatedState = prevState.todos.map(todo => {
    if (todo.id === id) {
      return {
        ...todo,
        completed: !todo.completed
      } 
    }
    return todo
  })
  return {
    todos: updatedState
  }
})
  }


  render() {
    const todoComponents = this.state.todos.map(item => <ToDo key={item.id} content={item}
       handleChange={this.handleChange}/>)
    return (
      <div className='todo-list'>
        {todoComponents}
      </div>
    )
  }
}

// function App(){
//   const todoComponents = todosData.map(item => <ToDo key={item.id} content={item}/>)
//   return (
//     <div className='todo-list'>
//    {todoComponents}
//    </div>
//   );
// }

export default App ;
