import React from 'react'

export default function Student(props) {
  return (
    <div>
       {
         props.studentInfo.map((std)=>(
            // std =  {id:101, name:'John', age: 23},

            <li key={std.id}>
                 {std.id} ,{std.name},{std.age},{std.gender}
            </li>

         ))
       }
      
    </div>
  )
}
