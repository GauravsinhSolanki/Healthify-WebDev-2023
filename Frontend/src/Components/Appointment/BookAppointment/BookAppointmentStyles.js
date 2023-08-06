import styled from "styled-components";

export const Main = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const Heading = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: center;
`;

const StyledSelect = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  max-width: 400px;
  width: 100%;
  /* Ensure the content takes the full width */

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }
`;

export const SelectDateAndTime = styled(StyledSelect)`
  margin-bottom: 20px;
`;

export const Button = styled.button`
  padding: 12px 24px;
  font-size: 18px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }
`;

export const SuccessMessage = styled.h2`
  color: green;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const ErrorMessage = styled.h2`
  color: red;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;
