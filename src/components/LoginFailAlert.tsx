import * as React from 'react';
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
                {alert("Username or Password did not match. Please try again.")}
                <Button content='OK' onClick={() => onClickOk()} />
            </Fragment>
            );
        } else { 
            return( null );
        }
    } 
}