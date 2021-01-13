import { useState,FormEvent,useEffect } from "react";
import styles from '../styles/form.module.css'
import Chart from "./Chart";
import CircleLoader from "react-spinners/CircleLoader";
import mapping from '../untils/mapping'
import { Input,IconButton,Select } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { css } from "@emotion/core"


export default function Form() {
    const [loanding,setLoanding] = useState<boolean>(false)
    const [dataLoaded,setDataLoaded] = useState<boolean>(false)
    const [Data,setData] = useState<{}[] | null>([])

    const handlerSubmit = async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        try {
            const InputValue:string = e.target[0].value
            const SelectValue:string = e.target[2].value
            if(!InputValue) return new Error('you need a type the symbol');
        
            const fullUrl:string = `https://www.alphavantage.co/query?function=${'TIME_SERIES_INTRADAY'}&symbol=${InputValue.toUpperCase()}&interval=${SelectValue}&apikey=${process.env.NEXT_PUBLIC_TOKEN_API}`

            setLoanding(()=>true)
            const response = await fetch(fullUrl)
            const data = await response.json()
            setData(data)
            setLoanding(()=>false)
            setDataLoaded(()=>true)
        } catch (error) {
            console.log(error)
        }    
    }

    const labelsData = [
        '07:05:00',
        '07:40:00',
        '08:05:00',
        '08:10:00',
        '08:15:00',
        '08:20:00',
        '08:25:00',
        '08:30:00',
        '08:45:00',
        '08:55:00',
        '09:05:00',
        '09:15:00',
        '09:20:00',
        '09:25:00',
        '09:30:00',
        '09:35:00',
        '09:40:00',
        '09:45:00',
        '09:50:00',
        '09:55:00',
        '10:00:00',
        '10:05:00',
        '10:10:00',
        '10:15:00',
        '10:20:00',
        '10:25:00',
        '10:30:00',
        '10:35:00',
        '10:40:00',
        '10:45:00',
        '10:50:00',
        '10:55:00',
        '11:00:00',
        '11:05:00',
        '11:10:00',
        '11:15:00',
        '11:20:00',
        '11:25:00',
        '11:30:00',
        '11:35:00',
        '11:40:00',
        '11:45:00',
        '11:50:00',
        '11:55:00',
        '12:00:00',
        '12:05:00',
        '12:10:00',
        '12:15:00',
        '12:20:00',
        '12:25:00',
        '12:30:00',
        '12:35:00',
        '12:40:00',
        '12:45:00',
        '12:50:00',
        '12:55:00',
        '13:00:00',
        '13:05:00',
        '13:10:00',
        '13:15:00',
        '13:20:00',
        '13:25:00',
        '13:30:00',
        '13:35:00',
        '13:40:00',
        '13:45:00',
        '13:50:00',
        '13:55:00',
        '14:00:00',
        '14:05:00',
        '14:10:00',
        '14:15:00',
        '14:20:00',
        '14:25:00',
        '14:30:00',
        '14:35:00',
        '14:40:00',
        '14:45:00',
        '14:50:00',
        '14:55:00',
        '15:00:00',
        '15:05:00',
        '15:10:00',
        '15:15:00',
        '15:20:00',
        '15:25:00',
        '15:30:00',
        '15:35:00',
        '15:40:00',
        '15:45:00',
        '15:50:00',
        '15:55:00',
        '16:00:00',
        '16:05:00',
        '16:15:00',
        '16:30:00',
        '16:40:00',
        '17:00:00',
        '18:40:00',
        '19:55:00']

     //dataloaded to check if data already exist
    const stockData = dataLoaded && mapping(Data,"Time Series (5min)","1. open","4. close").map(el=> parseFloat(el))

    const stock = { 
        labels:labelsData,
        datasets:[{
            label:[dataLoaded && Data['Meta Data']['2. Symbol']],  //dataloaded to check if data already exist
            data:stockData,
            backgroundColor:['rgba(255, 0, 0, 0.397)'],
        }]}

    const loaderStyles = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    `;

    return (
        
      <main className={styles.main}>

        <form onSubmit={handlerSubmit} className={styles.formulary}>
          <Input autoFocus={true} placeholder='Type the Symbol' required color="secondary"/>
          <IconButton type="submit" color='secondary'>
                <SearchIcon/>
          </IconButton>

            <Select defaultValue='5min' color='secondary'>
                <option value="5min">5min</option>
            </Select>

        </form>
            <CircleLoader color="red" loading={loanding} size={60} css={loaderStyles} />
            {dataLoaded &&  <Chart data={stock}/>}
      </main>
  )
}