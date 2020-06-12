import React, {useState} from 'react';
import Bio from './Bio';
import AboutForm from './AboutForm';

const About = () => {
   
      const [about, setAbout] = useState({ about: [
            {id: 1, name: 'Max Sultan', animal: 'bird', place:'Georgia' },
            {id: 2, name: 'Lindsay Boyden', animal: 'cat', place:'England' },
            {id: 3, name: 'Dre Leveille', animal: 'dog', place:'Utah' }
        ]
    })
    

    function getId() {
        return Math.floor(Math.random() * 10000000000000000000)
    }

    function addPerson(personData) {
        const { about, } = this.state;
        const person = { id: this.getId(), ...personData, };
        this.setState({ person: [...about, person], });
    };

        return(
            <>
            <h1>About Us</h1>
            <table celled>
                <th>
                    <tr>
                        <th><td>Name</td></th>
                        <th>Favorite Animal</th>
                        <th>Favorite Place</th>
                        <th>Options</th>
                    </tr>
                </th>
                <tb>
                    {about.map(p => ( 
                        <Bio key={p.id} info={p}/>
                        )
                    )}
                </tb>
            </table>
            <AboutForm add={this.addPerson}/>
            </>
        )
}
export default About;