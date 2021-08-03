import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Apartment({ apartment }) {
    return (
            <Card className="my-3 p-3 rounded">
                <Link to={`/apartment/${apartment.id}`}>
                <Card.Img src={apartment.photo} />  
                </Link>  
                <Card.Body>
                <Link to={`/apartment/${apartment.id}`}>
                <Card.Title as="div" >
                <strong>
                {apartment.title}
                    </strong>
                    </Card.Title>  
                </Link> 
                <Card.Text as="h3" >
                ${apartment.price} 
                    </Card.Text>
                </Card.Body>
            </Card> 
    )
}

export default Apartment