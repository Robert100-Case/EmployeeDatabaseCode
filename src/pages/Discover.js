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
    console.log(res);
      this.setState(
        //{photos:[ ...this.state.photos,...photoArray]
          {photos:[...photoArray]
         }
      );}
      //console.log(res.data.results[0].gender);
      )
    
    }

 sayHello = () => {
    alert('You clicked me!');

      
      this.state.photos.images.sort((a, b) => (a.this.state.photos.last > b.this.state.photos.last) ? 1 : -1)
      function compare(a, b) {
        // Use toUpperCase() to ignore character casing
        this.state.photos[a].last = a.this.state.photos.last.toUpperCase();
        this.state.photos[b].last = b.this.state.photos.last.toUpperCase();
      
        let comparison = 0;
        if (this.state.photos[a].last > this.state.photos[b].last) {
          comparison = 1;
        } else if (this.state.photos[a].last < this.state.photos[b].last) {
          comparison = -1;
        }
        return comparison;
      }
      
      this.state.photos.sort(compare);
      
   }
  
 filterLastNames = () =>{ 
   alert("filter function entered");
   var LN= [ ];
   

   for(let i=0;i<5;i++){
     if(this.state.photos[i].last > 'N')
    
     LN.push(this.state.photos[i]);
  
   
  }//console.log(this.state.photos);console.log(females); 
   //<div key ={index} className="card">
      //    </div>
  
  this.setState(
    {photos:[ ...LN]
      
     }
    )

 }
  render() {    
    
    return (
      
  
     <div>
     
        <button onClick={this.sayHello}>Sort</button>;
        
        <button onClick={this.filterLastNames}>Last Name After 'N'</button>;
        
       { this.state.photos.map((pic, index) =>
        <div key ={index} className="card">
          <img src={ pic.images } alt="pics"/>
          <h3> { pic.first} {pic.last}  </h3>
        </div>
      )}








        
      </div>
    );
  }
}




  




export default Discover;
