import { useState } from "react"
import { ListaTareas } from "./ListaTareas"

export const TodoApp = () => {

    const [newTarea, setNewTarea] = useState<string>('')
const [listaTareas, setlistaTareas] = useState<string[]>(['Hola, Bienvenido', 'Hello, Welcome'])

   const handlerAddTask =()=>{
      if (newTarea.trim() === '') return
      setlistaTareas(tareasAnteriores => [...tareasAnteriores,newTarea])
      setNewTarea('')
   }

   const handlerBorrarTarea = (index:number)=>{
     setlistaTareas(tareas=>tareas.filter((_,i)=>i !== index))
   }  

  return (
    <div>
        <h1>
        Lista de Tareas 
        </h1>
<div className="caja">
    <input type="text" 
    value={newTarea}
    onChange={(e)=>setNewTarea(e.target.value)}
    placeholder="Nueva Tarea → new task"
    />
    <button className="añadir" onClick={handlerAddTask}>
        añadir
    </button>
</div>
<ListaTareas listaTareas={listaTareas} borrarTarea={handlerBorrarTarea}/>
    </div>
  )
}