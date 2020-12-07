import React from 'react'
import {connect} from 'react-redux'
import '../css/header.css'

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            new_task: '',
            error: false,
            errorMsg: 'Task Already Exists'
        }
    }

    onChangeHandler = (e) => {
        this.setState({
            new_task: e.target.value
        })
    }

    pushTasks = (e) =>{
        e.preventDefault()
        const error = (this.props.tasks.indexOf(this.state.new_task) === -1)
        if (error){
            if (this.state.new_task){
                this.props.dispatch({
                    type: 'ADD_TASK',
                    payload: this.state.new_task
                })
            }
            this.setState({
                ...this.state,
                error: false,
                new_task: ''
            })
        }
        else{
            this.setState({
                ...this.state,
                error: true,
                new_task: ''
            })
        }
    }
    
    render(){
        return(
            <div className="card_header">
                <h1 className="pb-1">Task To Do </h1>
                <form className="form-inline" onSubmit={this.pushTasks}>
                    <input type="text" value={this.state.new_task} name="value" placeholder="Enter the task" onChange={this.onChangeHandler}/>
                    <button className="btn btn-success" type="submit">ADD</button>
                </form>
                <small>{this.state.error && this.state.errorMsg}</small>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        tasks : state.tasks
    }
}
export default connect(mapStateToProps)(Header);