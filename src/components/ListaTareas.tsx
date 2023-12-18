import { Tarea } from "./Tarea"

type PropsListaTarea = {
   listaTareas:string[]
   borrarTarea:(index:number)=>void
}

export const ListaTareas = ({listaTareas,borrarTarea}:PropsListaTarea) => {
  return (
    <div className="taskList">
    {
        listaTareas.map((task,index)=>(

            <Tarea key={index} tarea={task} borrarTarea={()=>borrarTarea(index)}></Tarea>
        )
        )}

    </div>
  )
}