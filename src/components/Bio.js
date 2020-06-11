import React from 'react';
import { Table, Button, Icon } from 'semantic-ui-react'

class Bio extends React.Component{
    render(){
        const { info } = this.props;
            return(
                    <Table.Row>
                        <Table.Cell>{info.name}</Table.Cell>
                        <Table.Cell>{info.animal}</Table.Cell>
                        <Table.Cell>{info.place}</Table.Cell>
                        <Table.Cell>
                            <Button icon color="blue" onClick={this.toggleEdit}>
                                <Icon name="pencil" />
                            </Button>
                            <Button icon color="red">
                                <Icon name="trash" />
                            </Button>
                            <Button icon color="green">
                                <Icon name="eye" />
                            </Button>
                        </Table.Cell>
                    </Table.Row>
            )
    }
}

export default Bio