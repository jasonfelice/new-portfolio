/* eslint-disable react/prop-types */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Styles from './portfolio.module.scss';

export default function MultiActionAreaCard({ info }) {
  const {
    title, description, tech, github, live, image,
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
            <Typography className={Styles.projectTitle} sx={{ fontWeight: '600', color: '#455' }} gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1rem' }}>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </a>
      <Stack sx={{ padding: '0 16px' }} direction="row" spacing={1}>
        {
          tech.map((tec) => (
            <Chip key={tec} label={tec} variant="outlined" />
          ))
        }
      </Stack>
      <CardActions>
        <a href={github} target="_blank" rel="noreferrer">
          <Button size="small" color="primary">
            &lt;
            source
            /
            &gt;
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}
