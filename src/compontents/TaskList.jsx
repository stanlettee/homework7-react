import { Component } from "react";
import styles from "./styles.module.css"

export default class TaskList extends Component {
    
    tasks = [
            {id: 1, text: "Hello world"},
            {id: 2, text: "Hello world"},
            {id: 3, text: "Hello world"},
            {id: 4, text: "Hello world"},
            {id: 5, text: "Hello world"}
        ]

    delete = (id) => {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.forceUpdate();
    }

    render() {
        return (
            <ul className={styles.list}>
            {this.tasks.map((task) => (
            <li key={task.id} className={styles.item}>
                <p className={styles.id}>Id: {task.id}</p>
                <p className={styles.text}>Text: {task.text}</p>
                <button className={styles.button} onClick={() => this.delete(task.id)}>Delete</button>
            </li>
            ))}
            </ul>
        )
    }  
}