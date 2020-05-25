import React from 'react';
import {TextField, Button} from '@material-ui/core';
import PageTitle from '../PageTitle/PageTitle';
import {Link} from 'react-router-dom'; 


export default class ChooseCampus extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {
            campusNumber: 0,

        };
    }

    render() {
        return (
            <>
            <PageTitle title='Choose Campus'/>
         <div style={{'float':"right"}}><Link to='/app/ui/addcampus'><Button variant="contained" color="primary">Add Campus</Button></Link></div>
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
        <select>
        <option selected value="1">01/01/2020</option>
        <option selected value="2">01/01/2020</option>
        <option selected value="3">01/01/2020</option>
        <option selected value="4">01/01/2020</option>
        </select>
        <br/>
        <br/>
        <br/>
        <form noValidate autoComplete="off">
  <TextField id="outlined-basic" label="Area" variant="outlined" />
</form>

            </>
        )
    }
}
