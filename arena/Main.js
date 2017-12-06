import React from 'react';
import ReactDom from 'react-dom';
import Samsung from './Samsung';
import OnePlus from './OnePlus';
import Xiaomi from './Xiaomi';


const bstyles = {
  background: "#865A2D",
  padding: "20px",
  //margin: "20px",
  border:" 1px"
};
const zstyles ={
  justifyContent: 'center',
  alignItems: 'center'
}
const cstyles ={
  background : "#BF9040"
 };
const astyles ={
  padding: "100px 300px 100px",
  margin: "150px",
  background:"#FFFFFF"

}
const phones = ["Samsung","OnePlus","Xiaomi"];
const mobiles=phones.map((phone)=>
   <li>{phone}</li>
 );
class Arena extends React.Component{

  phonePage(e){
    alert("directing to");
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
      <div style = {bstyles}>
      <h1>Welcome to SSP Arena!</h1>
      </div>
      <div style={cstyles}>
      <ul>
        <li><a href ="/Xiaomi" >Xiaomi</a></li>
        <li><a href ="/Samsung" onClick={()=> this.phonePage(this)} >Samsung</a></li>
        <li><a href ="/OnePlus" onClick={()=> this.phonePage(this)} >OnePlus</a></li>
      </ul>
      <div className="images"  style = {astyles}>
      <a href="/Xiaomi" onClick={()=> this.phonePage(this)}>
      <img src="https://s-media-cache-ak0.pinimg.com/736x/bd/b4/8d/bdb48d81ed6182858f87548d2a3c53ec.jpg" />
      </a>
      <a href="/Xiaomi" onClick={()=> this.phonePage(this)}>
      <img src="https://iosys.co.jp/photos/128437_1.jpg" />
      </a>
      <a href="/Samsung" onClick={()=> this.phonePage(this)}>
      <img src="http://www.noticias7dias.com/wp-content/uploads/2017/05/Samsung-Galaxy-S8.jpg" />
      </a>
      <a href="/Samsung" onClick={()=> this.phonePage(this)}>
      <img src="https://videos.chip.de/p/1741931/thumbnail/entry_id/1_wnrorjs8/width/640/height/360/18" />
      </a>
      <a href="/OnePlus" onClick={()=> this.phonePage(this)}>
      <img src="https://cdn2.gsmarena.com/vv/bigpic/oneplus-5.jpg" />
      </a>
      <a href="/OnePlus" onClick={()=> this.phonePage(this)}>
      <img src="https://www.online-sciences.com/wp-content/uploads/2015/12/OnePlus-X-11.jpg" />
      </a>
      </div>
      </div>
      </div>
    )
  }
}
ReactDom.render(<Arena/>, document.getElementById('app'));
