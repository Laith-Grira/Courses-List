import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
// import uuid from 'uuid/v4';
import {v4 as uuidv4 } from 'uuid';
//const uuid = require('uuid');

class CoursesList extends Component{
    state = {
        items:[
            {id: uuidv4(), name: 'CSI'},
            {id: uuidv4(), name: 'SEG'},
            {id: uuidv4(), name: 'GNG'},
            {id: uuidv4(), name: 'MAT'}
        ]
    }

    render(){
        const { items } = this.state;
        return(
            <Container>
                <button 
                className="main-btn"
                style={{marginBottom: '2rem'}}
                onClick={() => {
                    const name = prompt('Enter Course');
                    if (name){
                        this.setState(state => ({
                            items: [...state.items, { id: uuidv4(), name}]
                        }));
                    }
                }
                }
                >
                Add Course
                </button>

                <ListGroup>
                    <TransitionGroup className="Courses-List">
                        {items.map(({id, name}) => (
                            <CSSTransition key = {id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button 
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick= {() => {
                                        this.setState(state => ({
                                            items: state.items.filter(item => item.id !== id)
                                        }));
                                    }}
                                    > &times;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ) )}
                    </TransitionGroup>
                </ListGroup>    

            </Container>
        );
    }
}


export default CoursesList;