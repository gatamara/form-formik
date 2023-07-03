import { useField } from 'formik'

export const Select = ({ label, ...props }) => {
    const [field, meta] = useField(props)


    return (
        <div>
            <label htmlFor="">{label} </label>
            <select {...field} {...props} ></select>
            {meta.touched && meta.error ? <div className="error-menssage">{meta.error}</div> : null}
        </div>
    )
}
