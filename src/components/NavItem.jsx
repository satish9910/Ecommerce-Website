import React from 'react'
import { Link } from 'react-router-dom'


const NavItem = ({to , label} ) => {
  return (
    <div>
     <Link to={to} className="mr-5 hover:text-red-600">{label}</Link>
      
    </div>
  )
}

export default NavItem
