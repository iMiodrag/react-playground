import React from 'react';

class Person extends React.Component {
    render(props) {
        return (
            <ul>
                <li>
                    <input type="checkbox" onClick={this.checkItem()} id={"c-"+this.props.item.id.value}/>
                    <label htmlFor={"c-"+this.props.item.id.value}>{this.props.item.name.first} | get in touch  <a href={"mailto:"+this.props.item.email}>Contact</a></label>
                </li>
            </ul>
        );
    }

    checkItem = () => {
        console.log('I am clicked');
    }
}

export default Person;