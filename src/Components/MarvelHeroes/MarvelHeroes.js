import React, {Component} from 'react';
import API from "../../API/supeApi";
// import './MarvelHeroes.css';


class MarvelHeroes extends Component {
    state = {
        supes: []
        };
    
        async componentDidMount() {
        let supes = await API.get(`/all.json `);
        this.setState({
            supes: supes
        });
        console.log(this.state.supes.data[4].name);
        }
        render() {

            return (
                <div>
            <h1>
            {/* {this.state.supes.data[0]} */}
            </h1>
        </div>
    )
    }
}

export default MarvelHeroes;