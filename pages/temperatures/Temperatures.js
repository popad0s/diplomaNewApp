import React from 'react';
import {TextField} from '@material-ui/core';
import {Button} from '@material-ui/core';

export default class Temperatures extends React.Component {
render() {
    let styles={
        margin: '0 50px 0 0',
    };
    return (
        <>
        <h1>Temperatures</h1>
 <div style={{float:'right'}}>
<Button variant="contained" color="primary">
  Edit Data
</Button><Button variant="contained" color="primary">
  Fill the Data
</Button>
</div>         
 <select>
        <option value="grapefruit">1</option>
        <option value="lime">2</option>
        <option selected value="coconut">Choose the campus</option>
        <option value="mango">3</option>
        </select>
        <br/>
        <br/>
        <br/>
        <select>
        <option value="grapefruit">1</option>
        <option value="lime">2</option>
        <option selected value="coconut">Choose the room</option>
        <option value="mango">3</option>
        </select>
        
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1>Reports</h1>
        <select>
        <option selected value="1">01/01/2020</option>
        <option selected value="2">01/01/2020</option>
        <option selected value="3">01/01/2020</option>
        <option selected value="4">01/01/2020</option>
        </select>
        
        <div/>
        <select>
        <option selected value="1">01/01/2020</option>
        <option selected value="2">01/01/2020</option>
        <option selected value="3">01/01/2020</option>
        <option selected value="4">01/01/2020</option>
        </select>
        <form noValidate autoComplete="off">
        <form noValidate autoComplete="off">
  <TextField id="outlined-basic" label="min t" variant="outlined" style={styles}/>
</form>
  <TextField id="outlined-basic" label="Max t" variant="outlined" style={styles}/>
  <br/>
  <br/>
  <br/>
</form>
<Button variant="contained" color="secondary" >
  Export
</Button>
        </>
    )
}



}