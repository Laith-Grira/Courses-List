import React, {Component} from 'react';
import logo from './logo.svg';

import {Provider} from 'react-redux';
import store from './store';

import CoursesList from './components/CoursesList';
import AppNavBar from './components/AppNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemModal from './components/ItemModal';
import {Container} from 'reactstrap';



class App extends Component{
    render(){
        return ( 
            <Provider store={store}>
                <div className = "App" >
                    <AppNavBar />
                    <Container>
                        <ItemModal/>
                        <CoursesList />
                    </Container>
                </div>
            </Provider>
        );
    }
}

export default App; 