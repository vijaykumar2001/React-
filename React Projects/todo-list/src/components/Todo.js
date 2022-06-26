import { Component } from "react";

class Todo extends Component{
    constructor(){
        super();
        this.state = {
            tasks : ["Read a book", "Solve a DSA question", "Learn React"]
        }
    }

    handleChange = (e) => {
        this.setState({
            currTask : e.target.value
        })
    }

    handleAddTask = () => {
        this.setState({
            tasks : [...this.state.tasks, this.state.currTask],
            currTask : ""
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
                    <li>
                        <p>{ele}</p>
                    </li>
                    ))}
                </ul>
            </div>
            </>
        );
    }
}

export default Todo;
