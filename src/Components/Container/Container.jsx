import { styled } from "styled-components";

const StyledContainer = styled.div`
    width: 1316px;
    margin: 0 47px;
`
const Container = ({children}) => {
    return(
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}
export default Container;