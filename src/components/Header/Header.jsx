import {useState, useEffect} from 'react';
import './Header.css';


function Header({children}){
   
    return ( <header class="header">
        {children}
        <h1>Library</h1>
    <nav class="menu">
        <a href="#">Add Book</a>
        
    </nav>
</header>

            
    )
}
export default Header;