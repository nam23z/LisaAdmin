import { styled } from "styled-components";
import { ReactComponent as Dashboard } from "../../assets/icons/layer group.svg";
import { ReactComponent as Products } from "../../assets/icons/grid.svg";
import { ReactComponent as Customers } from "../../assets/icons/users.svg";
import { ReactComponent as Orders } from "../../assets/icons/Order.svg";
import { ReactComponent as Shipments } from "../../assets/icons/shipping truck.svg";
import { ReactComponent as Transactions } from "../../assets/icons/credit card.svg";
import { ReactComponent as Settings } from "../../assets/icons/Setting.svg";
import { ReactComponent as Logout } from "../../assets/icons/Logout.svg";
import { NavLink } from "react-router-dom";

const StyledSideBar = styled.div`
  background-color: white;
  height: 100vh;
  padding: 32px;
  .light .toggle .ball {
    background-color: #caeae6;
    transform: translateX(-12px);
  }
  .dark .toggle .ball {
    background-color: #151d2a;
    transition: 0.3s;
    transform: translateX(12px);
  }
  .active {
    svg {
      stroke: #f30ee4;
      fill: #f30ee4;
      path {
        stroke: #f30ee4;
      }
    }
    color: #f30ee4;
  }
`;

const StyledNavItem = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  color: #7a797d;
  margin-bottom: 25px;
  a {
    display: flex;
    align-items: center;
    gap: 16px;
    text-decoration: unset;
    color: #7a797d;
  }
  .iconSideBar {
  }
`;

const NavItem = ({ text, path, children }) => {
  return (
    <StyledNavItem>
      <NavLink to={path} className={"iconSideBar"}>
        {children}
        <span>{text}</span>
      </NavLink>
    </StyledNavItem>
  );
};

const SideBar = () => {
  return (
    <StyledSideBar>
        <h1>Lisa Admin</h1>
      <NavItem text="Dashboard" path="/">
        <Dashboard></Dashboard>
      </NavItem>
      <NavItem text="Login" path="/login">
        <Products></Products>
      </NavItem>
      <NavItem text="Active Bids" path="/activeBids">
        <Customers></Customers>
      </NavItem>
      <NavItem text="My Portfolio" path="/a">
        <Orders></Orders>
      </NavItem>
      <NavItem text="Wallet" path="/b">
        <Shipments></Shipments>
      </NavItem>
      <NavItem text="Favourites" path="/c">
        <Transactions></Transactions>
      </NavItem>
      <NavItem text="History" path="/d">
        <Settings></Settings>
      </NavItem>
      <NavItem text="Settings" path="/e">
        <Logout></Logout>
      </NavItem>
    </StyledSideBar>
  );
};

export default SideBar;
