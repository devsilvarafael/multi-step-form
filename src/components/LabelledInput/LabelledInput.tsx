import { Container, LabelContainer, StyledInput } from "./styles";
import { InputHTMLAttributes } from "react";

interface LabelledInputProps extends InputHTMLAttributes<HTMLInputElement> {
    id?: string;
    label?: string;
    name?: string;
    type?: "text" | "email" | "tel";
}

export const LabelledInput = ({ id, label, name, type, ...props }: LabelledInputProps) => {
    return (
        <Container>
            <LabelContainer>
                <label htmlFor={id}>
                    {label}
                </label>
            </LabelContainer>

            <StyledInput
                id={id}
                name={name}
                type={type}
                {...props}
            />
        </Container>
    )
}