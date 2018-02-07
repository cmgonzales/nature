import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';



function submit(){
  console.log('test');
}

class Bottom extends React.Component {
    
       render() {
          return (
            <div className ='bottom'>
            
            <h3>Get daily quote</h3>
             
               
            <Form className = 'form'>
            <FormGroup className = 'field'>
            
              <Input type="email" name="email" id="exampleEmail" placeholder="Please enter email" />
            </FormGroup>
            </Form>
            <Button color="primary" onClick = {submit}>Submit</Button>{' '}
             </div>
          );
       }
    }
    
    export default Bottom;

