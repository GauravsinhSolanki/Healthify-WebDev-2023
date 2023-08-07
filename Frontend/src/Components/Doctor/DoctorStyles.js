import styled from "styled-components";

export const Main = styled.div`
  margin-top: 0;
`;

export const TabsContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #f6f4eb;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Tab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #749bc2;
    color: #fff;
  }

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;
