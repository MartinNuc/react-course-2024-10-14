// navbar.tsx
import { Link } from "react-router-dom"

export const NavBar = () => {
  return <ul>
    <Link to="/">Home</Link>
    <Link to="/categories">Joke categories</Link>
  </ul>
}