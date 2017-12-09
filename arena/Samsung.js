import React from 'react';
import ReactDom from 'react-dom';

export class Samsung extends React.Component{

render(){
  return(
    <div >
    <h3>
     name : Samsung Galaxy Note 8 <br />
     RAM : 6GB <br />
     storage : 64GB <br />
     Camera : 12MP
    </h3>
     </div>
)
}
}

//ReactDom.render(<Samsung />, document.getElementById('app'));
export default Samsung;
