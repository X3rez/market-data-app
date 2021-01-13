type arrType = string[]
type MappingType = (obj:object,prop1:string,prop2:string,prop3:string)=> arrType
   

const mapping:MappingType = (obj,prop1,prop2,prop3)=>{
        let arr:arrType = [];
        
        if(obj[prop1]) {
            const properties = Object.keys(obj[prop1])

            properties.map(elem => arr.push(obj[prop1][elem][prop2], obj[prop1][elem][prop3]))
           
            return arr
        }

}


export default mapping