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
          items: [],
          isLoaded: false
      }

  }

  /**
   * componentDidMount
   *
   * Fetch json array of objects from given url and update state.
   */
  componentDidMount() {

      fetch('https://f33b53db.ngrok.io/diplom/public/index.php/api/building/1?XDEBUG_SESSION=PHPSTORM', {
        method: 'GET',
        mode:'no-cors',
        headers: {
          'Accept' : 'application/json',
          'Content-Type' : ' application/json', 
          'Authorization': 'Bearer DgtaPv3ciCHVUqABVrha'
        }})
          .then(res => res.json())
          .then(json => {
              this.setState({
                  items: json,
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

      const { isLoaded, items } = this.state;

      if (!isLoaded)
          return <div>Завантаження...</div>;

      return (
          <div className="App">
              <ul>
                  {items.map(item => (
                      <li key={item.id}>
                          номер корпусу: {item.number} | загальна площа: {item.area} | кількість поверхів: {item.floors}| дата останнього ремонту: {item.repairingDate}
                      </li>
                  ))}
              </ul>
          </div>
      );

  }

}

export default Tables;