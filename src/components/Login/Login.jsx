import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from './../Common/FormsControls/FormsControls.module.css'

function Login(props) {
    const onSubmit = values => {
        if (values.captcha) {
            props.login(values.email, values.password, values.rememberMe, values.captcha)
            return
        }
        props.login(values.email, values.password, values.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}

function LoginForm(props) {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'email'}
                       component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'}
                       component={Input}
                       validate={[required]}
                       type={'password'}
                />
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input}/>remember me
            </div>
            {
                props.captchaUrl &&
                <div>
                    <div>
                        Captcha
                    </div>
                    <div>
                        <img src={props.captchaUrl} alt={'captcha'}/>
                    </div>
                    <div>
                        <Field type={'input'} name={'captcha'} component={Input}/>
                    </div>
                </div>
            }

            {
                props.error &&
                <div className={styles.formSummaryError}>
                    {props.error}
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