import { useState,FormEvent } from "react";
import styles from '../styles/form.module.css'


export default function Form() {
    const [Data,setData] = useState<{}[] | null >([])

    const handlerSubmit = async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        try {
            const InputValue:string = e.target[0].value.toUpperCase()
            const fullUrl:string = `https://cloud.iexapis.com/stable/stock/${InputValue}/intraday-prices?token=${process.env.NEXT_PUBLIC_TOKEN_API}`
            
            const response = await fetch(fullUrl)
            const data = await response.json()
            setData(data)
            console.log(Data)
          } catch (error) {
              console.log(error)
          }    
    }

  return (

      <main>

        <form onSubmit={handlerSubmit}>
          <input type="text" id="" placeholder='Search your stock'/>
          <input type="submit" value='Search'/>
        </form>

      </main>
  )
}
