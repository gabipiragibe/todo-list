import { PlusCircle, Rocket } from "phosphor-react";
import * as S from "./styles";

export const Header = () => {
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
        <form>
          <S.InputContainer>
            <S.Input type="text" placeholder="Add a task..." />
            <S.Button>
              Add{" "}
              <span style={{ padding: "5px", display: "flex" }}>
                <PlusCircle />
              </span>
            </S.Button>
          </S.InputContainer>
        </form>
      </S.Container>
    </>
  );
};
