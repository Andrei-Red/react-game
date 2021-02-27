import { NavLink } from "react-router-dom"

export const NavBar = () => {
  return (
    <nav class="">
      <div class="nav-wrapper container">
        <a href="#" class="">Logo</a>
        <ul id="nav-mobile" class="right">
          <li>
            <NavLink to="/main">Main</NavLink>
          </li>
          <li>
            <NavLink to="/settings">Settings</NavLink>
          </li>
          <li>
            <NavLink to="/statistic">Statistic</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}