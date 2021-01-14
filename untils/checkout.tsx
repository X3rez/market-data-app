

export default function checkout (Element){
    if(typeof window !== 'undefined'){
        return Element
    }

    return null
}