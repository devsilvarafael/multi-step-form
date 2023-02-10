import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { PersonalInfo } from "../components/PersonalInfo/PersonalInfo";
import userEvent from "@testing-library/user-event";
import { LabelledInput } from "../components/LabelledInput/LabelledInput";


describe('LabelledInput component test', function () {
    test('Should render an input', function () {
        render(<LabelledInput name={"name"} label={"Name"} />);

        expect(screen.getByLabelText('Name')).toBeInTheDocument();
    })


    test('Should have a label', function () {
        render(<LabelledInput label={"Testing"} name={"testing"} />);

        expect(screen.getByLabelText('Testing')).toBeInTheDocument();
    })

    test('Should input have a valid text type', function () {
        render(<LabelledInput type={"text"} label={"Name"} name={"name"} />);

        expect(screen.getByLabelText('Name')).toHaveAttribute('type', 'text')
    })

    test('Should input have a valid email type', function () {
        render(<LabelledInput type={"email"} label={"Test"} name={"testing"}/>);

        expect(screen.getByLabelText('Test')).toHaveAttribute('type', 'email')
    })
});