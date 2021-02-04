import {Link } from "react-router-dom";
import "shards-ui/dist/css/shards.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {
  Navbar,
//   NavItem,
  NavLink,
} from "shards-react";
import './Nav.css';



const Navigation = () => {
   
    return(
        <Navbar className="navbar">
                <NavLink>
                    <Link className="link" to="search">
                        Search
                    </Link>
                </NavLink>
                <NavLink>
                    <Link className="link" to="saved">
                        Saved
                    </Link>
                </NavLink>           
        </Navbar>
    )
}

export default Navigation;