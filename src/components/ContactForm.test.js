import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from './ContactForm';

test("renders correctly", () => {
    render(<ContactForm />)
});


test("contact form creates contact information", () => {
    const { getByLabelText, findByTestId, findByText } = render(<ContactForm />);

    const fNameInput = getByLabelText(/first name/i);
    const lNameInput = getByLabelText(/last name/i);
    const emailInput = getByLabelText(/email/i);
    const messageInput = getByLabelText(/message/i);


    fireEvent.submit(fNameInput, { target: { name: 'firstName', value: 'Naomi' } });
    fireEvent.submit(lNameInput, { target: { name: 'lastName', value: 'Priest' } });
    fireEvent.submit(emailInput, { target: { name: 'email', value: 'naomi@yahoo.com' } });
    fireEvent.submit(messageInput, { target: {name: 'message', value: 'hello'} });


    // const submitButton = findByTestId("submit");
    // fireEvent.submit(submitButton);

    // findByText(`{
    //     "firstName": "Joe",
    //     "lastName": "Smith",
    //     "email": "joe@example.com",
    //     "message": "hello"
    // }`);


})