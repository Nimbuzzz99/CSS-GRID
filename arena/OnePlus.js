import React from 'react';
import ReactDom from 'react-dom';

export class OnePlus extends React.Component{

  phonePage(e){
    e.preventDefault();
    const el = e.targetValue;

}
render(){
  return(
    <div >
    <div className="search">
    <input type="text" className="searchTerm" placeholder="What are you looking for?" />
    <button type="submit">go</button>
    </div>
    <h1>Welcome to SSP Arena!</h1>
    <ul>
      <li><a href ="./Xiaomi" onClick={()=> this.phonePage.bind(this)} >Xiaomi</a></li>
      <li><a href ="./Samsung" onClick={()=> this.phonePage.bind(this)} >Samsung</a></li>
      <li><a href ="./OnePlus" onClick={()=> this.phonePage.bind(this)} >OnePlus</a></li>
    </ul>
    <div className="images1">
    <h2>
    <p>
    <img src="https://cdn2.gsmarena.com/vv/bigpic/oneplus-5.jpg" />
     name : OnePlus 5T
     RAM : 8GB/6GB
     storage : 128GB/64GB
     Camera : 16MP

     <img src="https://thedroidguru.com/wp-content/uploads/2017/09/OnePlus-X.jpg" />
     name : OnePlus X
     RAM : 3GB
     storage : 16GB
     Camera : 13MP
    </p>
    </h2>
    </div>
    </div>
)
}
}

ReactDom.render(<OnePlus />, document.getElementById('app'));
export default OnePlus;
