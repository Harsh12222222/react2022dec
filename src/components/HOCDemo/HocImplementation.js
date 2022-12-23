import {useState} from 'react'

const HOCImplementation = (OriginalComponent)=>{  
    //  OriginalComponent = ClickCounter

      function NewComponent(){
         const [count , setCount] = useState(0)  

         const incrementCounter = ()=>{
            setCount(prevCount=> prevCount +1)
         }

         return <OriginalComponent 
                     mycount={count} 
                     myincrementCounter={incrementCounter}/>
        //  return <ClickCounter count={count} incrementCounter={incrementCounter}/>
      }

      return NewComponent 
      //  return <ClickCounter 
      //                   count={count} 
     //                    incrementCounter={incrementCounter}/>


}

export default HOCImplementation