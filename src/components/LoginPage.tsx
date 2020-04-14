import * as React from 'react';
import { Fragment } from 'react';
import { Input, Button } from 'semantic-ui-react';


interface ILoginPageProps {
    onClickSubmit: (currentUserInput: string, currentPasswordInput: string) => void;
}
interface ILoginPageState {
    currentUser: string;
    currentPassword: string;
}

export default class LoginPage extends React.Component<ILoginPageProps, ILoginPageState> {
    constructor(props: ILoginPageProps) {
        super(props);
        this.state = {
            currentUser: '',
            currentPassword: ''
        }
    }

    onUserFieldChange = (event: React.FormEvent<HTMLInputElement>) => {
        this.setState({ currentUser: event.currentTarget.value })
    }

    onPasswordFieldChange = (event: React.FormEvent<HTMLInputElement>) => {
        this.setState({currentPassword:event.currentTarget.value})
    }

    public render() {
        const { onClickSubmit } = this.props;
        const { currentUser, currentPassword } = this.state;
        console.log("We are in login page: "+ this.state);
        
        return (
            <Fragment>
                <h1>Log-In</h1>
                <Input placeholder='Username' onChange={this.onUserFieldChange} />
                <Input placeholder='Password' onChange={this.onPasswordFieldChange} />
                <Button content='Submit' onClick={() => onClickSubmit(currentUser, currentPassword)} />
            </Fragment>
        );
    }
}
