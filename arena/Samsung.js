import React from 'react';
import ReactDom from 'react-dom';

export class Samsung extends React.Component{

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
    <img src="https://drop.ndtv.com/TECH/product_database/images/329201783846PM_635_samsung_galaxy_s8.jpeg" />
     name : Samsung Galaxy Note 8
     RAM : 6GB
     storage : 64GB
     Camera : 12MP

     <img src="http://images.samsung.com/is/image/samsung/p5/in/microsite/galaxy-j7-pro/spec_img1.jpg?" />
     name : Samsung Galaxy J7
     RAM : 4GB
     storage : 32GB/64GB
     Camera : 16MP
     </p>
     </h2>
     </div>
     </div>
)
}
}

ReactDom.render(<Samsung />, document.getElementById('app'));
export default Samsung;
