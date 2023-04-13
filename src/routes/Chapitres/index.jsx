import { useState, useEffect } from "react"
import Request from "../../utils/request"
import { useParams } from "react-router-dom"
import TabChap from "./components/TabChap"


export default function IndexChap() {

    const [listChap, setListChap] = useState([])
    const { tome_id } = useParams();

    

    // useEffect(() => {
    //     Request(`https://api.api-onepiece.com/chapters/tome/${tome_id}`).then(toto => {
    //         setListChap(toto)
    //     })
    // }, [])


    // fetch de l'api avec filtre de l'api qui a pour condition d'afficher uniquement 
    // les élément strictements égale à l'id du tome
    useEffect(() => {
        Request(`https://api.api-onepiece.com/chapters/tome/${tome_id}`).then(elm => {

            const filteredChap = elm.filter(item => item.tome_id === +tome_id)

            setListChap(filteredChap)
        })
    }, [])



    return(

        <div className="indexChap">
            <div> <h1>Tome N° {tome_id}</h1></div>

            {listChap.map(elc =>
                <TabChap key={elc.id}
                    chapNbr={elc.id}
                    chapTtl={elc.chapter_title}
                    chapDscr={elc.chapter_description}
                />
            )}

        </div>

    )
}
