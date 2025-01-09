import { PlusCircle, Rocket } from "phosphor-react";
import * as S from "./styles";
import { useState } from "react";
import { AddedTasks } from "../AddedTasks";

export const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const [addTasks, setAddTasks] = useState<string[]>([]);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  const handleAddTasks = (event: React.FormEvent) => {
    event.preventDefault();

    if (inputValue.trim() !== "") {
      setAddTasks((prevTasks) => [...prevTasks, inputValue]);
    }
    setInputValue("");
  };

  const handleCompleteTask = (taskToComplete: string) => {
    setCompletedTasks((prev) => [...prev, taskToComplete]);
  };

  const handleRemoveTask = (taskToRemove: string) => {
    setAddTasks((prevTasks) =>
      prevTasks.filter((task) => task !== taskToRemove)
    );

    if (completedTasks.includes(taskToRemove)) {
      setCompletedTasks((prevCompleted) =>
        prevCompleted.filter((task) => task !== taskToRemove)
      );
    }
  };

  return (
    <>
      <S.Container>
        <S.ToDoContainer>
          <span style={{ marginTop: "10px", padding: "5px" }}>
            <Rocket size={35} />
          </span>
          <S.ToText>to</S.ToText>
          <S.DoText>do</S.DoText>
        </S.ToDoContainer>
        <form onSubmit={handleAddTasks}>
          <S.InputContainer>
            <S.Input
              type="text"
              placeholder="Add a task..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <S.Button type="submit">
              Add
              <span style={{ padding: "5px", display: "flex" }}>
                <PlusCircle />
              </span>
            </S.Button>
          </S.InputContainer>
        </form>
      </S.Container>
      <AddedTasks
        tasks={addTasks}
        completedTasks={completedTasks}
        onCompleteTask={handleCompleteTask}
        onRemoveTask={handleRemoveTask}
      />
    </>
  );
};
