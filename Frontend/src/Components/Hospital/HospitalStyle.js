import styled from "styled-components";

export const Name = styled.div`
<<<<<<< HEAD
  margin-top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const Info = styled.div`
=======
  margin-top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight:bolder;
  font-size:larger;
  padding: 16px;
  `;
  
  export const Info = styled.div`
>>>>>>> 37bf82399b42c56052e768feb3df751163c75e4b
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const DoctorListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
<<<<<<< HEAD
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

export const DoctorCard = styled.div`
=======
  justify-content: center;
  align-items: flex-start;
  padding: 16px;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const DoctorCard = styled.div`
  flex: 1 1 300px;
>>>>>>> 37bf82399b42c56052e768feb3df751163c75e4b
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
<<<<<<< HEAD
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
=======
  min-height: 200px;
  overflow: hidden;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 768px) {
    flex: 1 1 100%;
  }
`;

export const DoctorName = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const HospitalName = styled.div`
  color: #555;
  margin-bottom: 8px;
`;

export const Designation = styled.div`
  color: #777;
  margin-bottom: 8px;
`;

export const ButtonContainer = styled.div`
  display: flex;
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
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }
`;
>>>>>>> 37bf82399b42c56052e768feb3df751163c75e4b
