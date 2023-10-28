import React from "react";
import { shape, string } from 'prop-types';
import { useState, useRef, useContext } from "react";
import './index.css';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { PatientsContext } from "../../reducer";
import { setModalData } from "../../actions";

// import Button from '@mui/material/Button';


// const InfoCard = ({ data }) => {
//   const { avatar, description, name, website } = data;
//   console.log(description);
//     /* const [inputValue, setInputValue] = useState('');

//     const onChangeInputHandler = (e) => {
//       setInputValue(e.target.value);
//     }; */

//     return (
//         <div className="card-container">
//           <div className="card">
//             <img
//               src={avatar}
//               alt="Card Image"
//               className="card-image"
//             />
//             <div className="card-content">
//               <h2 className="card-title">{name}</h2>
//               {/* <p className="card-text">{description}</p> */}
//               <p className="card-text">{website}</p>
//               <Button variant="text">Text</Button>


//             </div>
//           </div>
//         </div>
//       );
// };

const InfoCard = ({ data }) => {
  const { avatar, description, name, website } = data;

  const { dispatch } = useContext(PatientsContext);
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef(null);

  console.log(description);

  const onClickCard = () => {
    setExpanded(value => !value);

    if (!expanded) {
      cardRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const onClickEditButton = () => {
    setModalData({ dispatch, payload: { name, website } });
  };  

  return (
    <Card
      className={`card ${expanded ? 'expanded' : ''}`}
      onClick={() => onClickCard()}
      ref={cardRef}
    >
      <CardActionArea>
        <CardMedia
          className="profile"
          component="img"
          height="140"
          src={avatar}
          alt="profile picture"
        />
      </CardActionArea>

        <CardContent className="card-content">
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {website}
          </Typography>

          {expanded && (
            <>
            <Button
              className="button-edit"
              onClick={onClickEditButton}
              variant="contained" 
            >
              Modify
            </Button>
            <Typography variant="caption" color="text.secondary">
              {description}
            </Typography></>
          )}
        </CardContent>
    </Card>
  );
}

InfoCard.propTypes = {
  data: shape({
    avatar: string,
    name: string,
    description: string,
    website: string,
  })
};

export default InfoCard;
