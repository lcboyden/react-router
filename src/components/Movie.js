import React, {useState} from 'react'
import MovieForm from './MovieForm'
// import { Header, Table, Rating, Button, Icon, Segment} from 'semantic-ui-react'

// const RatingStar = () => (
//   <Rating icon='star' defaultRating={3} maxRating={5} />
// )

export default function Movie() {
  const [editing, setEditing] = useState(false)
  // state = { editing: false}

 const toggleEdit = () => setEditing(!this.state.editing)

  
    // return (
      
      // <Segment>

      // </Segment>
      
      // <>
      /* <MovieForm/> */
/* 
        <Table celled padded>
          <Table.Header>
            <Table.Row style={{width: "50px"}}>
              <Table.HeaderCell singleLine>Title</Table.HeaderCell>
              <Table.HeaderCell>Rating</Table.HeaderCell>
              <Table.HeaderCell>Comments</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell singeLine>
                <Header as='h2' textAlign='left'>
                  <p>{this.props.title}</p>
                </Header>
              </Table.Cell>
              <Table.Cell >
                <Rating icon='star' defaultRating={3} maxRating={5} />
                {/* <p>{this.props.RatingStar}</p> */
              /* </Table.Cell>
              <Table.Cell>
                <p>{this.props.comments}</p>
              </Table.Cell>
              <Table.Cell>
                <Button icon color="blue" onClick={this.toggleEdit}>
                  <Icon name="pencil" />
                </Button>
                <Button icon color="red">
                  <Icon name="trash" />
                </Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body> */
        /* </Table> */
        /* <div>
          <Button icon color="blue" onClick={this.toggleEdit}>
            <Icon name="pencil" />
          </Button>
          <Button icon color="red">
            <Icon name="trash" />
          </Button>
          <Button icon color="green">
            <Icon name="eye" />
          </Button>
        </div> */
//       </>
//     )
}