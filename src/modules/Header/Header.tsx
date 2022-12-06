import { FC } from "react";
import { HeaderBar } from "../../styles";
import { NavLink } from "react-router-dom";
// import { Route } from 'react-router'
const Header: FC = () => {
  return (
    <HeaderBar>
      <div className="logo">CharChuI</div>
      <NavLink to="home" className="link">
        Home page
      </NavLink>
      <NavLink to="pagelist" className="link">
        List page
      </NavLink>
      
    </HeaderBar>
  );
};

export default Header;
