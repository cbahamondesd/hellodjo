import React, {Component} from "react";

class Listarea extends Component {
    render(){
        const options = [
            { title: 'Learn react', id: 1},
            { title: 'Climb Mt everest', id: 2},
            { title: 'Run a marathon', id: 3},
            { title: 'Feed the dogs', id: 4},
        ];
        const listOpt = options.map(option =>
          <li key={option.id}>
            {option.title}
          </li>  
        );
        
        return(
            <ul>{listOpt}</ul>
        );
    };
}

export default Listarea;