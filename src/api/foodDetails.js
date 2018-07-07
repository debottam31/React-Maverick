import React,{ Component } from 'react';

const API = 'http://localhost:3000/foods';

class FoodDetails extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      images: [],
    };  
  }
//   , { 
//     method: 'GET',
//     headers:{
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Credentials':true,
//     'Access-Control-Allow-Methods':'POST, GET'
//     }

  componentDidMount() {
      fetch(API)
        .then(response => response.json())
        .then(data => this.setState({
          images: data
        }))
  }

  render() {
    const { images } = this.state;

    return (
      <div>
        {images.map(hit =>
          <div key={hit.id}>
            <p>{hit.id}</p>
            <p>{hit.name}</p>
            <a href={hit.imgurl}>{hit.imgurl}</a>
            <p>{hit.width}</p>
          </div>
        )}
      </div>
    );
  }
  
}

export default FoodDetails;