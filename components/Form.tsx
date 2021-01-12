import { useState,FormEvent,useEffect } from "react";
import styles from '../styles/form.module.css'
import Chart from "./Chart";

export default function Form() {
    const [loaded,setLoaded] = useState<boolean>(true)
    const [Data,setData] = useState<{}[] | null>([])

    const handlerSubmit = async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        try {
            const InputValue:string = e.target[0].value
            const SelectValue:string = e.target[2].value
            if(!InputValue) return new Error('you need a type the symbol');
        
            const fullUrl:string = `https://www.alphavantage.co/query?function=${'TIME_SERIES_INTRADAY'}&symbol=${InputValue.toUpperCase()}&interval=${SelectValue}&apikey=${process.env.NEXT_PUBLIC_TOKEN_API}`

            setLoaded(false)
            const response = await fetch(fullUrl)
            const data = await response.json()
            setData(data)
            setLoaded(true)
        } catch (error) {
            console.log(error)
        }    
    }

    useEffect(()=>{
        setTimeout(() => {
            console.log(Data)
        }, 10000);
    },[Data])



    
    const stock = { 
        labels:['10:00','10:05','10:10','10:15','10:20','10:25'],
        datasets:[{
            label:['me'],
            data:[2.00, 2.99, 2.40, 3.0, 5.5, 8.7],
            backgroundColor:['rgba(255, 0, 0, 0.397)'],
        }]}


    return (
        
        
      <main>

        <form onSubmit={handlerSubmit}>
          <input type="text" id="" placeholder='Type the Symbol'/>
          <input type="submit" value='Search'/>

            <select defaultValue='5min'>
                <option value="1min">1min</option>
                <option value="5min">5min</option>
                <option value="15min">15min</option>
                <option value="30min">30min</option>
                <option value="60min">60min</option>
            </select>

        </form>
            {/* <Chart data={stock}/> */}
      </main>
  )
}
