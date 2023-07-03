import { Form, Formik, Field, ErrorMessage } from 'formik'
import './App.css'

const validarEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email)
}

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
  if (!values.email) {
    errors.email = 'Requerido'
  } else if (validarEmail(values.email)) {
    console.log("El correo electrónico es válido");
  } else {
    console.log("El correo electrónico no es válido");
  }
  return errors
}

function App() {

  return (
    <>
      <h1 className='title'> Formulario con Formik </h1>
      <Formik
        initialValues={{ name: '', lastname: '', email: '' }}
        validate={validate}
        onSubmit={values => console.log(values)}

      >
        <Form className='form' >
          <label> Nombre</label>
          <Field type="text" name='name' className='input' />
          <ErrorMessage name='name' />

          < label > Apellido</label>
          <Field type="text" name='lastname' className='input' />
          <ErrorMessage name='lastname' />

          <label> Correo</label>
          <Field type="text" name='email' className='input' />
          <ErrorMessage name='email' />

          {/* < label > TextArea</label>
        <Field type="text" as='textarea' name='lastname' />
        <ErrorMessage name='lastname' /> */}

          <button type='submit'>Enviar</button>

        </Form >


      </Formik>
    </>

  )
}

export default App


