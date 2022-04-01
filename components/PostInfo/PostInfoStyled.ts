import styled from 'styled-components';

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  background: radial-gradient(#191D1E, #0B0D0D);
`;

export const A = styled.a`
  margin: 10px 0 10px 100px;
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
    color: rgba(255, 255, 255, 1);
  }
`;

export const Section = styled.section`
  padding: 35px 90px;
`;

export const Article = styled.article`
  background-color: white;
  padding: 10px;
  margin: 10px;
  box-shadow: 0 0 10px hsla(0, 0%, 47.8%, 0.5);
`;

export const H1 = styled.h1`
  font-family: Helvetica Neue;
`;

export const Input = styled.input`
  width: 50%;
  border: 1px solid black;
  border-radius: 25px;
  outline: none;
  padding: 1px 15px;
  font-family: Helvetica Neue;
`;

export const Textarea = styled.textarea`
  width: 70%;
  height: 150px;
  border: 1px solid black;
  border-radius: 25px;
  outline: none;
  padding: 5px 25px;
  font-family: Helvetica Neue;
`;

export const ButtonSend = styled.button`
  margin-top: 10px;
  cursor: pointer;
  outline: none;
  background: rgba(0, 0, 0, 0);
  border-radius: 25px;
  border: 1px solid #04e625;
  padding: 10px 20px 10px 20px;
  color: #04e625;
  font-size: 15px;
  font-family: Helvetica Neue;

  &:hover {
    background: #04e625;
    color: #ffffff;
  }
`;

export const P = styled.p`
  font-family: Helvetica Neue;
`;

export const ButtonUpdate = styled.button`
  margin: 0 0 0 10px;
  cursor: pointer;
  outline: none;
  background: rgba(0, 0, 0, 0);
  border-radius: 25px;
  border: 1px solid #106CD6;
  padding: 10px 20px 10px 20px;
  color: #106CD6;
  font-size: 12px;
  font-family: Helvetica Neue;

  &:hover {
    background: #106CD6;
    color: white;
  }
`;

export const DivUpdate = styled.div`
  text-align: center;
`;

export const H3 = styled.h3`
  font-family: Helvetica Neue;
`;

export const CommentsArticle = styled.article`
  background-color: white;
  padding: 10px;
  margin: 10px;
  box-shadow: 0 0 10px hsla(0, 0%, 47.8%, 0.5);
`;

export const DivComments = styled.div`
  margin-left: 10px;
`;

export const H2 = styled.h2`
  font-family: Helvetica Neue;
`;
