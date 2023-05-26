import styled from '@emotion/styled';

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 270px;
  height: auto;
`;

export const Button = styled.button`
  width: 65px;
  height: 30px;
  background-color: transparent;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: aqua;
  }
`;
