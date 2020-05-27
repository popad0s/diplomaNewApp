import React from 'react';
import { Grid } from '@material-ui/core';

export default class Counters extends React.Component {
    render() {
        return (
            <>
<h2>Counters</h2>
<Grid
style={{margin:'20px 0px 20px 0px'}}
 container
 direction="row"
 justify="space-between"
>
<div>
    <div>Campus: 1</div>
    <div>Year of construction: 1969</div>
    <div>Year of last renovation: 1997</div>
</div>
<div>
    <h3>Counter</h3>
    <span>General info about this counter</span>
</div>
<div>
<select>
        <option value="grapefruit">pressure</option>
        <option value="lime">temperature</option>
        <option selected value="coconut">Choose unit</option>
        <option value="mango">e.g</option>
</select>
</div>
</Grid>
           </>
        )
    }
}