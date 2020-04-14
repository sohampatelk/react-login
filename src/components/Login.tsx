import React from 'react';
import { Fragment } from 'react';
import LoginPage from './LoginPage';

export interface ILogin {
    loginFormIsOpen: boolean;
    onClickSubmit: (currrentUserInput: string, currentPasswordInput: string) => void;
}
export default class Login extends React.Component<ILogin> {
    public render () {
        let { loginFormIsOpen, onClickSubmit } = this.props;
        return(
        <Fragment>
            {loginFormIsOpen ?
                <div><LoginPage onClickSubmit={onClickSubmit} /></div>:<div></div>
            }
        </Fragment>
        )
    }
    
}
