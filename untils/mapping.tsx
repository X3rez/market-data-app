

   const mapping = (obj,prop1,prop2,prop3)=>{
        let arr = [];
        
        if(obj[prop1]) {
            const properties = Object.keys(obj[prop1])

            properties.map(elem => arr.push(obj[prop1][elem][prop2], obj[prop1][elem][prop3]))
           
            return arr
        }

}


export default mapping