import { NavLink } from "react-router-dom"

export const Sidebar = () => {
  return (
    <div>
      <div>
        <NavLink to="/main">Main</NavLink>
      </div>
      <div>
        <NavLink to="/settings">Settings</NavLink>
      </div>
      <div>
        <NavLink to="/statistic">Statistic</NavLink>
      </div>
    </div>
  )
}