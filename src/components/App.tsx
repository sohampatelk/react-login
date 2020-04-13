import React from 'react';
import { Fragment } from 'react';
import './App.css';
import { IUserLogin } from '../model/personLogin';
import { IMenuItem } from '../model/menuItem';
import LogInOutButton from './LogInOutButton';


 
export interface IAppProps {
}

export interface IState {
  userLogins: IUserLogin[];
  loginFormIsOpen: boolean;
  loggedIn: boolean;
  userNum: number;
  showingFailedLogin: boolean;
  menuItems: IMenuItem[][];
}

export default class App extends React.Component<IAppProps, IState> {
  constructor(props: IAppProps) {
    super(props);
    
    //Set up properties for user
    this.state = {
      userLogins: [
        {
          username: 'soham',
          password: 'soham'
        },
        {
          username: 'john',
          password: 'john'
        },
        {
          username: 'charlie',
          password: 'charlie'
        }
      ],
      //this state login pform page is open or not.
      loginFormIsOpen: false,
      loggedIn: false,
      // user number is 0 when none is logged in ,
      userNum: 0,
      showingFailedLogin: false,
      menuItems: [
        [{key:'1',name:'Home'},{key:'2',name:"Page-Soham"},{key:'3',name:'Introduction to HTML'},{key:'4',name:"CSS for Beginners"}],
        [{key:'1',name:'Home'},{key:'2',name:"Page-John"},{key:'3',name:'Javascript - advanced'},{key:'4',name:"Expert in TypeScript"}],
        [{key:'1',name:'Home'},{key:'2',name:"Page-Charlie"},{key:'3',name:'intro in c#'},{key:'4',name:"React Begginers"}]
      ]
    }
  }

  public onClickLogInButton = () => {
    // Test for any modal forms open to prevent button operation.
    if ( !(this.state.loginFormIsOpen || this.state.showingFailedLogin) ) {
      this.setState( { loginFormIsOpen: true} );
    }
  }
  
  public onClickLogOutButton = () => {
    this.setState(
      { 
        loggedIn: false,
        userNum: 0
      }
    );
  }


  
  public render(){
    let { loginFormIsOpen, loggedIn, userNum, showingFailedLogin, menuItems } = this.state;
    let userMenuItems: IMenuItem[];
    if ( userNum >= 0 ) {
      userMenuItems = menuItems[userNum];
    } else {
      userMenuItems = [{key:'1',name:'Home'}];
    }
    return(
      <Fragment>
        <LogInOutButton
          loggedIn={loggedIn}
          callbackLogIn={this.onClickLogInButton}
          callbackLogOut={this.onClickLogOutButton} />

      </Fragment>
    )
  }

}
