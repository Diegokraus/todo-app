import { useRef, useState } from "react"
import { Task } from "./components/Task"
import styles from './App.module.css'

export function App() {
  const inputRef = useRef(null)
  const [tasks, setTasks] = useState([])

  function handleAddTask(){
    const newTask = {
      id: tasks.length + 1,
      title: inputRef.current.value,
      isCompleted: false
    }
    setTasks([...tasks, newTask])
    inputRef.current.value = ''
  }

  function handleCompleteTask(id){
    const taskIndex = tasks.findIndex(item => item.id === id)

    if(taskIndex === -1){
      return
    }
    const newTasks = [...tasks]
    newTasks[taskIndex].isCompleted = true
    setTasks(newTasks)

  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Todo App</h1>

      <div className={styles.inputGroup}>
        <input className={styles.input} placeholder="Nome da tarefa" ref={inputRef} type="text" />
        <button className={styles.button} onClick={handleAddTask}>Add</button>
      </div>

      <div className={styles.tasks}>
        {tasks.length > 0 && tasks.map(item => (
          <Task key={item.id} task = {item} handleCompleteTask={handleCompleteTask} />
        ))}
        {!tasks.length && <p>Nenhuma tarefa ainda...</p>}
      </div>

    </main>
  )
}


