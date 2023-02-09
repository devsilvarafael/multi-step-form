import { StyledButton } from "./styles";
import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    props?: HTMLButtonElement
}
export const Button = ({ children, ...props }: ButtonProps) => {
    return (
        <StyledButton {...props}>
            {children}
        </StyledButton>
    )
}