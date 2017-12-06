import React from 'react';
import ReactDom from 'react-dom';

export class Xiaomi extends React.Component{

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
    <img src="http://assets.hardwarezone.com/img/2017/01/specs-black_463x479_70.jpg" />
     name : Mi Note 4
     RAM : 4GB
     storage : 64GB
     Camera : 13MP

    <img src="https://i.ytimg.com/vi/7yOboYouEV0/maxresdefault.jpg" />
     name : Mi Mix 2
     RAM : 8GB
     storage : 256GB
     Camera : 13MP
     </p>
     </h2>
     </div>
     </div>
)
}
}

ReactDom.render(<Xiaomi />, document.getElementById('app'));
export default Xiaomi;
