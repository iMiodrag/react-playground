import React from 'react';
import Person from './Person';

class People extends React.Component {
    state = {
        people : null,
        loading : true
    }

    constructor(props) {
        super(props);
        
        fetch("https://randomuser.me/api/?results=10").then(data => data.json()).then(jsonData => {
            this.setState({people : jsonData, loading : false});
        });
    }

    render() {

        if(this.state.loading === true) {
            return  <div style={{textAlign: 'center'}}>Loading...</div>;
        }

        return (
            this.state.people.results.map((value, index) => {
                console.log(value);
                return <Person item={value}/>
            
            })
        );
    }
}

export default People;