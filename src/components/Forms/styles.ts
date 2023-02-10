import styled from "styled-components";
export const FormsContainer = styled.main`
  display: flex;
  
  min-width: 58.75rem;
  min-height: 37.5rem;
  border-radius: 0.62rem;
  padding: 1rem;
  
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: var(--white);
`

export const StepsContainer = styled.aside`
  background: url("/images/backgrounds/bg-sidebar-desktop.svg") no-repeat center;
  background-size: cover;
  
  border-radius: 0.62rem;
  padding: 2rem;
  min-height: 31.5rem;
  color: var(--white);
  min-width: 13.2rem;
  margin-right: 6.25rem;
`

export const PersonalInfoContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  
  max-width: 28.12rem;
  margin-top: -2rem;
`