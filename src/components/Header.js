import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem 
} from 'reactstrap';

export default class Header extends React.Component {
  state = {
      isOpen: false
    };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">{this.props.title}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><img alt="" className="profilePic" src={this.props.profilePic}/></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={this.props.authlink}>{this.props.link2}</NavLink>
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                {this.props.optionsDesc}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  {this.props.option1}
                  </DropdownItem>
                  <DropdownItem>
                  {this.props.option2}
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}