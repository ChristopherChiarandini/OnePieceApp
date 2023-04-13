import React from 'react'
import PropTypes from 'prop-types'
import '../../../styles/TabTome.css'

export default function TabTome({ id, numTome, titreTome, publiFr, publiJp }) {
  const tomeId = id

  TabTome.propTypes = {
    id: PropTypes.number,
    numTome: PropTypes.number,
    titreTome: PropTypes.string,
    publiFr: PropTypes.string,
    publiJp: PropTypes.string,
  }

  return (
    <div className="listTome">
      <div className="infoTome">
        <h1>Tome {numTome}</h1>
        <ul>
          <li>Titre : {titreTome}</li>
          <li>
            Publication Japonaise : {!publiJp ? 'Non parut en France' : publiJp}
          </li>
          <li>
            Publication Française : {!publiFr ? 'Non parut en France' : publiFr}
          </li>
        </ul>
        <a href={`/Chapitres/${tomeId}`}>Voir les Chapitres</a>
      </div>
    </div>
  )
}
