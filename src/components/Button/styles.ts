import styled from "styled-components";

export const StyledButton = styled.button`
  min-width: 125px;
  padding: 1rem;

  border: 0;
  border-radius: 10px;

  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  background-color: var(--purplish-blue);
  color: var(--white);

  :hover {
    background-color: var(--marine-blue);
  }
`