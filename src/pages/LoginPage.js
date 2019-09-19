import React , {Component} from 'react'
import LoginForm from '../components/LoginForm.js'

export default class LoginPage extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <LoginForm />
            </div>
        )
    }
}