
import {Line} from 'react-chartjs-2'
import styles from "../styles/chart.module.css";

interface Ioptions {
    labels:string[],
    datasets:{
        label: string[];
        data: number[];
        backgroundColor: string[];
    }[];
}

interface Iprops {
    data:Ioptions,
}

export default function Chart ({data}:Iprops){

    return(
        <section className={styles.section}>
            
            <Line data={data} options={{responsive:true,maintainAspectRatio:false}}/>

        </section>)
}