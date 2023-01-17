import React from 'react'
import {Card, Button} from 'react-bootstrap'



const cardPortfolio = (props) => {
  const handlename = () => alert(`HOW U DOINN ?`)
  return (
    <div>
    <Card style={{ width: '18rem' }}>
{props.children}
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <Card.Text>{props.age}</Card.Text>
      <Card.Text>{props.profession}</Card.Text>

      <Button variant="primary" onClick={handlename}>CLICK ON ME</Button>
    </Card.Body>
  </Card></div>
  )
}



export default cardPortfolio