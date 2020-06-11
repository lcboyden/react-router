import React from 'react';
import { Form, Button, Checkbox } from 'semantic-ui-react';

class AboutForm extends React.Component{

    state = {
        name: '',
        animal:'',
        place:'',
    }

    handleSubmit = (e) => {
        // e.preventDefault();
        this.props.add(this.state);
        this.setState({ 
            name:'', 
            animal:'', 
            place:'',
        })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value, });
      }

    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Full Name</label>
              <input 
                placeholder='Full Name' 
                name='name'
                value={this.state.place}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Favorite Animal</label>
              <input 
                placeholder='Favorite Animal'
                name='animal'
                value={this.state.place}
                onChange={this.handleChange}
            />
            </Form.Field>
            <Form.Field>
              <label>Favorite Place</label>
              <input 
                placeholder='Favorite Place'
                name='place'
                value={this.state.place}
                onChange={this.handleChange}
                />
            </Form.Field>
            <Form.Field>
              <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
          </Form>
        )
    }
}

export default AboutForm