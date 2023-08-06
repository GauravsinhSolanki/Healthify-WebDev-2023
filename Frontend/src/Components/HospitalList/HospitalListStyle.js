import styled from "styled-components";

export const ListContainer = styled.div`
  margin-top: 13px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  align-items: stretch; /* Align items to stretch to make cards have the same height */
  padding: 16px;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const HospitalCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%; /* Set the height to 100% to ensure all cards have the same height */
  width: 300px; /* Set a fixed width for consistent size */
  overflow: hidden;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9; /* Light gray background */
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const CardContent = styled.div`
  flex-grow: 1;
`;

export const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #000;
`;

export const Address = styled.div`
  color: #666;
  margin-bottom: 8px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #4682a9;
  }

  &:focus {
    outline: none;
  }
`;
