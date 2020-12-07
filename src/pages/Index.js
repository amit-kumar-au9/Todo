import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import TaskCard from '../components/TaskCard'
import {connect} from 'react-redux'
import '../css/index.css'

class Index extends React.Component{
    render(){
        return(
            <>  
                <Navbar/>
                <Header/> 
                <div className="container-tasks mt-4">
                    {
                        this.props.tasks.map((task,idx) => {
                            return (
                                <TaskCard task_value={task} key={idx} id={idx}/>
                                )
                            })
                        }
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        tasks : state.tasks
    }
}

export default connect(mapStateToProps)(Index);