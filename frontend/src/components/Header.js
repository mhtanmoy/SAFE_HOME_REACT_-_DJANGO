import React from 'react'
import { Navbar,Nav,Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'

function Header() {
    const userLogin=useSelector(state=>state.userLogin)
    const { userInfo }=userLogin
    const dispatch = useDispatch()

    const LogoutHandler=()=>{
        dispatch(logout())
    }
    return (
            <header>
                <Navbar bg="dark" variand="dark" expand="lg" collapseOnSelect>
                    <Container>
                        <LinkContainer to='/'>
                        <Navbar.Brand >SAFE HOME</Navbar.Brand>
                        </LinkContainer>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <SearchBox/>
                        <Nav className="ml-auto">

                        <LinkContainer to='/cart'>
                        <Nav.Link ><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                        </LinkContainer>
                        {userInfo ? (
                            <NavDropdown title={userInfo.name} id='username'>
                                <LinkContainer to='/profile'>
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Item onClick={LogoutHandler}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        ): (
                            
                            <LinkContainer to='/login'>
                            <Nav.Link ><i className="fas fa-user"></i>Login</Nav.Link>
                            </LinkContainer>
                        
                        )}
                        
                        {userInfo && userInfo.isAdmin && (
                            <NavDropdown title='Admin' id='adminname'>
                                <LinkContainer to='/admin/userlist'>
                                    <NavDropdown.Item>Users</NavDropdown.Item>
                                </LinkContainer>

                                <LinkContainer to='/admin/productlist'>
                                    <NavDropdown.Item>Product</NavDropdown.Item>
                                </LinkContainer>

                                <LinkContainer to='/admin/orderlist'>
                                    <NavDropdown.Item>Order</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown> 
                            )}
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                    </Navbar>
            </header>

    )
}

export default Header