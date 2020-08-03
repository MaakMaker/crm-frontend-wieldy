import React, { Component } from "react";
import {Button, Checkbox, Form, Input} from "antd";
import Link from "next/link";
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";
import LockOutlined from "@ant-design/icons/lib/icons/LockOutlined";
import GoogleOutlined from "@ant-design/icons/lib/icons/GoogleOutlined";
import FacebookOutlined from "@ant-design/icons/lib/icons/FacebookOutlined";
import GithubOutlined from "@ant-design/icons/lib/icons/GithubOutlined";
import TwitterOutlined from "@ant-design/icons/lib/icons/TwitterOutlined";
import {useDispatch} from "react-redux";
import {
  showAuthLoader,
  userFacebookSignIn,
  userGithubSignIn,
  userGoogleSignIn,
  userSignIn,
  userTwitterSignIn
} from "../../../../redux/actions/Auth";
import { render } from "react-dom";
import Axios from 'axios';

const FormItem = Form.Item;

class SignUP extends Component {

	constructor(props) {
        super(props)
    
        this.state = {
            username : '',
            email : '',
            password : '',
            confirm_password : '',
            display_username : false,
            display_email : false,
            display_password : false,
            display_confirm_password : false,
        }

	}
	
	isValid = () => {
        let valid = true;
        Object.values(this.state).forEach((val) => {
			if(val === true){
				valid = false
				return valid
			}
		})
		
        return valid;
	}
	
	getErrors = (name, value) => {
        let errors = [];
        if(!required(value)){
            errors.push('This value is required')
        }
        if(minLength(3, value)){
            errors.push('Greater than 3 characters required')
        }
        if(maxLength(20, value)){
            errors.push('Cannot be more than 25 characters')
        }
        if(name === 'confirm_password' && !isEqual(this.state.password, value)){
            errors.push('Passwords should be the same')
        }
        const property = 'display_' + name
        if(errors.length === 0){
            // this.setState({
            //     [property] : false
            // })
            this.state[property] = false
        }
        if(this.state[property]){
            return (<>{errors.map((error,index) => <Row key={index} style={{color : 'red'}}>{error}</Row>)}</>)        
        }
	}
	
	clearForm = () => {
        this.setState({
                username : '',
                email : '',
                password : '',
                confirm_password : '',
                display_username : false,
                display_email : false,
                display_password : false,
                display_confirm_password : false,
        })
    }
	
	onFinishFailed = errorInfo => {
		console.log('Failed:', errorInfo);
	};

	onFinish = values => {
		console.log("finish", values)

		// const { username, email, password } = this.state
		this.setState({
			username: values.username,
			email: values.email,
			password: values.password,
			confirm_password: values.confirm_password,
		});

        if(this.isValid()) {
			Axios({
				method: 'post',
				cors: 'no-cors',
				url: 'http://127.0.0.1:8000/api/users/create',
				headers: {
					'Access-Control-Allow-Origin': '*'
				},
				data: {
					user: {
						username: values.username,
						email: values.email,
						password: values.password
					}
				}})
				.then(response => {
					alert("You're logged in successfully!")
					console.log(response)
					console.log(response.status + " " + response.statusText)
				})
				.catch(error => {
					console.log(error)
				})
				this.clearForm()
        }
	};

	render() {
		return (
			<div className="gx-login-container">
			  <div className="gx-login-content">
				<div className="gx-login-header gx-text-center">
				  <h1 className="gx-login-title">Sign Up</h1>
				</div>
				<Form
				  initialValues={{remember: true}}
				  name="basic"
				  onFinish={this.onFinish}
				  onFinishFailed={this.onFinishFailed}
				  className="gx-signin-form gx-form-row0">
		
				  <FormItem rules={[{required: true, message: 'Please input your username!\'}'}]} name="username">
		
					<Input prefix={<UserOutlined style={{color: 'rgba(0,0,0,.25)'}}/>}
						   placeholder="Username"/>
				  </FormItem>
				  <FormItem rules={[{required: true, message: 'Please input your E-mail!'}]} name="email">
		
					<Input prefix={<UserOutlined style={{color: 'rgba(0,0,0,.25)'}}/>}
						   placeholder="Email"/>
				  </FormItem>
				  <FormItem rules={[{required: true, message: 'Please input your Password!'}]} name="password">
		
					<Input prefix={<LockOutlined style={{color: 'rgba(0,0,0,.25)'}}/>}
						   type="password"
						   placeholder="Password"/>
				  </FormItem>
		
				  <FormItem rules={[{required: true, message: 'Please confirm your Password!'}]} name="confirm_password">
					<Input prefix={<LockOutlined style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
						   placeholder="Confirm Password"/>
				  </FormItem>
		
				  <FormItem name="remember" valuePropName="checked">
					<Checkbox>Remember me</Checkbox>
					<Link  href="/custom-views/user-auth/forgot-password"><span className="gx-login-form-forgot">Forgot password</span></Link>
				  </FormItem>
				  <FormItem className="gx-text-center">
					<Button type="primary" htmlType="submit">
					  Sign Up
					</Button>
				  </FormItem>
				</Form>
				<div className="gx-flex-row">
				  <span className="gx-mb-2 gx-mr-3">or Sign up using: </span>
				  <ul className="gx-social-link">
					<li>
					  <GoogleOutlined onClick={() => {
						dispatch(showAuthLoader());
						dispatch(userGoogleSignIn());
					  }}/>
					</li>
					<li>
					  <FacebookOutlined onClick={() => {
						dispatch(showAuthLoader());
						dispatch(userFacebookSignIn());
					  }}/>
					</li>
					<li>
					  <GithubOutlined onClick={() => {
						dispatch(showAuthLoader());
						dispatch(userGithubSignIn());
					  }}/>
					</li>
					<li>
					  <TwitterOutlined onClick={() => {
						dispatch(showAuthLoader());
						dispatch(userTwitterSignIn());
					  }}/>
					</li>
				  </ul>
				</div>
			  </div>
			</div>
		  );
	}
}

export default SignUP;
