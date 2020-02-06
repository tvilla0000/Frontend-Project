import React, {Component} from 'react';
import API from "../../API/supeApi";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
    } from 'reactstrap';
import './MarvelHeroes.css';


class MarvelHeroes extends Component {
    state = {
        supes:[]
        };
    
        async componentDidMount() {
        let supes = await API.get(`/all.json `);
        this.setState({
            supes: supes.data
        });
        console.log(this.state.supes);
        }
        render() {

            return (
                <div>
                    {this.state.supes.map(supe => (
                    <div key={supe.id}>
                    <Card class='card'>
                    <div class='image'>
                        <CardImg src={supe.images.lg} alt="Card image cap" />
                    </div>
                        <CardBody>
                        <CardTitle>{supe.name}</CardTitle>
                        <CardSubtitle>{supe.biography.fullName}</CardSubtitle>
                        <CardText>{supe.work.occupation}</CardText>
                        <Button>More Info</Button>
                        </CardBody>
                    </Card>
                    </div>
            ))}
                </div>
        )
    }
}

export default MarvelHeroes;