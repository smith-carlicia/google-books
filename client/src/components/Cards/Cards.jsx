import React from 'react';
import './Card.css';
import {
    Card,
    CardTitle,
    CardImg,
    CardBody,
    CardLink,
    Container
} from "shards-react";

const theCard = (props) => {
    return(
        <Container>
            <Card className="card" style={{ maxWidth: "300px" }}>
                <CardImg className="image" src={props.img} />
                <CardBody>
                    <CardTitle className="cardTitle">{props.title}</CardTitle>
                        <p>{props.authors}</p>
                        <p>{props.date}</p> 
                        <p>{props.desc}</p>
                        <p>{props.link}</p>    
                </CardBody>
            </Card>
        </Container>
    )
}

export default theCard;