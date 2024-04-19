/* eslint-disable testing-library/await-async-query */
import React from 'react';
import TestRenderer from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

const TEST_STATUS = "samurai";

describe('ProfileStatus component', () => {
    test('Status from props should be in the state', () => {
        const testRenderer = TestRenderer.create(<ProfileStatus aboutMe={TEST_STATUS} />);
        const testInstance = testRenderer.root;
        expect(testInstance.props.aboutMe).toBe(TEST_STATUS);
    });
    test('After creation <span> should be displayed', () => {
        const testRenderer = TestRenderer.create(<ProfileStatus aboutMe={TEST_STATUS} />);
        const testInstance = testRenderer.root;
        let span = testInstance.findByType('span');
        expect(span).not.toBeNull();
    });
    test(`After creation <input> shouldn't be displayed`, () => {
        const testRenderer = TestRenderer.create(<ProfileStatus aboutMe={TEST_STATUS} />);
        const testInstance = testRenderer.root;
        expect(() => {
            let input = testInstance.findByType('input');
        }).toThrow();
    });
    test('After creation <span> should contain correct status', () => {
        const testRenderer = TestRenderer.create(<ProfileStatus aboutMe={TEST_STATUS} />);
        const testInstance = testRenderer.root;
        let span = testInstance.findByType('span');
        expect(span.children[0]).toBe(TEST_STATUS);
    });
    test('<input> should be displayed in edit mode instead of span', () => {
        const testRenderer = TestRenderer.create(<ProfileStatus aboutMe={TEST_STATUS} />);
        const testInstance = testRenderer.root;
        let span = testInstance.findByType('span');
        span.props.onClick();
        let input = testInstance.findByType('input');
        expect(input.props.value).toBe(TEST_STATUS);
    });
    test('callback should be called', () => {
        const mockCallback = jest.fn();
        const testRenderer = TestRenderer.create(<ProfileStatus aboutMe={TEST_STATUS} updateUserStatus={mockCallback} />);
        const testInstance = testRenderer.root;
        testInstance._fiber.stateNode.confirmInputText();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});
