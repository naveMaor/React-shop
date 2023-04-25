import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
//use context to filter by price
import PriceContext from "../Mycontext";
import { useContext } from "react";

export default function RangeSlider(handlePrice) {
    const {price, setPrice} = useContext(PriceContext);
    const handleChange = (event, newValue) => {
        setPrice(newValue);
    };

    return (
        <Box sx={{ width: 300 }}>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={price}
                max={1000}
                min={0}
                onChange={handleChange}
                valueLabelDisplay="auto"
            />
        </Box>
    );
}