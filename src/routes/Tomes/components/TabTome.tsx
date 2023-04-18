import React from 'react'
import PropTypes from 'prop-types'
import '../../../styles/TabTome.css'
import { Link } from 'react-router-dom'

export default function TabTome({ id, numTome, titreTome, publiFr, publiJp }) {
  const tomeId = id

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
        <Link href={`/chapitres/${tomeId}`}>Voir les Chapitres</Link>
      </div>
    </div>
  )
}
TabTome.propTypes = {
  id: PropTypes.number,
  numTome: PropTypes.string,
  titreTome: PropTypes.string,
  publiFr: PropTypes.string,
  publiJp: PropTypes.string,
}
