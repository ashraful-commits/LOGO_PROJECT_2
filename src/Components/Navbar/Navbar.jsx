import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import logo from "../../../public/LOGO.png";
const Navbar = () => {
  return (
    <Container>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="search">
          <CiSearch />
          <input type="text" placeholder="Search" />
        </div>
        <div className="creator">
          <span>Creator</span>
          <button>Get App</button>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 79px;
  flex-shrink: 0;
  background: #fff;
  display: flex;
  justify-content: center;
  margin: 25px 0;
  .container {
    position: relative;
    width: 922px;
    border-radius: 40px;
    background: linear-gradient(0deg, #ebf2e3 73.91%, #fff 127.85%);
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 1fr 1fr 1fr;
    z-index: 1;
    &::before {
      content: "";
      position: absolute;
      width: 750px;
      height: 57px;
      flex-shrink: 0;
      border-radius: 40px;
      opacity: 0.25;
      background: #c7deab;
      filter: blur(13.5px);
      top: 30px;
      z-index: -1;
      left: 80px;
    }
    .logo {
      display: flex;
      margin-left: 82px;
      align-items: center;
      margin-bottom: 5px;
      img {
        width: 51px;
        height: 27px;
        object-fit: contain;
      }
    }
    .search {
      width: 329px;
      height: 50px;
      flex-shrink: 0;
      border-radius: 40px;
      background: #fff;
      display: flex;
      align-items: center;
      padding-left: 23px;
      gap: 4px;
      svg {
        font-size: 26px;
      }
      input {
        border: none;
        color: #3c3c3c;
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        padding-left: 2px;
        &:focus {
          outline: none;
        }
      }
    }
    .creator {
      display: flex;
      align-items: center;
      justify-content: end;
      margin-right: 15px;
      gap: 25px;
      button {
        color: #fff;
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        width: 133px;
        height: 50px;
        border: none;
        border-radius: 50px;
        flex-shrink: 0;
        line-height: normal;
        background-image: linear-gradient(
          168deg,
          #8fdd5d -2.74%,
          #71bb42 69.1%
        );
      }
      span {
        color: #3c3c3c;
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin-bottom: 10px;
        border-right: 1px solid gray;
        padding-right: 20px;
        padding-top: 3px;
      }
    }
  }
`;
export default Navbar;
