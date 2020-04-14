import * as React from 'react';
import { Fragment } from 'react';
import '../style/App.css';
import { IPersonLogin } from '../model/personLogin';
import LogInOutButton from './LogInOutButton';
import Login from "./Login";
import LoginFailAlert from './LoginFailAlert';
import ProfileDetail from './ProfileDetail';

export interface IAppProps {
}
export interface IAppState {
  userLoginDetails: IPersonLogin[];   //User detail which contain username and passwords
  loginFormIsOpen: boolean;
  loggedIn: boolean;
  userNum: number;
  showFailedLogin: boolean;
}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    //Set up properties for user
    this.state = {
      userLoginDetails: [
        {
          username: 'soham',
          password: 'soham'
        },
        {
          username: 'john',
          password: 'john'
        },
        {
          username: 'smith',
          password: 'smith'
        }
      ],
      //this state login pform page is open or not.
      loginFormIsOpen: false,
      loggedIn: false,
      // user number is 0 when none is logged in ,
      userNum: 0,
      showFailedLogin: false,

    }
  }

  public onClickLogInButton = () => {
    console.log("Log in button clicked");
    // Test for any modal forms open to prevent button operation.
    if (!(this.state.loginFormIsOpen || this.state.showFailedLogin)) {
      this.setState({ loginFormIsOpen: true });
    }
  }

  public onClickLogOutButton = () => {
    console.log("Log Out button clicked...");
    this.setState(
      {
        loggedIn: false,
        userNum: 0
      }
    );
  }


  // Click Submit button from Login Page 
  public onClickSubmit = (currentUserInput: string, currentPasswordInput: string) => {
    console.log("Submit button clicked in form...");
    this.setState({ loginFormIsOpen: false });
    let foundUser = this.isUserValid(currentUserInput, currentPasswordInput);
    if (foundUser >= 0) {
      this.setState({
        loggedIn: true,
        userNum: foundUser
      })
    } else {
      this.setState({ showFailedLogin: true });
    }
  }

  //If user is found then return found match array index is 0 or positive otherwise foundmatch will be -1.
  isUserValid = (currentUserInput: string, currentPasswordInput: string): number => {
    console.log("in uservalid function");
    let { userLoginDetails } = this.state;
    console.log(this.state);
    let foundMatch = -1;
    for (var i = 0; i < userLoginDetails.length; i++) {
      if (currentUserInput === userLoginDetails[i].username && currentPasswordInput === userLoginDetails[i].password) {
        foundMatch = i;
        console.log(`User found match done means it will get index of array ${i}`);
      }
    }
    return foundMatch;
  }

  // If Login is fail then set the showFailedLogin to false
  public onClickOk = () => {
    this.setState({ showFailedLogin: false });
  }


  public render() {
    console.log(this.state);
    let { loginFormIsOpen, loggedIn, userNum, showFailedLogin } = this.state;

    return (
      <Fragment>
        <LogInOutButton
          loggedIn={loggedIn}
          callbackLogIn={this.onClickLogInButton}
          callbackLogOut={this.onClickLogOutButton} />

        <Login
          loginFormIsOpen={loginFormIsOpen}
          onClickSubmit={this.onClickSubmit} />

        <LoginFailAlert
          showFailedLogin={showFailedLogin}
          onClickOk={this.onClickOk} />

        <ProfileDetail
          userNum={userNum}
          loggedIn={loggedIn} />
      </Fragment>
    )
  }
}
