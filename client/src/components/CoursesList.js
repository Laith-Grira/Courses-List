import react, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class CoursesList extends Component {
    state = {
        items: [
            { id: uuid(), name: 'CSI' },
            { id: uuid(), name: 'SEG' },
            { id: uuid(), name: 'GNG' },
            { id: uuid(), name: 'MAT' }
        ]
    }

    render() {
        const { items } = this.state;
        return ( <
            Container >
            <
            button color = "dark"
            style = {
                { marginBottom: '2rem' } }
            onClick = {
                () => {
                    const name = prompt('Enter Course');
                    if (name) {
                        this.setState(state => ({
                            items: [...state.items, { id: uuid(), name }]
                        }));
                    }
                }
            } >
            Add Course < /button> <
            /Container>
        );
    }
}


export default CoursesList;