import { useState, useEffect } from "react"
import Request from "../../utils/request"
import TabTome from "./components/TabTome"
import "../../styles/IndexTomes.css"

export default function IndexTome() {
    //Initialisation Requete de la liste des tome via l'api
    const [listTome, setListTome] = useState([])

    useEffect(() =>{
        Request("https://api.api-onepiece.com/tomes/").then(bouquin => {
            setListTome(bouquin)
        }) 
    },[])




    return (
        <div  className="indexTome">
            
            {listTome.map(el =>
                 < TabTome key = {el.id}
                    id ={el.id}
                    numTome = {el.tome_number}
                    titreTome = {el.tome_title}
                    publiJp = {new Date(el.tome_japan_date_publish).toLocaleDateString()}
                    publiFr = {new Date(el.tome_french_date_publish).toLocaleDateString()}
                 />)}
                
        </div>
        
    )

}