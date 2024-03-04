import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/about' activeStyle>
                        About Us
                    </NavLink>
                    <NavLink to='/bookings' activeStyle>
                        Bookings
                    </NavLink>
                    <NavLink to='/sounds-of-swing-news' activeStyle>
                        Sounds if Swing NEWS
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;