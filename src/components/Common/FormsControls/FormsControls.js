 import styles from './FormsControls.module.css'


export function FormControl({input, meta, child, ...props}) {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
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