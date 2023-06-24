import React from "react";
import './css/Item.css';

class Libro extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      estrellas:[]
    };
  }

  componentDidMount(){
      this.setState(
        {
          estrellas: Array(parseInt(this.props.valoracion)).fill(0)
        }
      );
  }

  render(){
    return(
      <div className="item">
        <div className="image">
          <img src = {"img/" + this.props.foto} width = "100%"/>
        </div>
        <div className="title">
          {this.props.cartelera}
        </div>
        <div>
          <p>
            {
              this.state.estrellas.map(i =>
                <img src="img/star.png" width="32" />
                )
            }
          </p>
        </div>
      </div>
    );
  }
}

export default Libro;