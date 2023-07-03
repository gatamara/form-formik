import { Form, Formik, Field, ErrorMessage } from 'formik'
import './App.css'
import { TextInput } from './components/TextInput';
import { Checkbox } from './components/Checkbox';
import { Select } from './components/Select';
import { Radio } from './components/Radio';

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
  } else if (!validarEmail(values.email)) {
    errors.email = 'El correo es Invalido';
  }
  if (!values.radio) {
    errors.radio = 'Requerido'
  }


  return errors
}

function App() {

  return (
    <>
      <h1 className='title'> Formulario con Formik </h1>
      <Formik
        initialValues={{ name: '', lastname: '', email: '', accept: '', select: '', radio: "" }}
        validate={validate}
        onSubmit={values => console.log(values)}

      >
        <Form className='form' >

          <TextInput name='name' label='Nombre' />

          < TextInput name='lastname' label='Apellido' />

          <TextInput name='email' label='Correo' />

          <Checkbox name='accept' >Aceptar terminos y condiciones </Checkbox>

          <Select name='select' label='Tipo'>
            <option value=""> Selecione el tipo</option>
            <option value="A"> Tipo A</option>
            <option value="B"> Tipo B</option>
            <option value="C"> Tipo C</option>
          </Select>

          <Radio name='radio' value='radio1' label='Radio 1 ' />
          <Radio name='radio' value='radio2' label='Radio 2 ' />
          <Radio name='radio' value='radio3' label='Radio 3 ' />


          <button type='submit'>Enviar</button>

        </Form >


      </Formik>
    </>

  )
}

export default App


