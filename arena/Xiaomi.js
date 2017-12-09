import React from 'react';
import ReactDom from 'react-dom';

export class Xiaomi extends React.Component{

render(){
  return(
    <div >
    <p>
    <h3>
     name : Mi Note 4 <br />
     RAM : 4GB <br />
     storage : 64GB <br />
     Camera : 13MP
     </h3>
     </p>


     </div>
)
}
}

//ReactDom.render(<Xiaomi />, document.getElementById('app'));
export default Xiaomi;
