import styled from 'styled-components';

export const Article = styled.article`
  flex: 30%;
  background-color: white;
  padding: 10px;
  margin: 10px;
  border-radius: 0.375rem;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(17 94 89);
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  margin-top: 10px;
  cursor: pointer;
  outline: none;
  background: rgba(0, 0, 0, 0);
  border-radius: 25px;
  border: 1px solid #ff1500;
  padding: 10px 20px 10px 20px;
  color: #ff1500;
  font-size: 12px;
  font-family: Helvetica Neue;

  &:hover {
    background: #ff1500;
    color: #ffffff;
  }
`;

export const A = styled.a`
  padding: 0;
  text-decoration: none;
  padding: 2px 15px;
  cursor: pointer;
`;

export const H2 = styled.h2`
  font-family: Helvetica Neue;
`;

export const P = styled.p`
  font-family: Helvetica Neue;
`;
