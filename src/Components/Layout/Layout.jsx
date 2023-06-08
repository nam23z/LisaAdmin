import SideBar from '../SideBar/SideBar';
import Header from '../Header/Header';
import { styled } from "styled-components";
import Container from '../Container/Container';
const StyledLayout = styled.div`
    width: 1728px;
    margin: 0 auto;
    .clear{
        clear: both;
    }
    .sidebarP{
        float: left;
        width: 16.5%;
        position: fixed;
        .sidebar{
        }
    }
    .RightSide{
        background-color: #E5E5E5;
        width: 82%;
        float: right;
        .header{
        }
    }
`;

const Layout = ({children}) => {
    return(
        <StyledLayout>
            <div className="sidebarP">
            <SideBar className="sidebar"/>
            </div>
            <div className="RightSide">
                <Container>
                    <Header className="header"/>
                    {children}
                </Container>
            </div>
        </StyledLayout>
    )
}
export default Layout;