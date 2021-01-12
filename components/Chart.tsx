
import {Line} from 'react-chartjs-2'

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
    options?:{}
}


export default function Chart ({data,options}:Iprops){

    return(
        <section>

            <Line data={data} 
            width={700}
            height={300}
            options={{responsive:true,
                    scales: {
                        yAxes: [{
                            stacked: true
                        }]
                    }}}
            />

   </section>)
}