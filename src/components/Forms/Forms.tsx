import { FormsContainer, PersonalInfoContainer, StepsContainer, } from "./styles";
import { PersonalInfo } from "../PersonalInfo/PersonalInfo";
import { Button } from "../Button/Button";

export const Forms = () => {
    return (
        <FormsContainer>
            <StepsContainer>

            </StepsContainer>
            <PersonalInfoContainer>
                <PersonalInfo />
                <Button>
                    Next Step
                </Button>
            </PersonalInfoContainer>
        </FormsContainer>
    )
}