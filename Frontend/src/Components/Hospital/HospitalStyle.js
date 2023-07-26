import styled from "styled-components";

export const Name = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const DoctorListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

export const DoctorCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 130px;
  width: 30%;
  overflow: hidden;
  border: 1px solid black;
  border-radius: 4px;
  padding: 4px;
`;

export const DoctorName = styled.div``;
export const HospitalName = styled.div``;
export const Designation = styled.div``;
export const ButtonConntainer = styled.div`
  display: flex;
`;
