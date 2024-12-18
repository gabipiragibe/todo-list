import styled from "styled-components";

export const EmptyTaskContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  top: 64px;
`;

export const TaskInfoWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
`;

export const TaskTitle = styled.h1`
  color: ${(props) => props.theme["blue"]};
  font-size: 14px;
`;

export const CompletedTaskTitle = styled.h1`
  color: ${(props) => props.theme["purple"]};
  font-size: 14px;
`;

export const CountTaskBullet = styled.span`
  width: 25px;
  height: 25px;
  color: white;
  background-color: ${(props) => props.theme["gray-400"]};
  border-radius: 100%;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Divider = styled.div``;

export const NoTasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 90px;
`;

export const NoTasksMessage = styled.h1`
  font-size: 16px;
  font-weight: bold;
`;

export const NoTasksDescription = styled.h1`
  font-size: 16px;
  font-weight: regular;
`;
