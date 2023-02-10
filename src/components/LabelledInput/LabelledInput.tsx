import { Container, LabelContainer, StyledInput } from "./styles";
import { InputHTMLAttributes } from "react";

interface LabelledInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    name?: string;
    type?: "text" | "email" | "tel";
}

export const LabelledInput = ({ label, name, type, ...props }: LabelledInputProps) => {
    return (
        <Container>
            <LabelContainer>
                <label htmlFor={name}>
                    {label}
                </label>
            </LabelContainer>

            <StyledInput
                id={name}
                name={name}
                type={type}
                {...props}
            />
        </Container>
    )
}