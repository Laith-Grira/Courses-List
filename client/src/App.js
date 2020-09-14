import React from 'react';
import logo from './logo.svg';

import CoursesList from './components/CoursesList';
import AppNavBar from './components/AppNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    return ( <
        div className = "App" >
        <AppNavBar / >
        <CoursesList / >
        </div>
    );
}

export default App;