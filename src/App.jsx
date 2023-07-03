import { Form, Formik, Field, ErrorMessage } from 'formik'
import './App.css'
import { TextInput } from './components/TextInput';

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
    errors.email = 'El correo es valido';
  } else {
    errors.email = 'El correo es Invalido';
    console.log('El correo es Invalido');
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

          <TextInput name='name' label='Nombre' />

          < TextInput name='lastname' label='Apellido' />

          <TextInput name='email' label='Correo' />

          <button type='submit'>Enviar</button>

        </Form >


      </Formik>
    </>

  )
}

export default App


