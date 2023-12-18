

type PropsTarea = {
    tarea:string
    borrarTarea:()=>void
}

export const Tarea = ({tarea,borrarTarea}: PropsTarea) => {
  return (
    <div className="task">
 <span>{tarea}</span>
<button onClick={borrarTarea}>borrar tarea</button>
    </div>
  )
}