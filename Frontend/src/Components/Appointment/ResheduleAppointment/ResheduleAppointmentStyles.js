import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
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
  padding: 4px;
`;

export const HospitalName = styled.div``;
export const DoctorName = styled.div``;
export const PatientName = styled.div``;
export const AppointmentDateAndTime = styled.div``;

export const Reshedular = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 28px;
`;

export const Picker = styled.div`
  margin-top: 16px;
`;

export const SelectDateAndTime = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
