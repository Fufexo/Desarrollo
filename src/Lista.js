import React from "react";
import './css/List.css';
import Libro from  './Libro';

class Lista extends React.Component{

  render(){
    return(
      <div className="list">
          {this.props.items.map(book => 
            <Libro
                cod = {book.id}
                valoracion = {book.rating}
                cartelera = {book.titulo}
                foto = {book.imagen}
            />)}
      </div>
    );
  }
}

export default Lista;