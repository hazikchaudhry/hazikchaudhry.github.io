import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to ="/" className="w-10 h-10 rouded-lg big-white items-center
        justify-center flex font-bold shadow-md">
        <p className = "blue-gradient_text">MCH</p>
        </NavLink>
        <nav className= "flex text-lg gap-7 font font-medium">
            <NavLink to="/about" className={({ isActive}) => isActive ? 'text-blue-500' : 'text-black'}>  
            About  
            </NavLink>
            <NavLink to="/projects" className={({ isActive}) => isActive ? 'text-blue-500' : 'text-black'}>  
            Projects
            </NavLink>

            

        </nav>

    </header>
  )
}

export default Navbar