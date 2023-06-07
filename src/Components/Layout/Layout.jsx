import SideBar from '../SideBar/SideBar';
import Header from '../Header/Header';
import { styled } from "styled-components";

const StyledLayout = styled.div`
    width: 1728px;
    margin: 0 auto;
    .clear{
        clear: both;
    }
    .sidebarP{
        float: left;
        width: 14%;
        /* display: inline-block; */
        position: fixed;
        .sidebar{
        }
    }
    .headerP{
        width: 86%;
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
            <div className="headerP">
                <Header className="header"/>
                {children}
            </div>
        </StyledLayout>
    )
}
export default Layout;