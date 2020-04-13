import React from 'react';
import { Fragment } from 'react';
import './App.css';
import { IUserLogin } from './components/personLogin';
import { IMenuItem } from './components/menuItem';


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
          username: 'user1',
          password: 'password1'
        },
        {
          username: 'user2',
          password: 'password2'
        },
        {
          username: 'user3',
          password: 'password3'
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

  
  public render(){
    return(
      <Fragment>
        
      </Fragment>
    )
  }

}
