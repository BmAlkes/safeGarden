import { styled } from "styled-components";

export const FormContainer = styled.form`
  h2 {
    font-size: 2rem;
    padding: 1rem 0;
  }
  div {
    margin: 10px 0;
    select {
      display: flex;
      gap: 20px;
      width: 200px;
      border: none;
      height: 28px;
      border-radius: 5px;
    }
  }
  .buttonContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    div {
      margin: 0 auto;
      padding: 1rem;
    }
    .terms {
      cursor: pointer;
      font-size: 1.2rem;
      color: var(--color-brand--2);
    }
  }
`;
export const LoginButton = styled.button`
  background-color: var(--color-brand--2);
  color: var(--color-dark--0);
  padding: 0.8rem 2rem;
  border-radius: 7px;
  font-size: 1.5rem;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  border: none;
  cursor: pointer;
  min-width: 200px;
  &:hover {
    background-color: var(--color-brand--3);
  }
`;
