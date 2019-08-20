import React, { Component } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
class PhotoDetails extends Component {

    state = {
        photoDetails:{}
    }

    componentDidMount(){
        const { match } = this.props;
        axios.get(
            `https://jsonplaceholder.typicode.com/photos/${match.params.photo_id}`
        ).then(response => {
            this.setState({
                photoDetails: response.data
            });
        });
    }
    render() {
        const { photoDetails } = this.state ;
        return (
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={photoDetails.url} alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <NavLink className="btn btn-success" to="/"> Back </NavLink>
            </div>
        );
    }
}
export default PhotoDetails
