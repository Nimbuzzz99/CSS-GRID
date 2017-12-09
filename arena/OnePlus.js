import React from 'react';
import ReactDom from 'react-dom';

export class OnePlus extends React.Component{

render(){
  return(
    <div >
    <h3>
     name : OnePlus 5T <br />
     RAM : 8GB/6GB <br />
     storage : 128GB/64GB <br />
     Camera : 16MP
    </h3>
    </div>
)
}
}

//ReactDom.render(<OnePlus />, document.getElementById('app'));
export default OnePlus;
