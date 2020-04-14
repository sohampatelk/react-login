import React from 'react';
import { Fragment } from 'react';
import { Button } from 'semantic-ui-react';

export interface ILoginFailAlert {
    showFailedLogin: boolean;
    onClickOk: () => void;
}

export default class LoginFailAlert extends React.Component<ILoginFailAlert> {

    public render () {
        const { showFailedLogin, onClickOk } = this.props;
        if ( showFailedLogin ) {
            return(
            <Fragment>
                <h1> Username or Password did not match. Please try again.</h1>
                <Button content='OK' onClick={() => onClickOk()} />
            </Fragment>
            );
        } else { 
            return( null );
        }
    } 
}