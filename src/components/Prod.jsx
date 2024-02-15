import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Prod({data}) {

    let res = data;

function details(){

}

  return (

    <Card sx={{ maxWidth: 345,height:345 }  } >
      <CardMedia
        sx={{ height: 140 }}
        image={res.thumbnail}
        title={res.brand}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {res.brand}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {res.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={details}>buy Now</Button>
      </CardActions>
    </Card>
  );
}
