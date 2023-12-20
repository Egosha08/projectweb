import './Header.css'
import {Link} from "react-router-dom";
const Header = () => {
    return (
       <header className='main'>
           <div className='header'>
               <div>
                   <h2 className='app'>To Do App</h2>
               </div>
               <div>
                   <ul className='nav-bar'>
                       <Link to='/about' className='nav-list'>About App</Link>
                       <Link to='/work' className='nav-list'>Create tasks</Link>
                   </ul>
               </div>
           </div>

       </header>
    );
};

export default Header;
