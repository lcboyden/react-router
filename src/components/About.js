import React from 'react';

class About extends React.Component{
    state = {
        about: [],
    }

    getData = () => {
        fetch('http://dummy.restapiexample.com/api/v1/employees')
        .then(response => console.log(response))
        .catch (error => console.log(error))
    }

    render(){
        return(
            <>
            <h1>About Us</h1>

            </>
        )
    }
}
export default About;