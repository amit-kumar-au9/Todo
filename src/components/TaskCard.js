import React from 'react'
import {connect} from 'react-redux'
import '../css/taskcard.css'

class Task_Card extends React.Component{

  popTasks = () => {
    this.props.dispatch({
      type: 'REMOVE_TASK',
      payload: this.props.id
    })
  }

  editTasks = (e) => {
    
    this.props.dispatch({
      type: 'EDIT_TASK',
      payload:{ task_idx: this.props.id, new_value: e.target.value }
    })
  }
  
  render(){
    return(
      <>
        <div className="card-inside">
          <i className="task-button fa fa-times text-danger" onClick={this.popTasks} aria-hidden="true"></i>
          <textarea className="taskCard_input" value={this.props.task_value} onChange={this.editTasks}>
            {this.props.task_value}
          </textarea>
        <p className="hide text-light bg-dark">Make changes and save it directly.</p>
        </div>
      </>
    )
  }
}

export default connect()(Task_Card);
