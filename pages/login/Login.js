import React, { useState } from "react";
import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  Tabs,
  Tab,
  TextField,
  Fade,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";
import google from "../../images/google.svg";

// context
import { useUserDispatch, loginUser } from "../../context/UserContext";
// import {API_URL} from './url';

function Login(props) {
  let classes = useStyles();

  // global
  let userDispatch = useUserDispatch(); 

  // local
  let [isLoading, setIsLoading] = useState(false);
  let [error, setError] = useState(null);
  let [activeTabId, setActiveTabId] = useState(0);
  let [nameValue, setNameValue] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [token, setToken] = useState('');
  let [data, setData] = useState([]);


  function fetchData(email, password) {
           fetch('https://c6de8fa25c1c.ngrok.io/diplom/public/index.php/login', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-type': 'application/json',
                },
                 body: JSON.stringify({
                    email: email,
                    password: password,
                })
            }) /*end fetch */
            .then(results => results.json())
            .then((data) => {
              (data.token!==undefined)? window.localStorage.setItem('token', data.token):console.log(`Error`);
    
        console.log(data.token);
        console.log(data);
      });
     }
    
        
    
       const change = (e) => {
            return setNameValue({
                [e.target.name]: e.target.value
            });
        }; //end change
    
       const onSubmit = (e) =>{
            fetchData(email, password);
            e.preventDefault();
            //console.log(this.state);
            setEmail(email);
            setPassword(password);
            };

  return (
    <Grid container className={classes.container}>
      <div className={classes.logotypeContainer}>
        <img src={'https://pngimage.net/wp-content/uploads/2018/06/logo-kpi-png-1.png'} alt="logo" className={classes.logotypeImage} />
        <Typography className={classes.logotypeText}>Management <br/> System</Typography>
      </div>
      <div className={classes.formContainer}>
        <div className={classes.form}>
          <Tabs
            value={activeTabId}
            onChange={(e, id) => setActiveTabId(id)}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Login" classes={{ root: classes.tab }} />
            <Tab label="New User" classes={{ root: classes.tab }} />
          </Tabs>
          {activeTabId === 0 && (
            <React.Fragment>
              <Typography variant="h1" className={classes.greeting}>
                Hello, User
              </Typography>
              <Button size="large" className={classes.googleButton}>
                <img src={google} alt="google" className={classes.googleIcon} />
                &nbsp;Sign in with Google
              </Button>
              <div className={classes.formDividerContainer}>
                <div className={classes.formDivider} />
                <Typography className={classes.formDividerWord}>or</Typography>
                <div className={classes.formDivider} />
              </div>
              <Fade in={error}>
                <Typography color="secondary" className={classes.errorMessage}>
                  Something is wrong with your login or password :(
                </Typography>
              </Fade>
              <TextField
                id="email"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={email}
                onChange={e => setEmail(e.target.value)}
                margin="normal"
                placeholder="Email Adress"
                type="email"
                fullWidth
              />
              <TextField
                id="password"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={password}
                onChange={e => setPassword(e.target.value)}
                margin="normal"
                placeholder="Password"
                type="password"
                fullWidth
              />
              <div className={classes.formButtons}>
                {isLoading ? (
                  <CircularProgress size={26} className={classes.loginLoader} />
                ) : (
                  <Button
                    disabled={
                      email.length === 0 || password.length === 0
                    }
                    onClick={(e) => {
                      onSubmit(e);
                      loginUser(
                        userDispatch,
                        email,
                        password,
                        props.history,
                        setIsLoading,
                        setError,
                      )
                    }
                    }
                    variant="contained"
                    color="primary"
                    size="large"
                  >
                    Login
                  </Button>
                )}
                <Button
                  color="primary"
                  size="large"
                  className={classes.forgetButton}
                >
                  Forget Password
                </Button>
              </div>
            </React.Fragment>
          )}
          {activeTabId === 1 && (
            <React.Fragment>
              <Typography variant="h1" className={classes.greeting}>
                Welcome!
              </Typography>
              <Typography variant="h2" className={classes.subGreeting}>
                Create your account
              </Typography>
              <Fade in={error}>
                <Typography color="secondary" className={classes.errorMessage}>
                  Something is wrong with your login or password :(
                </Typography>
              </Fade>
              <TextField
                id="name"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={nameValue}
                onChange={e => setNameValue(e.target.value)}
                margin="normal"
                placeholder="Full Name"
                type="text"
                fullWidth
              />
              <TextField
                id="email"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={email}
                onChange={e => setEmail(e.target.value)}
                margin="normal"
                placeholder="Email Adress"
                type="email"
                fullWidth
              />
              <TextField
                id="password"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={password}
                onChange={e => setPassword(e.target.value)}
                margin="normal"
                placeholder="Password"
                type="password"
                fullWidth
              />
              <div className={classes.creatingButtonContainer}>
                {isLoading ? (
                  <CircularProgress size={26} />
                ) : (
                  <Button
                    onClick={(e) => {
                      onSubmit(e);
                      loginUser(
                        userDispatch,
                        email,
                        password,
                        props.history,
                        setIsLoading,
                        setError,
                      )
                    }
                    }
                    disabled={
                      email.length === 0 ||
                      password.length === 0 ||
                      nameValue.length === 0
                    }
                    size="large"
                    variant="contained"
                    color="primary"
                    fullWidth
                    className={classes.createAccountButton}
                  >
                    Create your account
                  </Button>
                )}
              </div>
              <div className={classes.formDividerContainer}>
                <div className={classes.formDivider} />
                <Typography className={classes.formDividerWord}>or</Typography>
                <div className={classes.formDivider} />
              </div>
              <Button
                size="large"
                className={classnames(
                  classes.googleButton,
                  classes.googleButtonCreating,
                )}
              >
                <img src={google} alt="google" className={classes.googleIcon} />
                &nbsp;Sign in with Google
              </Button>
            </React.Fragment>
          )}
        </div>
        <Typography color="primary" className={classes.copyright}>
          ©KPI
        </Typography>
      </div>
    </Grid>
  );
}

export default withRouter(Login);

// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { withRouter } from 'react-router-dom';

// const API_URL = 'https://b1fe9331.ngrok.io/diplom/public/index.php/';

// class Login extends Component {

//     constructor() {
//         super();
//         this.state = {
//             data: [],
//             username: "",
//             password: "",
//             token: "",
//         };
//     } //end constructor

//     fetchData(email, password) {
//        fetch(API_URL+'login', {
//             method: 'POST',
//             mode: 'cors',
//             headers: {
//                 'Content-type': 'application/json',
//             },
//              body: JSON.stringify({
//                 email: email,
//                 password: password,
//             })
//         }) /*end fetch */
//         .then(results => results.json())
//         .then((data) => {
//           (data.token!==undefined)? window.localStorage.setItem('token', data.token):console.log(`Error`);

//     console.log(data.token);
//     console.log(data);
//   });
//     }

    

//     change = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         });
//     }; //end change

//     onSubmit = (e) =>{
//         this.fetchData(this.state.email, this.state.password);
//         e.preventDefault();
//         //console.log(this.state);
//         this.setState({
//              email: "",
//              password: "",
//             });
            
//         this.props.history.push('/landing');
//         };

//     render() {
//     console.log(this.state.data);
//         return (
//            <div>
//                 <div className="loginContainer">
//                 <h2>Member Login</h2>
//                     <form>
//                             <input
//                             id="id"
//                             name="email"
//                             placeholder="UserName"
//                             value={this.state.email}
//                             onChange={e => this.change(e) }
//                             className="form-control"
//                             />  <br />

//                             <input
//                             id="password"
//                             name="password"
//                             type="password"
//                             placeholder="Password"
//                             value={this.state.password}
//                             onChange={e => this.change(e) }
//                             className="form-control"
//                             />  <br />

//                         <button onClick={e => this.onSubmit(e)} className="btn btn-primary">Submit</button>
//                         </form>
//                     </div>
//             </div>
//         );
//       }
// }

// export default withRouter(Login);
