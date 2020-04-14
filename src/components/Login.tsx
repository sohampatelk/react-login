import * as React from 'react';
import { Fragment } from 'react';
import LoginPage from './LoginPage';

export interface ILogin {
    loginFormIsOpen: boolean;
    onClickSubmit: (currrentUserInput: string, currentPasswordInput: string) => void;
}
export default class Login extends React.Component<ILogin> {
    public render () {
        let { loginFormIsOpen, onClickSubmit } = this.props;
        console.log("We are in login.tsx page " + this.props.loginFormIsOpen);
        return(
        <Fragment>
            {loginFormIsOpen ?
                <div><LoginPage onClickSubmit={onClickSubmit} /></div>:
                <h4>Please Click on login button</h4>
            }
        </Fragment>
        )
    }
    
}
