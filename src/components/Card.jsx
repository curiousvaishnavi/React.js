// import React from 'react'

// const card = (props) => {

//   let c1 = Math.floor(Math.random()*256)
//     let c2 = Math.floor(Math.random()*256)
//     let c3 = Math.floor(Math.random()*256)
//   return (
//     <div style={{backgroundColor:`rgb(${c1},${c2},${c3})`}} className='usercard'>
//       <h1>{props.name}</h1>
//     </div>
//   )
// }

// export default card




import React from 'react'

const Card = (props) => {

  let c1 = Math.floor(Math.random() * 256)
  let c2 = Math.floor(Math.random() * 256)
  let c3 = Math.floor(Math.random() * 256)

  return (
    <div
      style={{
        backgroundColor: `rgb(${c1},${c2},${c3})`
      }}
      className="usercard"
    >
      <h1>{props.name}</h1>
      <h4>{props.web}</h4>
    </div>
  )
}

export default Card

