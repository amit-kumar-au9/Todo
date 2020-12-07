import React from 'react'
import {connect} from 'react-redux'
import '../css/taskcard.css'

class Task_Card extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      task: this.props.task_value
    }
  }

  popTasks = (task) => {
    this.props.dispatch({
      type: 'REMOVE_TASK',
      payload: task
    })
  }

  editTasks = (prv_value, new_value) => {
    this.props.dispatch({
      type: 'EDIT_TASK',
      previous_task_value: prv_value,
      updated_task_value: new_value
    })
    
    this.setState({
      task: new_value
    })
  }
  
  onChangeHandler = (e) => {
    this.setState({
        task: e.target.value
    })
  }
  
  render(){
    return(
      <div className="card-inside" key={this.props.key}>
        <textarea className="taskCard_input" value={this.state.task} onChange ={this.onChangeHandler}>{this.state.task}</textarea>
        <button 
          className="task-button text-white btn bg-success" 
          onClick={() => this.editTasks(this.props.task_value, this.state.task)}>
            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
        </button>
        <button 
          className="task-button btn btn-danger" 
          onClick={() => this.popTasks(this.props.task_value)}>
            <i className="fa fa-trash" aria-hidden="true"></i>
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    tasks : state.tasks
  }
}

export default connect(mapStateToProps)(Task_Card);
