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
  height: 100vh;
  padding: 32px 50px 0 50px;
  .around{
    text-align: left;
  }
  h1{
    margin-bottom: 30%;
  }
  .active {
    color: #FF6F61;
  }
  .navA{
    width: 100%;
    height: 100%;
  }
  .navA:hover .iconSideBar{
    opacity: 1;
  }
  .navA:hover a{
    background-color: #ddd;
    color: #FF6F61;
    path{
      fill: #FF6F61;
    }
  }
`;
const StyledNavItem = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  color: #7a797d;
  a {
    width: 112%;
    padding: 16px 16px 16px 4px;
    display: flex;
    align-items: center;
    gap: 16px;
    text-decoration: unset;
    color: #7a797d;
  }
`;

const NavItem = ({ text, path, children }) => {
  return (
    <StyledNavItem className="navA">
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
      <div className="around">
        <h1>Lisa Admin</h1>
      <NavItem text="Dashboard" path="/">
        <Dashboard></Dashboard>
      </NavItem>
      <NavItem text="Products" path="/products">
        <Products></Products>
      </NavItem>
      <NavItem text="Customers" path="/customers">
        <Customers></Customers>
      </NavItem>
      <NavItem text="Orders" path="/orders">
        <Orders></Orders>
      </NavItem>
      <NavItem text="Shipments" path="/shipments">
        <Shipments></Shipments>
      </NavItem>
      <NavItem text="Transactions" path="/transactions">
        <Transactions></Transactions>
      </NavItem>
      <NavItem text="Settings" path="/settings">
        <Settings></Settings>
      </NavItem>
      <NavItem text="Logout" path="/logout">
        <Logout></Logout>
      </NavItem>
      </div>
    </StyledSideBar>
  );
};

export default SideBar;
