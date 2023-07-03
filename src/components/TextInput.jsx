import { useField } from "formik"
import '../App.css'

export const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props)


    return (
        <div>
            <label> {label} </label>
            <input {...field} className='input' />
            {meta.touched && meta.error ? <div className="error-menssage">{meta.error}</div> : null}
        </div>
    )
}
