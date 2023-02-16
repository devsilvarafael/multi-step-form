import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { LabelledInput } from "../components/LabelledInput/LabelledInput";


describe('LabelledInput component test', function () {
    test('Should render an input', function () {
        render(<LabelledInput id={"personal-info-name"} name={"name"} label={"Name"} />);

        expect(screen.getByLabelText('Name')).toBeInTheDocument();
    })


    test('Should have a label', function () {
        render(<LabelledInput id={"personal-info-testing"} label={"Testing"} name={"testing"} />);

        expect(screen.getByLabelText('Testing')).toBeInTheDocument();
    })

    test('Should input have a valid text type', function () {
        render(<LabelledInput id={"personal-info-name"} type={"text"} label={"Name"} name={"name"} />);

        expect(screen.getByLabelText('Name')).toHaveAttribute('type', 'text')
    })

    test('Should input have a valid email type', function () {
        render(<LabelledInput id={"personal-info-email"} type={"email"} label={"Test"} name={"testing"}/>);

        expect(screen.getByLabelText('Test')).toHaveAttribute('type', 'email')
    })
});