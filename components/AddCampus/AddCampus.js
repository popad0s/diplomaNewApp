import React from 'react';
import PageTitle from '../PageTitle/PageTitle';

export default class AddCampus extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {
            campusNumber: 1,
            floorsNumber: 1,
            totalArea: 100,
            lastRepearing: 1980,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Данні про корпус №'+this.state.campusNumber+' збережено');
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
          <input type="text" placeholder={this.state.campusNumber} onChange={this.handleChange}/>
        </label>
        <br/><br/>
        <label>
          Кількість поверхів
          <input type="text" placeholder={this.state.floorsNumber} onChange={this.handleChange}/>
        </label>
        <br/><br/>
        <label>
          Загальна Площа
          <input type="text" placeholder={this.state.totalArea} onChange={this.handleChange}/>
        </label>
        <br/><br/>
        <label>
            Рік останнього ремонту
          <input type="text" placeholder={this.state.lastRepearing} onChange={this.handleChange}/>
        </label>
      <br/><br/>
      <input type="submit" value="Надіслати" />
      </form>   
    </div>
    </>
        )
    }
}
