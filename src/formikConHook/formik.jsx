
import { useFormik } from 'formik'
import './App.css'

const validate = (values) => {
    const errors = {}
    if (!values.name) {
        errors.name = 'Requerido'
    } else if (values.name.length < 5) {
        errors.name = 'El nombre es muy corto'
    }
    if (!values.lastname) {
        errors.lastname = 'Requerido'
    }
    return errors
}

function App() {

    const formik = useFormik({
        initialValues: {
            name: '',
            lastname: '',
            email: '',
        },
        validate,
        onSubmit: values => console.log(values)
    })

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <label> Nombre</label>
                <input
                    type="text" {...formik.getFieldProps('name')}
                />
                {formik.touched.name && formik.errors.name ? <div> {formik.errors.name}</div> : null}

                < label > Apellido</label>
                <input
                    name='lastname'
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastname} />
                {formik.touched.lastname && formik.errors.lastname ? <div> {formik.errors.lastname}</div> : null}

                <label> Correo</label>
                <input
                    name='email'
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email} />
                {formik.touched.email && formik.errors.email ? <div> {formik.errors.email}</div> : null}

                <button type='submit'>Enviar</button>



            </form >

        </>
    )
}

export default App


//<form onSubmit={formik.handleSubmit}> previene en evento
//onBlur={formik.handleBlur}   //para validar si el campo del formulario ha sido tocado por el usuario, y eso lo detecta onBlur
//formik ya tiene incorporado una funcion que se llama onBlur y handleBlur, se le agrega a los campos de input
//manejamos si el input ha sido tocado o no y agregamos {formik.touched.name}
//  {formik.touched.name && formik.errors.name ? <div> {formik.errors.name}</div> : null} //con esto, la validacion se activara solo cuando estemos en el campo