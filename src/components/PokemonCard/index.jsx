import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CardActionArea } from '@mui/material';
import { typeHandle } from '../../utils';

export default function PokemonCard({name, img, types}) {
  
  
    return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image= {img}
          alt="green iguana"
        />
        <CardContent>
            <Box display = "flex" justifyContent = "space-between" alignItems="center">
            <Typography gutterBottom variant="h5" component="div">
                {name}
            </Typography>
            <Typography gutterBottom variant="caption-text" component="div" justifyContent="center">
                {typeHandle(types)}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}