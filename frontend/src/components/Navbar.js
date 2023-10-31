import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <nav className='navbar'>
    <header>
      <div className="container">
        <Link to="">
        <h1> Home </h1>
        </Link>
        <Link to="/create">
          <h1>Add folder</h1>
        </Link>
      </div>
    </header>
    </nav>
  )
}

export default Navbar