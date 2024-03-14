import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const cardsData = [
  {
    imageUrl: 'https://i.pinimg.com/564x/da/07/3e/da073e969c096bcb6cd69b8550158d10.jpg',
    title: 'Title 1',
    date: 'Date 1',
    content: 'Content 1',
    expanded: false
  },
  {
    imageUrl: 'https://i.pinimg.com/564x/da/07/3e/da073e969c096bcb6cd69b8550158d10.jpg',
    title: 'Title 2',
    date: 'Date 2',
    content: 'Content 2',
    expanded: false
  },
  {
    imageUrl: 'https://i.pinimg.com/564x/da/07/3e/da073e969c096bcb6cd69b8550158d10.jpg',
    title: 'Title 3',
    date: 'Date 3',
    content: 'Content 3',
    expanded: false
  }
];

const ProductCard = () => {
   const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
     <div style={{display: 'flex'}}>
      {cardsData.map((card, index) => (
        <Card key={index} sx={{ width: '100vw', margin: '20px' }}>
          <CardMedia component="img" height="194" image={card.imageUrl} alt={card.title} />
          <CardContent>
            <Typography variant="h5">{card.title}</Typography>
            <Typography variant="subtitle2" color="text.secondary">{card.date}</Typography>
            <Typography variant="body2" color="text.secondary">{card.content}</Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              aria-expanded={card.expanded}
              onClick={handleExpandClick}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={card.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              {/* Add more dynamic content here */}
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </div>
  );
};

export default ProductCard;
