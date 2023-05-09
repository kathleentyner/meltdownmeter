import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
     
        <ul className="navbar">
            <li className="navbar_item active">
                <Link className="navbar_link " to="/Home">Home</Link>                        
            </li> 

            <li className="navbar_item">
                <Link className="navbar_link" to="/reaction">Daily Meltdown Report</Link>                          
            </li> 
        
            <li className="navbar_item">
                <Link className="navbar_link" to="/trends">Trends</Link>                          
            </li> 
            <li className="navbar_item">
            <Link className="navbar_link" to="/history">History</Link>                          
            </li>
            <li className="navbar__logout">
                <Link className="navbar__logout" to="" onClick={() => {
                    localStorage.removeItem("meltdown_user")
                    navigate("/", {replace: true})
                }}>Logout</Link>
            </li>
        </ul>
    )
            }