
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card.jsx'

const App = () => {

  const [state, setState] = useState([])

  async function getData() {
    let info = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    )

    console.log(info.data)
    setState(info.data)
  }

  useEffect(function(){
    getData()
  },[])

  return (
    <div className="cards-container">
      
      {
        state.map(function (elem, idx) {
          return <Card key={elem.id} name={elem.name} web={elem.website} />
        })
      }
    </div>
  )
}

export default App