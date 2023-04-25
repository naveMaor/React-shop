 import "./Product.css";
//
// function Product({ id, title, price, description, category, image, rating }) {
//     return (
//         <div className="product-card">
//             <div className="product-image">
//                 <img src={image} />
//             </div>
//             <div className="product-info">
//                 <h5>{title}</h5>
//                 <h6>{price}</h6>
//             </div>
//         </div>
//     );
// }
//
// export default Product;

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
 import Collapse from '@mui/material/Collapse';
 import { red } from '@mui/material/colors';
 import { styled } from '@mui/material/styles';
 import { Button, Icon } from '@mui/material';
 import {useContext} from "react";
 import CartContext from "../Mycontext";


 const ExpandMore = styled((props) => {
     const { expand, ...other } = props;
     return <IconButton {...other} />;
 })(({ theme, expand }) => ({
     transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
     marginLeft: 'auto',
     transition: theme.transitions.create('transform', {
         duration: theme.transitions.duration.shortest,
     }),
 }));

 export default function Product({ title, price, description, image, rating }) {
     const [expanded, setExpanded] = React.useState(false);
     const { cart, setCart } = useContext(CartContext);


     const handleExpandClick = () => {
         setExpanded(!expanded);
     };


    const [numberOfItems, setNumberOfItems] = React.useState(0);

    return (
        <div className="product-wrapper">
            <Card sx={{ maxWidth: 250}}>
                <CardMedia
                    sx={{ height: 250}}
                    image={image}
                    title={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="h5" color="green">
                        {price}$
                    </Typography>
                    <Typography variant="body2" color={rating.rate > 4 ? {red} : "text.secondary"}>
                        {rating.rate}⭐ ({rating.count})
                    </Typography>
                </CardContent>
                <CardActions>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                    <Button   onClick={() => {
                        setCart([...cart, { title, price, image }]);
                    }}
                              variant="contained" color="primary" size={"small"}>
                        <Icon icon="add_shopping_cart" />
                        Add to cart
                    </Button>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Typography variant="paragraph" color="caption">
                        {description}
                    </Typography>
                </Collapse>
            </Card>
        </div>
    );
}