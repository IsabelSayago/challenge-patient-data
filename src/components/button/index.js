import React from "react";
import { func } from 'prop-types';
// import { useEffect, useState } from "react";

const Button = ({ onClick }) => {

    console.log('prueba');
    

    return <button className="button" onClick={onClick}>Search</button>;
};

Button.propTypes = {
    onClick: func,
};

export default Button;