import { PlusCircle, Rocket } from "phosphor-react";
import * as S from "./styles";

export const Home = () => {
  return (
    <S.Container>
      <S.ToDoContainer>
        <span style={{ marginTop: "0.5rem" }}>
          <Rocket size={35} />
        </span>
        <S.ToText>to</S.ToText>
        <S.DoText>do</S.DoText>
      </S.ToDoContainer>
      <form>
        <S.InputContainer>
          <S.Input type="text" placeholder="Add a task..." />
          <S.Button>
            Add{" "}
            <span>
              <PlusCircle />
            </span>
          </S.Button>
        </S.InputContainer>
      </form>
    </S.Container>
  );
};
