import styled from "styled-components";
import useHeaderNavigation from "../hooks/useHeaderNavigation";

const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: black;
  position: fixed;
  top: 0;
  z-index: 10;
`;

const HeaderLayout = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 850px) {
    justify-content: center;
    width: 100%;
    margin: 0;
  }
`;

const MenuLayout = styled.li`
  height: 100%;
  display: flex;
  gap: 15px;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 500px) {
    width: 100%;
    gap: 0px;
  }
`;

const Menu = styled.ul`
  font-size: 18px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  margin: 0 auto;
  @media screen and (max-width: 500px) {
    font-size: 15px;
    padding: 0px;
  }
`;

const Logo = styled.p`
  display: block;
  width: 100px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  letter-spacing: 1.9px;
  text-align: center;
  @media screen and (max-width: 610px) {
    display: none;
  }
`;

const Header = ({ scrollFunction, refs }) => {
  const menuList = ["Home", "About", "Skills", "Resume", "Projects"];
  const navigationRefs = {
    0: useHeaderNavigation(refs[0]),
    1: useHeaderNavigation(refs[1]),
    2: useHeaderNavigation(refs[2]),
    3: useHeaderNavigation(refs[3]),
    4: useHeaderNavigation(refs[4]),
    length: 5,
  };

  return (
    <Container>
      <HeaderLayout>
        <Logo>김정현</Logo>
        <MenuLayout>
          {menuList.map((menu, index) => (
            <Menu {...navigationRefs[index]} onClick={scrollFunction[index]}>
              {menu}
            </Menu>
          ))}
        </MenuLayout>
      </HeaderLayout>
    </Container>
  );
};

export default Header;
