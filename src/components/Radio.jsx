import { useField } from "formik"



export const Radio = ({ label, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'radio' })

    return (
        <div>
            <label htmlFor="">
                <input type="radio"  {...field}  {...props} /> {label} </label>
            {meta.touched && meta.error ? <div className="error-menssage">{meta.error}</div> : null}

        </div>
    )
}
