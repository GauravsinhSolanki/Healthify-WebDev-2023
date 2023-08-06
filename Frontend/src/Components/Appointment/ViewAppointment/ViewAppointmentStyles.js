import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  flex-direction: row;
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
  border: 1px solid #91c8e4;
  border-radius: 4px;
  background-color: #f6f4eb;
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
  margin-top: 28px;
`;

export const Picker = styled.div`
  margin-top: 16px;
`;

// export const SelectDateAndTime = styled.div`
//   padding: 12px;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   background-color: #f5f5f5;
//   border-radius: 8px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

//   &:hover {
//     transform: scale(1.05);
//     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
//   }
// `;
