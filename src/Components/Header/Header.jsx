import Container from "../Container/Container";
import { styled } from "styled-components";
import Input from "../Input/Input";
import SearchIcon from "../../assets/icons/Search.svg";
import MenuTH from "../../assets/icons/Menu.svg";
import IconNoti from "../../assets/icons/bell.svg";
import MyAvt from "../../assets/avt/avt.svg";

const StyledHeader = styled.div`
  
  background-color: #E5E5E5;
  z-index: 99;
  padding: 32px 32px 20px 32px;
  width: 95%;
  .topHeader{
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  .RightHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 16%;
  }
  .menuTH{
    cursor: pointer;
  }
  .notification {
    cursor: pointer;
    padding: 15px 16px 13px;
    border-radius: 50%;
    margin-bottom: 4px;
  }
  .notification img {
    display: inline-block;
  }
  .avtar {
    cursor: pointer;
    text-align: center;
  }
`;

const Header = () => {
  return (
        <StyledHeader>
      <Container>
          <div className="topHeader">
          <h1>Overview</h1>
          <Input
            iconLeft={SearchIcon}
            width={"562px"}
            height={"55px"}
            padding={"2px"}
            bgColor={"white"}
            widthIpIp={"80%"}
            widthIconIp={"6%"}
            marginIcon={"0 0 0 15px"}
            content={"Search..."}
            borderRadius={"10px"}
          />
          <div className="RightHeader">
            <div className="menuTH">
            <img src={MenuTH} alt="notification" />
            </div>
            <div className="notification">
              <img src={IconNoti} alt="notification" />
            </div>
            <div className="avtar">
              <img src={MyAvt} alt="myavt" />
            </div>
          </div>
    </div>
      </Container>
        </StyledHeader>
  );
};

export default Header;