import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { motion as m } from 'framer-motion';

export const Project = ({
  title, description, image, github,
}) => (
  <m.div style={{ width: '80%' }} value={title} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href={github} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
          <Button size="small" color="primary">
            See on GitHub
          </Button>
        </a>
      </CardActions>
    </Card>
  </m.div>
);

export default Project;

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};
