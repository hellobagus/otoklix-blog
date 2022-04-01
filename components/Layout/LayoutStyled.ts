import styled from 'styled-components';

export const Header = styled.header`
  padding: 0 100px 50px 100px;
  text-align: center;
  background-color: rgb(8 145 178);
  color: white;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const A = styled.a`
  margin-top: 10px;
  cursor: pointer;
  background: rgba(0, 0, 0, 0);
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  padding: 10px 20px 10px 20px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
  font-family: Helvetica Neue;

  &:hover {
    border: 1px solid rgba(255, 255, 255, 1);
    color: rgba(255, 255, 255, 1);;
  }
`;

export const H1 = styled.h1`
  font-family: Helvetica Neue;
`;

export const P = styled.p`
  font-family: Helvetica Neue;
`;

export const Main = styled.main`
  padding: 35px 85px;
`;
