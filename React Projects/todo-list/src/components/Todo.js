import { Component } from "react";

class Todo extends Component{
    constructor(){
        super();
        this.state = {
            tasks : ["Read a book", "Solve a DSA question", "Learn React"]
        }
    }

    render(){
        return(
            <>
            {/* <div>This is a Todo component</div> */}
            <div>
                <input type = "text"/>
                <button>Add Task</button>
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
