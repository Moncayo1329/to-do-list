import './TodoCounter.css';



function TodoCounter({ total, completed}){
    return (
    <h1 >
        
        
        Has completado {completed} de {total} To-do-list
      
    </h1>
    );
    }   

    export {TodoCounter} ;