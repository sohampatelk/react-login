import * as React from 'react';
import { Fragment } from 'react';
import { IProfileDetail } from '../model/profileDetail';


export interface IProfileDetailProps {
    userNum: number;
    loggedIn: boolean;
}

interface IProfileDetailState {
    userProfileDetail: IProfileDetail[];
}

export default class ProfileDetail extends React.Component<IProfileDetailProps, IProfileDetailState> {

    constructor(props: IProfileDetailProps) {
        super(props);

        this.state = {
            userProfileDetail: [
                {
                    username: 'soham',
                    name: 'soham',
                    email: 'soham@yahoo.com',
                    hobby: 'Swimming'
                },
                {
                    username: 'john',
                    name: 'john',
                    email: 'john@yahoo.com',
                    hobby: 'Running'
                },
                {
                    username: 'smith',
                    name: 'smith',
                    email: 'smith@gmail.com',
                    hobby: 'Ice-skatting'
                }
            ]
        }
    }

    public render() {
        const { userProfileDetail } = this.state;
        const { userNum, loggedIn } = this.props;
        console.log(this.props);  //for reference
        console.log(this.state);

        if (loggedIn) {
            const { username, name, email, hobby } = userProfileDetail[userNum];
            return (
                <Fragment>
                    <p>Username: {username}</p>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                    <p>Hobby: {hobby}</p>
                </Fragment>
            );
        } else {
            // Nobody logged in then logged in is -1 it will return -1.
            return (null);
        }
    }
}