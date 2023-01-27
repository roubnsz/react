import React from 'react';
import '../App.css';
//import PropTypes from 'prop-types';

const NombreCompleto = (props) => {
    console.log("Props",props);
  return (
    <>   {/* React.fragment*/}
    <h3 className="Ruben" >Me llamo {props.name}</h3>
    <p className="Ruben">Mi edad es {props.age}</p>
    </>
  );
}



export default NombreCompleto;
  