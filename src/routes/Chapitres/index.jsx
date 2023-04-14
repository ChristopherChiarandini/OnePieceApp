import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import request from '../../utils/request'
import TabChap from './components/TabChap'

export default function IndexChap() {
  const [listChap, setListChap] = useState([])
  const { tomeId } = useParams()

  useEffect(() => {
    request(`/chapters/tome/${tomeId}`).then((elm) => {
      const filteredChap = elm.filter((item) => item.tome_id === +tomeId)

      setListChap(filteredChap)
    })
  }, [tomeId])

  return (
    <div className="indexChap">
      <div>
        <h1>Tome N° {tomeId}</h1>
      </div>

      {listChap.map((elc) => (
        <TabChap
          key={elc.id}
          chapNbr={elc.id}
          chapTtl={elc.chapter_title}
          chapDscr={elc.chapter_description}
        />
      ))}
    </div>
  )
}
