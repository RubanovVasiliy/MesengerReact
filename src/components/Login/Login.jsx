import React from "react";
import {Field, reduxForm} from "redux-form";

function Login() {
    const onSubmit = values => {
        // print the form values to the console
        console.log(values)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

function LoginForm(props) {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={'input'}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'}/>remember me
            </div>
            <div>
                <button type={'submit'}>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default Login