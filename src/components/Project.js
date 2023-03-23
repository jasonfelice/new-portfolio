import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export const Project = () => (
  <Card sx={{ width: '80%' }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="400"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <a href="https://github.com/jasonfelice" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
        <Button size="small" color="primary">
          See on GitHub
        </Button>
      </a>
    </CardActions>
  </Card>
);

export default Project;
