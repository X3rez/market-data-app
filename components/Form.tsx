import { useState,FormEvent } from "react";
import styles from '../styles/form.module.css'


export default function Form() {
    const [Data,setData] = useState<{}[] | null >([])

    const handlerSubmit = async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        try {
            const InputValue:string = e.target[0].value
            const fullUrl:string = `https://www.alphavantage.co/query?function=${'TIME_SERIES_INTRADAY'}&symbol=${InputValue.toUpperCase()}&interval=${'5min'}&apikey=${process.env.NEXT_PUBLIC_TOKEN_API}`

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
          <input type="text" id="" placeholder='Type the Symbol'/>
          <input type="submit" value='Search'/>
        </form>

      </main>
  )
}
