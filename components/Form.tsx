import { useState,FormEvent } from "react";
import styles from '../styles/form.module.css'
import Chart from "./Chart";
import CircleLoader from "react-spinners/CircleLoader";
import mapping from '../untils/mapping'
import { Input,IconButton,Select } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { css } from "@emotion/core"
import ButtonSave from "./ButtonSave";


export default function Form() {
    const [loanding,setLoanding] = useState<boolean>(false)
    const [dataLoaded,setDataLoaded] = useState<boolean>(false)
    const [Data,setData] = useState<{}[] | null>([])

    const handlerSubmit = async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        try {
            const InputValue:string = e.target[0].value
            const SelectValue:string = e.target[2].value        
            const fullUrl:string = `https://www.alphavantage.co/query?function=${'TIME_SERIES_INTRADAY'}&symbol=${InputValue.toUpperCase()}&interval=${SelectValue}&apikey=${process.env.NEXT_PUBLIC_TOKEN_API}`

            setLoanding(()=>true)
            const response = await fetch(fullUrl)
            const data = await response.json()
            setData(data)
            setLoanding(()=>false)
            setDataLoaded(()=>true)
        } catch (error) {
            console.log('there are err')
        }    
    }

    const labelsData = Data["Time Series (5min)"] && Object.keys(Data["Time Series (5min)"]).map(el => el.slice(11,16)).reverse()

     //dataloaded to check if data already exist
    const stockData = Data["Time Series (5min)"] && mapping(Data,"Time Series (5min)","1. open","4. close").map(el=> parseFloat(el))

    const stock = { 
        labels:labelsData,
        datasets:[{
            label:[Data["Time Series (5min)"] && Data['Meta Data']['2. Symbol']],  //dataloaded to check if data already exist
            data:stockData,
            backgroundColor:['rgba(255, 0, 0, 0.397)'],
        }]}

    //these are styles of the loader
    const loaderStyles = css`
    display: block;
    margin: 10em auto 0 auto;
    border-color: red; 
    `;
    dataLoaded && console.log(Data)
    return (

      <main className={styles.main}>

        <form onSubmit={handlerSubmit} className={styles.formulary}>
          <Input autoFocus={true} placeholder=' Symbol of the company' required color="secondary"/>
          <IconButton type="submit" color='secondary'>
                <SearchIcon/>
          </IconButton>

            <Select defaultValue='5min' color='secondary'>
                <option value="5min">5min</option>
            </Select>

        </form>
    
            {dataLoaded && !loanding
                ? <><ButtonSave toLocalStorage={Data['Meta Data']['2. Symbol']}/> <Chart data={stock}/></> 
                : !dataLoaded && !loanding
                ? null
                :<CircleLoader color="red" loading={true} size={60} css={loaderStyles} /> }
      </main>
  )
}