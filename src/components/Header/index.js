import { Link } from "react-router-dom"
import classes from './index.module.css'

const Header = () => {
  return (
    <nav className={classes.nav}>
      <Link to={'/'} className={classes.link}>Home</Link>
      <Link to={'/test'} className={classes.link}>Test</Link>
      <Link to={'/donut'} className={classes.link}>Donut</Link>
      <Link to={'/spotlight'} className={classes.link}>Spotlight</Link>
      <Link to={'/ligthing'} className={classes.link}>Ligthing</Link>
      <Link to={'/physic'} className={classes.link}>Physic</Link>
    </nav>
  )
}


export default Header