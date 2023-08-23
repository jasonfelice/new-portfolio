/* eslint-disable react/prop-types */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Styles from './portfolio.module.scss';

export default function MultiActionAreaCard({ info }) {
  const {
    title, description, github, live, image,
  } = info;
  return (
    <Card className={Styles.card} sx={{ maxWidth: 345, boxShadow: '0 0 10px 0 grey' }}>
      <a href={live} target="_blank" rel="noreferrer">
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt={`${title} image`}
          />
          <CardContent>
            <Typography sx={{ fontWeight: '600', color: '#455' }} gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </a>
      <CardActions>
        <a href={github} target="_blank" rel="noreferrer">
          <Button size="small" color="primary">
            Source
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}
