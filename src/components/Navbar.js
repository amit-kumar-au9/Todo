import '../css/navbar.css'
const Navbar = () => {
    return(
        <nav className="navbar navbar-dark bg-dark">
            <span className="navbar-brand text-white">Todo App</span>
            <div>
                <button className="btn btn-light mr-2" type="submit">SignUp</button>
                <button className="btn btn-light" type="submit">Login</button>
            </div>
        </nav>
    )
}
export default Navbar