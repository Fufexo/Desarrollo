import React from 'react';
import './App.css';
import Menu from './Menu';
import Lista from './Lista';
import Busqueda from './Busqueda';
import Libros from './Libro'


class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      libros:[
        {id: 1, rating: 4, titulo: 'Harry Potter y el Caliz de Fuego', imagen: 'libro01.jpg'},
        {id: 2, rating: 3, titulo: 'The Shining', imagen: 'libro02.jpg'},
        {id: 3, rating: 5, titulo: 'El Código Da Vinci', imagen: 'libro03.jpg'},
        {id: 4, rating: 5, titulo: 'El Principito', imagen: 'libro04.jpg'},
        {id: 5, rating: 5, titulo: 'Sobrenatural', imagen: 'libro05.jpg'}]
    };
  }

  render(){
    return(
      <div className='App'>
        <Menu titulo = "Amazon"/>
        <Lista items = {this.state.libros}/>
      </div>
    );
  }
}

export default App;
