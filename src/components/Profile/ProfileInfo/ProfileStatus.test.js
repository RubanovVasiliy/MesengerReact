import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="Test status" />);
        const instance = component.getInstance();
        expect(instance.props.status).toBe("Test status");
    });
    test("after creation span should be displayed", () => {
        const component = create(<ProfileStatus status="Test status" />);
        const instance = component.root;
        const span = instance.findByType("span");
        expect(span).not.toBeUndefined();
    });
    test("span should be displayed with correct status", () => {
        const component = create(<ProfileStatus status="Test status" />);
        const instance = component.root;
        const span = instance.findByType("span");
        expect(span.children[0]).toBe("Test status");
    });
    test("after creation input shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="Test status" />);
        const instance = component.root;
        expect(()=> {
            instance.findByType("input");
        }).toThrow()
    });
    test("input should be displayed in editMode", () => {
        const component = create(<ProfileStatus status="Test status" />);
        const instance = component.root;
        const span = instance.findByType("span");
        span.props.onDoubleClick();
        const input = instance.findByType("input");

        expect(input).not.toBeUndefined();
    })
    test("callback should be called", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status="Test status" updateStatus={mockCallback}/>)
        const instance = component.getInstance()
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    })
});