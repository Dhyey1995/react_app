import React, { Component } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

class MovieList extends Component {

    state = {
        photos: [],
        visblePhotos: []
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/photos")
            .then((response) =>
            this.setState({
                photos:response.data.slice(80, 100),
                visblePhotos:response.data.slice(80, 100)
            })
        );
    }
    filterPhotos = () => {
        const fiterPhotoList = this.state.photos.filter(photo => {
            return photo.title.indexOf(this.filterText.value) !== -1;
        });
        this.setState({
            visblePhotos:fiterPhotoList
        });
    };
    render() {
         return <section>
         <div className="row center">
         <div className="col-md-4"></div>
         <div className="col-md-4">
            <input ref={node => this.filterText = node} onChange={this.filterPhotos} type="text" className="form-input" />
            <button className="btn btn-success">filter</button>
         </div>
         <div className="col-md-4"></div>
         </div>
         <div className="row">
         {this.state.visblePhotos.map(photo => {
            return (<div style={{padding: '23px'}} key={photo.id} className="card col-md-4">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" style={{width: '100%'}} src={photo.thumbnailUrl} />
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">{photo.title}</i></span>
                  <p><NavLink to={`/details/${photo.id}`}><button className="btn btn-lg btn-block btn-success"> Details </button></NavLink></p>
                </div>
              </div>
            )
         })}
         </div>
         </section>

    }
}
export default MovieList ;
