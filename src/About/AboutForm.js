import React, {useState} from 'react';

const AboutForm = () => {
const [name, setName] = useState('');
const [animal, setAnimal] = useState('');
const [place, setPlace] = useState('')

   const  handleSubmit = (e) => {
        e.preventDefault();
        this.props.add(this.state);
        setName('');
        setAnimal('');
        setPlace('');
    }

    // const handleChange = (e) => {
    //     setName( [e.target.name]: e.target.value, );
    //   }

        return(
            <form onSubmit={handleSubmit}>
              <label>Full Name</label>
              <input 
                placeholder='Full Name' 
                name='name'
                value={this.state.place}
                // onChange={handleChange}
              />
              <label>Favorite Animal</label>
              <input 
                placeholder='Favorite Animal'
                name='animal'
                value={this.state.place}
                // onChange={handleChange}
            />
              <label>Favorite Place</label>
              <input 
                placeholder='Favorite Place'
                name='place'
                value={this.state.place}
                // onChange={handleChange}
                />
            <button type='submit'>Submit</button>
          </form>
        )
}

export default AboutForm