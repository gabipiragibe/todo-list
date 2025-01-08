import { PlusCircle, Rocket } from "phosphor-react";
import * as S from "./styles";
import { useState } from "react";
import { AddedTasks } from "../AddedTasks";

export const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const [addTasks, setAddTasks] = useState<string[]>([]);
  const handleAddTasks = (event: React.FormEvent) => {
    event.preventDefault();

    if (inputValue.trim() !== "") {
      setAddTasks((prevTasks) => {
        const newTasks = [...prevTasks, inputValue];
        return newTasks;
      });
    }
    setInputValue("");
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
      <AddedTasks tasks={addTasks || []} />
    </>
  );
};
