import "../../../styles/TabTome.css"


export default function TabTome({ id, numTome, titreTome, publiFr, publiJp }) {
    const tome_id = id

    return (
        <div className="listTome">

            <div className="infoTome">
                <h1>Tome {numTome}</h1>
                <ul>
                    <li>Titre : {titreTome}</li>
                    <li>Publication Japonaise : {!publiJp ? "Non parut en France" : publiJp}</li>
                    <li>Publication Française : {!publiFr ? "Non parut en France" : publiFr}</li>
                </ul>
                <a href={`/Chapitres/${tome_id}`}>Voir les Chapitres</a>
            </div>
        </div>

    )
}