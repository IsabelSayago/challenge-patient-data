import React from "react";
import { shape, string } from 'prop-types';
// import { useState } from "react";
import './index.css';

const InfoCard = ({ data }) => {
  const { avatar, description, name, website } = data;
    /* const [inputValue, setInputValue] = useState('');

    const onChangeInputHandler = (e) => {
      setInputValue(e.target.value);
    }; */
  
    return (
        <div className="card-container">
          <div className="card">
            <img
              src={avatar}
              alt="Card Image"
              className="card-image"
            />
            <div className="card-content">
              <h2 className="card-title">{name}</h2>
              <p className="card-text">{description}</p>
              <p className="card-text">{website}</p>

            </div>
          </div>
        </div>
      );
};

InfoCard.propTypes = {
  data: shape({
    avatar: string,
    name: string,
    description: string,
    website: string,
  })
};

export default InfoCard;
