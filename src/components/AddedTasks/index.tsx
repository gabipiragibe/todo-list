import { ClipboardText } from "phosphor-react";
import * as S from "./styles";

interface AddedTasksProps {
  tasks?: string[];
}

export const AddedTasks = ({ tasks }: AddedTasksProps) => {
  return (
    <>
      <S.EmptyTaskContainer>
        <S.TaskInfoWrapper>
          <S.TaskTitle>Created tasks</S.TaskTitle>
          <S.CountTaskBullet>{tasks?.length}</S.CountTaskBullet>
        </S.TaskInfoWrapper>
        <S.TaskInfoWrapper>
          <S.CompletedTaskTitle>Concluded</S.CompletedTaskTitle>
          <S.CountTaskBullet>0</S.CountTaskBullet>
        </S.TaskInfoWrapper>
      </S.EmptyTaskContainer>
      <div>
        <S.NoTasksContainer>
          {tasks && tasks.length === 0 ? (
            <>
              <ClipboardText size={70} opacity={100} />
              <S.NoTasksMessage>
                You don't have any tasks registered yet
              </S.NoTasksMessage>
              <S.NoTasksDescription>
                Create tasks and organize your to-do items
              </S.NoTasksDescription>
            </>
          ) : (
            <ol>
              {tasks?.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ol>
          )}
        </S.NoTasksContainer>
      </div>
    </>
  );
};
