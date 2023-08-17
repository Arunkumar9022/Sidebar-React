import { useState } from 'react';
import '../pages/Sidebar.css';
function SideNavbar()
{
    const[shownavbar,setShowNavbar]=useState(false);
    const togglenav=()=>{
        setShowNavbar(!shownavbar);
    }
    return(
        <div>
            <button onClick={togglenav}>ToggleNavbar</button>
            <nav className={`side-navbar ${shownavbar ? 'show' : 'hide'}`}>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Career</li>
                    <li>Product Details</li>
                    <li>Contact us</li>
                    <li>Feature Products</li>
                </ul>
            </nav>
        </div>

    )
}
export default SideNavbar;