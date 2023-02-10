import styled from "styled-components";

export const Container = styled.div`
  
`

export const LabelContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 0.9rem;
  
  margin-bottom: 0.3rem;
  
  color: var(--marine-blue);
`

export const StyledInput = styled.input`
  max-width: 26.12rem;
  width: 100%;
  height: 1rem;
  padding: 1rem;
  
  font-size: 1rem;
  color: var(--marine-blue);
  font-weight: bold;

  border-radius: 10px;
  border: 1px solid var(--light-gray);

  :hover {
    border: 1px solid var(--marine-blue);
    cursor: pointer;
  }

  :focus {
    outline: 0;
    border: 1px solid var(--marine-blue);
  }
`