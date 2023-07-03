import { useField } from "formik"


export const Checkbox = ({ children, ...props }) => {

    const [field, meta] = useField({ ...props, type: 'checkbox' })


    return (
        <div>
            <label>
                <input type="checkbox" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? <div className="error-menssage">{meta.error}</div> : null}
        </div>
    )
}
