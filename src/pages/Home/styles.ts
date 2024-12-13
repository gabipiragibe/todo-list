import styled from "styled-components";

export const Container = styled.main`
  background: ${(props) => props.theme["gray-700"]};
  width: 1440px;
  height: 200px;

  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ToDoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ToText = styled.text`
  font-size: 50px;
  font-weight: 900;
  color: ${(props) => props.theme["blue"]};
`;

export const DoText = styled.text`
  font-size: 50px;
  font-weight: 900;
  color: ${(props) => props.theme["purple-dark"]};
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 4rem;
`;

export const Input = styled.input`
  width: 40%;
  height: 30px;
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme["gray-700"]};

  background-color: ${(props) => props.theme["gray-500"]};
`;

export const Button = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  background-color: ${(props) => props.theme["blue-dark"]};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px; /* Espaço entre o input e o botão */

  &:hover {
    background-color: ${(props) => props.theme["blue"]};
  }
`;
