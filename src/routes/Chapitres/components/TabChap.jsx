import { useState } from "react"

import "../../../styles/TabChap.css"


export default function TabChap({ chapNbr, chapTtl, chapDscr, tomNbr }) {

// const [forOpen, setForOpen] = useState(false) 

//     return  forOpen ? (  
//         <div>
//             <ul>
//                 <li><h2>Chapitre {chapNbr}</h2>
//                 <button onClick= {() => setForOpen(false)}> Fermer</button>
//                 </li>
                
//                 <li>
//                     <div className="tabChap">
//                         <div><h3>{chapTtl}</h3></div>
//                         <div>{chapDscr}</div>
//                     </div>
//                 </li>
//             </ul>
//         </div>
//     )  : (<button onClick={() => setForOpen(true)}>Ouvrir</button>)




    return  (  
        <div>
            <ul>
                <li><h2>Chapitre {chapNbr}</h2>
                
                </li>
                
                <li>
                    <div className="tabChap">
                        <div><h3>{chapTtl}</h3></div>
                        <div>{chapDscr}</div>
                    </div>
                </li>
            </ul>
        </div>
    )

}