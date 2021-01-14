import { Button } from '@material-ui/core';
import {useState,useEffect} from 'react'


export default function ButtonSave ({toLocalStorage}){
    const [text, setText] = useState<boolean | null>(false)
    
    const handlerClick = ()=>{
        let lsData = localStorage.getItem("favorites")
        let arrData = [];

        if(lsData == null){
            arrData.push(toLocalStorage)
            localStorage.setItem("favorites",JSON.stringify(arrData))
            setText(!text)
        }else{
            let arrLsData = JSON.parse(lsData)
            let newData = toLocalStorage
            arrLsData.push(newData)
            localStorage.setItem("favorites",JSON.stringify(arrLsData))
            setText(!text)
        }
        
    }

    //To confirm if the chart already is saved
    useEffect(()=>{
        const lsData = JSON.parse(localStorage.getItem("favorites"))
        if(lsData && lsData.includes(toLocalStorage)){
            setText(true)
        }
    })

    return(<Button variant="outlined" color="secondary" onClick={handlerClick}>{text ? 'Saved' :'Save this stock'}</Button>)
}

