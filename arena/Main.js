import React from 'react';
import ReactDom from 'react-dom';
import Samsung from './Samsung';
import OnePlus from './OnePlus';
import Xiaomi from './Xiaomi';


const bstyles = {
  background: "#F5A217",
  padding: "20px",
  border:" 1px"
};
const estyles = {
			color: ' #ccc',
			padding: '5px 20px 5px 5px',
			cursor: 'pointer',
			background: '#654',
			borderRadius: '5px',
			boxShadow:'0 0 15px #654',
      margin : "0 300px 0 0 ",
      fontStyle: "Arial"
};
const zstyles ={
  justifyContent: 'center',
  alignItems: 'center'
}
const cstyles ={
  margin: "5px",
  background : "#2192F3"
 };
const astyles ={
  padding: "0px 200px 100px",
  margin: "0px 200px 100px 300px"

}
const dstyles = {
  margin:"20px 1200px 0px 20px",
  padding: "10px 10px",
  background :"#90A4AE"
};

const phones = ["Samsung","OnePlus","Xiaomi"];
const mobiles=phones.map((phone)=>
   <li>{phone}</li>
 );
class Arena extends React.Component{
  constructor(props) {
        super(props);

        this.state = {
            visible: false
        };
        this.state = {
            visible1: false
        };
        this.state = {
            visible2: false
        };
        this.state = {
            image: "https://s-media-cache-ak0.pinimg.com/736x/bd/b4/8d/bdb48d81ed6182858f87548d2a3c53ec.jpg"
        };
        this.state = {
          image1: "http://www.noticias7dias.com/wp-content/uploads/2017/05/Samsung-Galaxy-S8.jpg"
        };
        this.state = {
          image2: "https://a.allegroimg.com/s400/063f7b/e5390baf4d67b9398e7e31c8881a"
        };
  this.phoneInfo = this.phoneInfo.bind(this);
  this.phoneInfo1 = this.phoneInfo1.bind(this);
  this.phoneInfo2 = this.phoneInfo2.bind(this);
  this.imageChange = this.imageChange.bind(this);
  this.imageChange1 = this.imageChange1.bind(this);
  this.imageChange2 = this.imageChange2.bind(this);
}
    phoneInfo() {
      this.setState({visible: !this.state.visible})
  }

    phoneInfo1() {
      this.setState({visible1: !this.state.visible1})
}

    phoneInfo2() {
       this.setState({visible2: !this.state.visible2})
}
    imageChange() {
      if(this.state.image=="https://s-media-cache-ak0.pinimg.com/736x/bd/b4/8d/bdb48d81ed6182858f87548d2a3c53ec.jpg")
      this.setState({image: "https://4.bp.blogspot.com/-wUqOiiJNQFA/WQIAA8up2vI/AAAAAAAAAbA/j02Xl0VlUpQDUfb_cbUOtfpeWvcm5u-7gCPcB/s1600/58382538.jpg"})

      else if(this.state.image=="https://4.bp.blogspot.com/-wUqOiiJNQFA/WQIAA8up2vI/AAAAAAAAAbA/j02Xl0VlUpQDUfb_cbUOtfpeWvcm5u-7gCPcB/s1600/58382538.jpg")
      this.setState({image: "https://www.i-love-tec.de/tec/Xiaomi/Xiaomi-Redmi-Note-4-Pro-Gris-Movil-4g-Dual-Sim-5.5-Ips-Fhd,8core,32gb,3gb-Ram,-von-Xiaomi-758854121.jpg"})

      else
          this.setState({image:"https://s-media-cache-ak0.pinimg.com/736x/bd/b4/8d/bdb48d81ed6182858f87548d2a3c53ec.jpg" })
    }

    imageChange1(){
      if(this.state.image1=="http://www.noticias7dias.com/wp-content/uploads/2017/05/Samsung-Galaxy-S8.jpg")
      this.setState({image1:"http://s7d2.scene7.com/is/image/SamsungUS/Major_Front_Pen_Black_RFP_RGB-6"})

      else if(this.state.image1=="http://s7d2.scene7.com/is/image/SamsungUS/Major_Front_Pen_Black_RFP_RGB-6")
      this.setState({image1:"https://cdn.awsli.com.br/400x400/430/430048/produto/22380946/26720de12c.jpg"})

      else
        this.setState({image1:"http://www.noticias7dias.com/wp-content/uploads/2017/05/Samsung-Galaxy-S8.jpg"})
    }

    imageChange2(){
      if(this.state.image2=="https://a.allegroimg.com/s400/063f7b/e5390baf4d67b9398e7e31c8881a")
      /*this.setState({image2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnZbHz-vQO7SxIz7RkjAd83pdbP2AWPyJaT_IwrtXhg-QHf3hA"})

      else if(this.state.image2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnZbHz-vQO7SxIz7RkjAd83pdbP2AWPyJaT_IwrtXhg-QHf3hA")*/
      this.setState({image2:"https://cdn.vox-cdn.com/thumbor/h5yQabMY8aHyoDpcGksAPlemMzM=/400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9690019/akrales_171115_2123_0024.jpg"})

      else
        this.setState({image2:"https://a.allegroimg.com/s400/063f7b/e5390baf4d67b9398e7e31c8881a"})
    }
  phonePage(e){
    alert("directing to");
    e.preventDefault();
    const el = e.targetValue;
  }


  render(){
    const text = this.state.visible?<Xiaomi />:"Phone Info" ;
    const text1 = this.state.visible1?<Samsung />:"Phone Info" ;
    const text2 = this.state.visible2?<OnePlus />:"Phone Info" ;
    const text3 = this.state.image;
    const text4 = this.state.image1;
    const text5 = this.state.image2;
    return(
      <div >
      <div style = {bstyles}>
      <h1>Welcome to SSP Arena!</h1>
      </div>
      <div className="search">
      <input type="text" className="searchTerm" placeholder="What are you looking for?" />
      <button type="submit">go</button>
      </div>
      <div style={cstyles}>
      <div style ={dstyles}>
      <h3>Phone Brands</h3>
      <ul>
        <li><a href ="/Xiaomi" >Xiaomi</a></li>
        <li><a href ="/Samsung" onClick={()=> this.phonePage(this)} >Samsung</a></li>
        <li><a href ="/OnePlus" onClick={()=> this.phonePage(this)} >OnePlus</a></li>
      </ul>
         <h3>Top finds of the month:</h3>
         <ol>
           <li>Samsung Galaxy S8</li>
           <li>Sony Xperia XZ Premium</li>
           <li>Samsung Galaxy Note8</li>
           <li>Samsung Galaxy S8+</li>
           <li>Nokia 8</li>
           <li>Xiaomi Mi Mix</li>
           <li>LG V20</li>
           <li>LG G6</li>
           <li>Sony Xperia XZ</li>
           <li>LG V30</li>
         </ol>
         </div>
      <div className="images"  style = {astyles}>
      <div>
      <a href="/Xiaomi" onClick={()=> this.phonePage()}>
      <img src={text3} />
      </a>
      <div style = {estyles} onClick={this.phoneInfo}>{text}<br />
      </div>
      <button onClick={this.imageChange}>next</button>
      <button onClick={this.imageChange}>prev</button>
      </div>
      <a href="/Xiaomi" onClick={()=> this.phonePage(this)}>
      <img src="https://iosys.co.jp/photos/128437_1.jpg" />
      </a>
      <div>
      <a href="/Samsung" onClick={()=> this.phonePage(this)}>
      <img src={text4} />
      </a>
      <div style = {estyles}  onClick={this.phoneInfo1}>{text1}<br />
      </div>
      <button onClick={this.imageChange1}>next</button>
      <button onClick={this.imageChange1}>prev</button>
      </div>
      <a href="/Samsung" onClick={()=> this.phonePage(this)}>
      <img src="https://19028l.ha.azioncdn.net/img/2017/08/produto/53250/16/large/frontal-smartphone-samsung-galaxy-j5-pro-4g-j530g-preto.jpg" />
      </a>
      <div>
      <a href="/OnePlus" onClick={()=> this.phonePage(this)}>
      <img src={text5} />
      </a>
      <div style = {estyles}  onClick={this.phoneInfo2}>{text2}<br />
      </div>
      <button onClick={this.imageChange2}>next</button>
      <button onClick={this.imageChange2}>prev</button>
      </div>
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
