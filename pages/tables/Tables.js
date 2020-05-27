import React from "react";

class Tables extends React.Component {

  /**
   * constructor
   *
   * @object  @props  parent props
   * @object  @state  component state
   */
  constructor(props) {

      super(props);

      this.state = {
          obj: {},
          isLoaded: false
      };

  }

  /**
   * componentDidMount
   *
   * Fetch json array of objects from given url and update state.
   */

  componentDidMount() {

    const URL = 'https://b1fe9331.ngrok.io';
      fetch(URL+'/diplom/public/index.php/api/building/1', {
        method: 'GET',
        mode:'cors',
        headers: new Headers ({
          'Accept' : 'application/json',
          'Content-Type' : ' application/json', 
          'Authorization': 'Bearer DgtaPv3ciCHVUqABVrha'
        })
      })
          .then(res => res.json())
          .then(json => {
              this.setState({
                  obj: json,
                  isLoaded: true, 
              })
          }).catch((err) => {
              console.log(err);
          });

  }

  /**
   * render
   *
   * Render UI
   */
  render() {

      const { isLoaded, obj } = this.state;

      if (!isLoaded)
          return <div>Завантаження...</div>;

      return (
          <div className="App">
              <ul>
                 
                      <li obj={obj.id}>
                          номер корпусу: {obj.number} | загальна площа: {obj.area} | кількість поверхів: {obj.floors_count}| дата останнього ремонту: {obj.last_renewal_year}
                      </li>                
              </ul>
          </div>
      );

  }

}

export default Tables;
