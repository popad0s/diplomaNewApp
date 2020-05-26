export default class LoginCheck {


     componentWillMount() {
    }
  
    componentDidMount() {
        this.fetchData();
    }
  
     fetchData() {
        fetch('http://theapi/api/auth', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
             body: JSON.stringify({
                username: 'myUserName',
                password: 'myPassword',
                Authorization: 'TheReturnedToken',
            })
        }) /*end fetch */
        .then(results => results.json())
        .then(data => this.setState({ data: data })
  
        );
    }
  
    //request the token
      requestAccessToken(data) {
        const loginInfo = '${data}&grant_type=password';
        return fetch('${API_URL}Token', {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/json',
          }),
          body: loginInfo,
        })
          .then((response) => response.json());
      }
  
      //authenticate request
      requestUserInfo(token) {
        return fetch('${API_URL}api/participant/userinfo', {
          method: 'GET',
          headers: new Headers({
            Authorization: 'Bearer ${token}',
          }),
        })
          .then((response) => response.json());
      }
  
     change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }; //end change
  
    onSubmit = (e) =>{
        this.fetchData();
        e.preventDefault();
        //console.log(this.state);
        this.setState({
             username: "",
             password: "",
            });
  
  

};
