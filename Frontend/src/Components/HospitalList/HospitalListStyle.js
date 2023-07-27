import styled from "styled-components";

export const ListContainer = styled.div`
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

export const HospitalCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 130px;
  width: 30%;
  overflow: hidden;
  border: 1px solid #5902ec;
  border-radius: 4px;
  background-color: #ede4ff;
  padding: 4px;
`;

export const Name = styled.div``;
export const Address = styled.div``;

export const ButtonConntainer = styled.div`
  display: flex;
`;
