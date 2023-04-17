import { React } from 'react'
import PropTypes from 'prop-types'
import '../../../styles/TabChap.css'

export default function TabChap({ chapNbr, chapTtl, chapDscr }) {
  return (
    <div>
      <ul>
        <li>
          <h2>Chapitre {chapNbr}</h2>
        </li>

        <li>
          <div className="tabChap">
            <div>
              <h3>{chapTtl}</h3>
            </div>
            <div>{chapDscr}</div>
          </div>
        </li>
      </ul>
    </div>
  )
}
TabChap.propTypes = {
  chapNbr: PropTypes.number,
  chapTtl: PropTypes.string,
  chapDscr: PropTypes.string,
}
