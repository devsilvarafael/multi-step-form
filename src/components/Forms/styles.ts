import styled from "styled-components";
export const FormsContainer = styled.main`
  display: flex;
  align-items: center;
  
  min-width: 1440px;
  min-height: 70vh; 
  border-radius: 10px;
  
  padding: 1.5rem;
  
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: var(--white);
`

export const StepsContainer = styled.aside`
  background: url("/images/backgrounds/bg-sidebar-desktop.svg") no-repeat center;
  background-size: cover;
  
  border-radius: 10px;
  padding: 2rem;
  min-height: 700px;
  color: var(--white);
  width: 350px;
`

export const PersonalInfoContainer = styled.form`
  max-width: 600px;
  height: 100%;
  margin-left: 8rem;
`