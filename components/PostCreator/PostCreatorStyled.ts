import styled from 'styled-components';

export const Section = styled.section`
  text-align: center;
`;

export const Form = styled.div`
  width: 70%;
  height: 70%;
  margin: 0 auto;
`;

export const P = styled.p`
  color: #ff1500;
  font-size: 35px;
  font-family: Helvetica Neue;
`;

export const H3 = styled.h3`
  margin: 0;
  padding: 15px 0;
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
  height: 300px;
  border: 1px solid black;
  border-radius: 25px;
  outline: none;
  padding: 5px 25px;
  font-family: Helvetica Neue;
`;

export const Button = styled.button`
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
