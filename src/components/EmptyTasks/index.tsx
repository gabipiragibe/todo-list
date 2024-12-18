import { ClipboardText } from "phosphor-react";
import * as S from "./styles";

export const EmptyTasks = () => {
  return (
    <>
      <S.EmptyTaskContainer>
        <S.TaskInfoWrapper>
          <S.TaskTitle>Created tasks</S.TaskTitle>
          <S.CountTaskBullet>0</S.CountTaskBullet>
        </S.TaskInfoWrapper>
        <S.TaskInfoWrapper>
          <S.CompletedTaskTitle>Concluded</S.CompletedTaskTitle>
          <S.CountTaskBullet>0</S.CountTaskBullet>
        </S.TaskInfoWrapper>
      </S.EmptyTaskContainer>
      <S.NoTasksContainer>
        <ClipboardText size={70} opacity={100} />
        <S.NoTasksMessage>
          You don't have any tasks registered yet
        </S.NoTasksMessage>
        <S.NoTasksDescription>
          Create tasks and organize your to-do items
        </S.NoTasksDescription>
      </S.NoTasksContainer>
    </>
  );
};
