import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme["gray-700"]};
  width: 100vw; // Ocupa 100% da largura da tela (viewport)
  height: auto; // A altura será determinada automaticamente com base no conteúdo
  min-height: 15rem; // Define uma altura mínima, caso o conteúdo seja pequeno

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ToDoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ToText = styled.h1`
  font-size: 50px;
  font-weight: 900;
  color: ${(props) => props.theme["blue"]};
`;

export const DoText = styled.h1`
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
  top: 55px;
`;

export const Input = styled.input`
  color: #ffffff;
  width: 37vw;
  height: 2rem;
  padding: 10px 15px;
  font-size: 1.2rem;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme["gray-700"]};
  background-color: ${(props) => props.theme["gray-500"]};
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  font-size: 16px;
  background-color: ${(props) => props.theme["blue-dark"]};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: ${(props) => props.theme["blue"]};
  }
`;
