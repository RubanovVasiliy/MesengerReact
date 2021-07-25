import styles from './FormsControls.module.css'
import {Field} from "redux-form";
import React from "react";


export function FormControl({meta: {touched, error}, children}) {
    const hasError = touched && error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export function Textarea(props) {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}> <textarea{...input}{...restProps} /></FormControl>
}

export function Input(props) {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}> <input{...input}{...restProps} /></FormControl>
}

export const createField = (placeholder, name, validators, component, props = {}, text = '') => (
    <div>
        <Field placeholder={placeholder} name={name}
               component={component}
               validate={validators}
               {...props}
        />{text}
    </div>
)