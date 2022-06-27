import { Component } from "react";

class Todo extends Component{
    constructor(){
        super();
        this.state = {
            tasks : [],
            currTask: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            currTask : e.target.value
        })
    }

    handleAddTask = () => {
        this.setState({
            tasks : [...this.state.tasks, {task: this.state.currTask, id: this.state.tasks.length+1}],
            currTask : ""
        })
    }

    handleDeleteTask = (id) => {
        let newarr = this.state.tasks.filter((ele) => {
            return ele.id!=id
        })
        this.setState({
            tasks: [...newarr]
        })

    }

    render(){
        return(
            <>
            {/* <div>This is a Todo component</div> */}
            <div>
                <input type = "text" value={this.state.currTask} onChange = {this.handleChange}/>
                <button onClick={this.handleAddTask}>Add Task</button>
                <ul>
                {this.state.tasks.map((ele) => (
                    <li key = {ele.id}>
                        <p>{ele.task}</p>
                        <button onClick={() => this.handleDeleteTask(ele.id)}>Delete Task</button>
                    </li>
                    ))}
                </ul>
            </div>
            </>
        );
    }
}

export default Todo;
