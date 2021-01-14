import { Button } from '@material-ui/core';
import {useState,useEffect} from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      marginLeft:"3em",
    }
  }),
);


export default function ButtonSave ({toLocalStorage}){
    const styles = useStyles();

    const [text, setText] = useState<boolean | null>(false)
    
    const handlerClick = ()=>{
        let lsData = window.localStorage.getItem("favorites")
        let arrData = [];
        
        if(text){
            let arrLsdata = JSON.parse(lsData)
            let stock = toLocalStorage
            let index = arrLsdata.indexOf(stock)
            arrLsdata.splice(index,1)
            window.localStorage.setItem("favorites",JSON.stringify(arrLsdata))
            return setText(false)
        }

        if(lsData == null){
            arrData.push(toLocalStorage)
            window.localStorage.setItem("favorites",JSON.stringify(arrData))
            setText(!text)
        }else{
            let arrLsData = JSON.parse(lsData)
            let newData = toLocalStorage
            arrLsData.push(newData)
            window.localStorage.setItem("favorites",JSON.stringify(arrLsData))
            setText(!text)
        }
        
    }

    //To confirm if the chart already is saved
    useEffect(()=>{
        const lsData = JSON.parse(window.localStorage.getItem("favorites"))
        if(lsData && lsData.includes(toLocalStorage)){
            setText(true)
        }
    })

    return(<Button className={styles.button} variant="outlined" color="secondary" onClick={handlerClick}>{text ? 'Saved' :'Save this stock'}</Button>)
}

