import { CheckCircle, ClipboardText, Trash } from "phosphor-react";
import * as S from "./styles";

interface AddedTasksProps {
  tasks?: string[];
  completedTasks: string[];
  onDeleteTask?: (task: string) => void;
  onCompleteTask: (task: string) => void;
  onRemoveTask: (task: string) => void;
}

export const AddedTasks = ({
  tasks,
  completedTasks,
  onRemoveTask,
  onCompleteTask,
}: AddedTasksProps) => {
  return (
    <>
      <S.EmptyTaskContainer>
        <S.TaskInfoWrapper>
          <S.TaskTitle>Created tasks</S.TaskTitle>
          <S.CountTaskBullet>{tasks?.length}</S.CountTaskBullet>
        </S.TaskInfoWrapper>
        <S.TaskInfoWrapper>
          <S.CompletedTaskTitle>Concluded</S.CompletedTaskTitle>
          <S.CountTaskBullet>{completedTasks.length}</S.CountTaskBullet>
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
                <li key={index}>
                  <CheckCircle
                    size={20}
                    onClick={() => onCompleteTask(task)}
                    style={{
                      cursor: "pointer",
                    }}
                  />
                  <span
                    style={{
                      textDecoration: completedTasks.includes(task)
                        ? "line-through"
                        : "none",
                    }}
                  >
                    {task}
                  </span>
                  <Trash
                    style={{
                      cursor: "pointer",
                    }}
                    size={20}
                    onClick={() => onRemoveTask(task)}
                  />
                </li>
              ))}
            </ol>
          )}
        </S.NoTasksContainer>
      </div>
    </>
  );
};
