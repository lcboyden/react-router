import React from 'react';
import { Table, Button, } from 'semantic-ui-react'
import Bio from './Bio'
import AboutForm from './AboutForm'

class About extends React.Component{
    state = {
        about: [
            {id: 1, name: 'Max Sultan', animal: 'bird', place:'Georgia' },
            {id: 2, name: 'Lindsay Boyden', animal: 'cat', place:'England' },
            {id: 3, name: 'Dre Leveille', animal: 'dog', place:'Utah' }
        ],
    }

    getId = () => {
        return Math.floor(Math.random() * 10000000000000000000)
    }

    addPerson = (personData) => {
        const { about, } = this.state;
        const person = { id: this.getId(), ...personData, };
        this.setState({ person: [...about, person], });
      };

    render(){
        const { about } = this.state
        return(
            <>
            <h1>About Us</h1>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Favorite Animal</Table.HeaderCell>
                        <Table.HeaderCell>Favorite Place</Table.HeaderCell>
                        <Table.HeaderCell>Options</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {about.map(p => ( 
                        <Bio key={p.id} info={p}/>
                        )
                    )}
                </Table.Body>
            </Table>
            <AboutForm add={this.addPerson}/>
            </>
        )
    }
}
export default About;