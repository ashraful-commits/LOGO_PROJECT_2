import Navbar from "../Navbar/Navbar";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <Navbar />
    </HeaderContainer>
  );
};
const HeaderContainer = styled.div`
  width: 99.2vw;
  display: flex;
  justify-content: center;
`;
export default Header;
