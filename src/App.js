import React,{useState} from 'react'
import {addTodo, editTodo} from './action/action'
import {connect} from 'react-redux'



export function App(props){

  const [todo, setTodo] = useState('');
  const [index,setIndex] = useState('');
  const [isEdit,setIsEdit] = useState(false);

  const addNewTodo = (e) =>{
    e.preventDefault();
    if(isEdit){
      let editItem = {
        index: index,
        value: todo
      }
      props.editTodo(editItem);
      setTodo('');
      setIsEdit(false);
    }
    else{
      props.addTodo(todo);
    }
  }
  const editTodoItem = (event, index) => {
    event.preventDefault();
    setIsEdit(true);
    setIndex(index)
    setTodo(props.todoElementState[index])
  }


return(

  <div>
    <h2> Todo using redux </h2>
    <input type='text' value={todo} onChange={(e)=> setTodo(e.target.value)}/>
    <button onClick={(e)=> addNewTodo(e)}> {isEdit? "EDIT": "ADD"} </button>
    {props.todoElementState.length > 0 &&
        props.todoElementState.map((element,index) => (
          <>
            <li >
              {element}
              <button onClick={e => editTodoItem(e, index)}>Edit</button>
            </li>
          </>
        ))}
  </div>
);
}

const mapStateToProps = (state) => ({
  todoElementState: state
})

const mapStateToDispatch = (dispatch) => ({
  addTodo: todo => dispatch(addTodo(todo)),
  editTodo: editItem => dispatch(editTodo(editItem))
})

export default connect(mapStateToProps,mapStateToDispatch)(App);
