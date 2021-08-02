import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Alert from "../components/Alert";
//import JqxListBox from 'jqwidgets-react/react_jqxlistbox.js';


class Discover extends Component {
 constructor(props) {
    super(props);
    this.state = {photos:[]}
}
  


  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    this.loadNextUser();
  }

    
  

  loadNextUser = () => {
    
    API.getRandomUser()
      .then(res =>
      {var photoArray =[{images:res.data.results[0].picture.medium,first:res.data.results[0].name.first,
      last: res.data.results[0].name.last,genders:res.data.results[0].gender},
      {images:res.data.results[1].picture.medium,first:res.data.results[1].name.first,
      last: res.data.results[1].name.last,genders:res.data.results[1].gender},
      {images:res.data.results[2].picture.medium,first:res.data.results[2].name.first,
        last: res.data.results[2].name.last,genders:res.data.results[2].gender},
        {images:res.data.results[3].picture.medium,first:res.data.results[3].name.first,
          last: res.data.results[3].name.last,genders:res.data.results[3].gender},
          {images:res.data.results[4].picture.medium,first:res.data.results[4].name.first,
            last: res.data.results[4].name.last,genders:res.data.results[4].gender},
        ];    
      
      this.setState(
        {photos:[ ...this.state.photos,...photoArray]
          
         }
      );}
      //console.log(res.data.results[0].gender);
      )
    
    }

 sayHello = () => {
    alert('You clicked me!');

      
      this.state.image.sort((a, b) => (a.this.state.last > b.this.state.last) ? 1 : -1)
}
  
 filterFemalePhotos = () =>{ 
   const genders = this.state.genders;
   const images = this.state.image;
   var females = [];
    for(var i=0; i<5; i++){
      if(genders[i] == "female"){
        females.push(images[i]);
        console.log(females);
      }
    } 
  //return <ul>{females}</ul>;
  return <ul><Card image ={females}></Card></ul>;
  //<Card image={this.state.image[0]} handleBtnClick={this.handleBtnClick} />
        
}

// const genders = this.state.genders;
//   const images = this.state.image;
//   const femaleNames = this.state.first +" " + this.state.last 
//   var females = [];
//   var names = []
//    for(var i=0; i<5; i++){
//      if(genders[i] == "female"){
//       females.push(images[i]);
//       names.push(femaleNames[i])
//      }
//    } 
//   return <ul>{females}</ul>;

// let photoids = this.state.id;
// let photos = this.state.image;
// let main = items.data.results
// let females = [];
// let genders = []
// const getGenders = main.map(item=>
//     genders = item.gender
// )
// const filterPhotos = photoids.map(item => (
//   // <li key={"person"+item.photoids}>{item.photos}</li>
//   console.log(item.data)
// )
  render() {    
    
    return (
      
  
     <div>
     
        <button onClick={this.sayHello}>Sort</button>;
        
        <button onClick={this.filterFemalePhotos}>Filter by Female</button>;
        
       { this.state.photos.map((pic, index) =>
        <div key ={index} className="card">
          <img src={ pic.images } alt="pics"/>
          <h3> { pic.first} {pic.last}  </h3>
        </div>
      )}







{/*        <h2 className="text-center">Make New Friends</h2>
        
      
        <Card image={this.state.image[0]} handleBtnClick={this.handleBtnClick} />
        
        <h2 className="text-center">
           {this.state.first[0]} {this.state.last[0]}
        </h2>
  
      
        <Card image={this.state.image[1]} handleBtnClick={this.handleBtnClick} />
        
        <h2 className="text-center">
           {this.state.first[1]} {this.state.last[1]}
        </h2>
        <Card image={this.state.image[2]} handleBtnClick={this.handleBtnClick} />
        
        <h2 className="text-center">
           {this.state.first[2]} {this.state.last[2]}
        </h2>
        <Card image={this.state.image[3]} handleBtnClick={this.handleBtnClick} />
        
        <h2 className="text-center">
           {this.state.first[3]} {this.state.last[3]}
        </h2>
        <Card image={this.state.image[4]} handleBtnClick={this.handleBtnClick} />
        
        <h2 className="text-center">
           {this.state.first[4]} {this.state.last[4]}
        </h2>
    */} 


        
      </div>
    );
  }
}




  




export default Discover;
