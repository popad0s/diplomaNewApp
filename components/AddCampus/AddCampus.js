import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
// import {API_URL} from '../../pages/login/url';

export default class AddCampus extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {
            number: '',
            floors_count: '',
            area: '',
            last_renewal_year: '',
        };

       
        
        this.sendData = this.sendData.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({
        [event.target.name]: event.target.value});    
    }
    
    sendData() {
      console.log(this.state.number, this.state.floors_count, this.state.area, this.state.last_renewal_year);
        fetch('https://c6de8fa25c1c.ngrok.io/diplom/public/index.php/api/building', {
          method: 'POST',
          mode: 'cors',
          headers: {
              'Content-type': 'application/json',
              'Authorization': 'Barear ' + window.localStorage.getItem('token'),
              'Accepts':'application/json'
          },
           body: JSON.stringify({
              number: this.state.number,
              floors_count: this.state.floors_count,
              area: this.state.area, 
              last_renewal_year: this.state.last_renewal_year,
          })
      }) /*end fetch */
      .then(results => results.json());
}
    

      handleSubmit(event) {
        alert('Данні про корпус №'+this.state.number+' збережено');
        event.preventDefault();
      }
    render() {
        return (
            <>      
      <PageTitle title="Add Campus"/>
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Номер Корпусу
          <input type="text" name="number" onChange={this.handleChange}/>
        </label>
        <br/><br/>
        <label>
          Кількість поверхів
          <input type="text" name="floors_count" placeholder={this.state.floors_count} onChange={this.handleChange}/>
        </label>
        <br/><br/>
        <label>
          Загальна Площа
          <input type="text" name="area" placeholder={this.state.area} onChange={this.handleChange}/>
        </label>
        <br/><br/>
        <label>
            Рік останнього ремонту
          <input type="text" name='last_renewal_year' placeholder={this.state.last_renewal_year} onChange={this.handleChange} />
        </label>
      <br/><br/>
      <input type="submit" value="Надіслати" onClick={this.sendData}/>
      </form>   
    </div>
    </>
        )
    }
}
