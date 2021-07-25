import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from './../Common/FormsControls/FormsControls.module.css'

function Login({login, isAuth, captchaUrl}) {
    const onSubmit = values => {
        if (values.captcha) {
            login(values.email, values.password, values.rememberMe, values.captcha)
            return
        }
        login(values.email, values.password, values.rememberMe)
    }

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
    </div>
}

function LoginForm({handleSubmit, captchaUrl, error}) {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input, {type: 'password'})}
            {createField(null, 'rememberMe', null, Input, {type: 'checkbox'}, 'remember me')}
            {
                captchaUrl &&
                <div>
                    <div>
                        Captcha
                    </div>
                    <div>
                        <img src={captchaUrl} alt={'captcha'}/>
                    </div>
                    {createField(null, 'captcha', null, Input, {type: 'input'}, null)}
                </div>
            }

            {
                error &&
                <div className={styles.formSummaryError}>
                    {error}
                </div>
            }
            <div>
                <button type={'submit'}>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captcha
})

export default connect(mapStateToProps, {login})(Login)