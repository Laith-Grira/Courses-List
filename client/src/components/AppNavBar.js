import React, { Component } from 'react';
import {
    collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class AppNavbar extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (

            <
            div >
            <
            Navbar color = "dark"
            dark expand = "sm"
            className = "mb-5" >
            <
            Container >
            <
            NavbarBrand herf = "/" > Courses List < /NavbarBrand> <
            NavbarToggler onClick = { this.toggle }
            /> <
            collapse isOpen = { this.state.isOpen }
            navbar >
            <
            Nav className = "ml-auto"
            navbar >
            <
            NavItem >
            <
            NavLink href = "https://github.com/LaithGrira" > GitHub < /NavLink> <
            /NavItem> <
            /Nav> <
            /collapse> <
            /Container> <
            /Navbar> <
            /div>
        );
    }
}

export default AppNavbar;