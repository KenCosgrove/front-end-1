import React from 'react'
import { Button, Form, FormGroup } from 'reactstrap';
import styled from 'styled-components'
  

//stlyes
const Styleddiv = styled.div`
   
    width: 30%;
    margin: 0 auto;
   
   .form-inputs {
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       color: white;
       font-weight:bold;
       text-shadow:1px 1px black;
       min-height: 80vh;
   }
   input, input[placeholder] {
    text-align: center;
}
   h2 {
       text-align: center;
       color: white;
       text-shadow: 2px 1px black;
       margin-bottom: 1.5rem;
   }
  
`

const LoginForm = (props) => {

    const {values, submit, update, inputChange, /* errors */} = props
   
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }

    const onInputChange = evt => {
        const {name, value} = evt.target
        inputChange(name, value)
        update(name, value)
      }

    return (
        <Styleddiv>
       <Form class="loginStyles" onSubmit={onSubmit}>
          

          {/*   <div className='errors'>
              <div>{errors.username}</div>
              <div>{errors.password}</div>
            </div> */}

            <div className='form-inputs'>
            <h2>Login</h2>
            <FormGroup>
                    <input
                        value={values.username}
                        onChange={onInputChange}
                        name="username"
                        type="text"
                        placeholder="Username"
                    />
               </FormGroup>
               <FormGroup>
                    <input
                        value={values.password}
                        onChange={onInputChange}
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                </FormGroup>
                <Button  color="primary"   > Login </Button>
            </div>
       </Form>
       </Styleddiv>
    )
}

export default LoginForm
