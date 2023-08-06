import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  padding: 16px;
`;

export const AppointmentCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 130px;
  width: 30%;
  border: 1px solid #5902ec;
  border-radius: 4px;
  background-color: #ede4ff;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const HospitalName = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const DoctorName = styled.div`
  color: #555;
  margin-bottom: 8px;
`;

export const PatientName = styled.div`
  color: #777;
  margin-bottom: 8px;
`;

export const AppointmentDateAndTime = styled.div`
  color: #777;
  margin-bottom: 8px;
`;

export const Reshedular = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 28px;
`;

export const Picker = styled.div`
  margin-top: 16px;
`;

export const CancelButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: #ff4646;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #e60000;
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

