import React from 'react';
import './css/Menu.css'
import Busqueda from './Busqueda';
import Lista from './Lista';

class Menu extends React.Component{

  render(){
    return(
      <div className='container'>
        <div className='subcontainer'>
          <div className='logo'>
              {this.props.titulo}
          </div>
          <div className='search'>
              <Busqueda />
          </div>
          <div className='actions'>
              <button className='button'>
                + Añadir nuevo libro
              </button>
          </div>
        </div>
      </div>
    );
  }
  
}

export default Menu;