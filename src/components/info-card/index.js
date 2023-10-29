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
import { setModalData, setUpdateActionState } from "../../actions";

const InfoCard = ({ data }) => {
  const { avatar, description, name, website } = data;

  const { dispatch } = useContext(PatientsContext);
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef(null);

  const onClickCard = () => {
    setUpdateActionState({ dispatch, payload: null })
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
