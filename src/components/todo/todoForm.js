import React from 'react'

export const TodoForm = (props) => (        <form>
          <input type="text" onChange={props.handelInputChange} value={props.currentTodo}/>
        </form>
)
