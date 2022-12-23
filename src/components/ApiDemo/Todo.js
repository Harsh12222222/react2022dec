import axios from 'axios'
import React, { useEffect,useState } from 'react'
import UserDetails from '../../Views/UserDetails'

export default function Todo() {

  const [todoList , setTodoList] = useState()  
  const [newTodoDetails, setNewTodoDetails] = useState({id:0,title:'',completed:false})
  const [checked,setChecked] = useState(false)

  useEffect(()=>{
      
      getTodoList()

  },[])
   
  const getTodoList = ()=>{
        axios.get('http://localhost:4000/todos')
             .then((response)=>{
                 
                  setTodoList(response.data)
             })
             .catch((error)=>{
                  console.log(error)
             }) 
  } 
 const createRecord = ()=>{

     axios.post(
          'http://localhost:4000/todos',
          newTodoDetails,
          {
              headers:{'content-type':'application/json'}
          }
     )
     .then((response)=>{
          console.log(response)
          alert('Data created successfully')
          getTodoList()
     })
     .catch((error)=>{
          console.log(error)
     })


 }

 const editRecord = (userSelectedTodoToUpdate)=>{
  console.log(userSelectedTodoToUpdate)
// userSelectedTodoToUpdate =   {title: 'BUy COFFEE', completed: true, id: 7}
  setNewTodoDetails(userSelectedTodoToUpdate)

  //newTodoDetails =   {title: 'BUy COFFEE', completed: true, id: 7}


 }

 const updateRecord = ()=>{
      
  //newTodoDetails =   {title: 'BUy COFFEE', completed: true, id: 7}
          axios.put(
               'http://localhost:4000/todos/'+newTodoDetails.id,
               newTodoDetails,
               {
               headers:{'content-type':'application/json'}
               }
          )
          .then((response)=>{
               console.log(response)
               alert('Data updated successfully')
               getTodoList()
          })
          .catch((error)=>{
               console.log(error)
          })
 }

 const deleteRecord = (id)=>{
    let response =  window.confirm('Are you sure to delete ?')
    if(response){
       axios.delete('http://localhost:4000/todos/'+id)
               .then((response)=>{
                     getTodoList()
               })
               .catch((error)=>{
                    console.log(error)
               })
    }

 }
  return (
    <div  style={{'textAlign':'center'}}>
          <h1>Todo List</h1>
           {/* Add Todo Section start */}
           <div>           
              <p>
                <span>Add New Record</span> &nbsp;&nbsp; 
               
                <input type="text" placeholder='Enter Title' name='title'   onChange={(event)=>setNewTodoDetails({...newTodoDetails,title:event.target.value})} />
                &nbsp;&nbsp;
                <input type="checkbox" name="completed" onChange={event=>setNewTodoDetails({...newTodoDetails,completed:!newTodoDetails.completed})} />Completed
                &nbsp;&nbsp;
                <button onClick={createRecord}>Create</button> 
              </p>
              <hr/>
         </div>
          {/* Add Todo Section end */}
        
          {/* Display Todo Section start */}
          <table border={1} align="center" >
              <thead>
                <tr style={{backgroundColor:'purple', color:'white'}}>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Completed</th>
                    <th colSpan={2}>Action(s)</th>
                </tr>
              </thead>
               <tbody>
                    {
                       todoList? todoList.map((todo,index)=>(
                              <tr key={todo.id}>
                                 <td>{todo.id}</td>
                                 <td>{todo.title}</td>
                                 <td style={{color:todo.completed?'green':'red'}}>
                                    {todo.completed?'Done':'Pending'}
                                 </td>
                                 <td>
                                    <button onClick={()=>editRecord(todo)}>Edit</button>
                                 </td>
                                 <td>
                                    <button onClick={()=>deleteRecord(todo.id)}>Delete</button>
                                 </td>
                              </tr>
                        ))
                        :
                         <tr>
                            <td colSpan={3}>Loading..</td>
                         </tr>
                    }
               </tbody>
          </table>
          {/* Display Todo Section end */}

          {/* Edit Todo Section start */}
         {/* newTodoDetails =   {title: 'BUy COFFEE', completed: true, id: 7} */}
          <div>   
          <hr/>        
              <p>
                <span>Update Record</span> &nbsp;&nbsp; 
               
                <input type="text" value={newTodoDetails.title} placeholder='Enter Title' name='title'  
                          onChange={(event)=>setNewTodoDetails({...newTodoDetails,title:event.target.value})} />
                &nbsp;&nbsp;
                <input type="checkbox" name="completed"
                           checked={newTodoDetails.completed} 
                           onChange={event=>setNewTodoDetails({...newTodoDetails,completed:!newTodoDetails.completed})} />Completed
                &nbsp;&nbsp;
                <button onClick={updateRecord}>Update</button> 
              </p>
              
         </div>
          {/* Edit Todo Section end */}
         
            
    </div>
  )
}
