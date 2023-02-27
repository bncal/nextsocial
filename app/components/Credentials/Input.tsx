import React, { LegacyRef } from "react";
import { ICredentialInputProps, ICredentialButtonProps} from "@/app/interfaces/inputs/ICredentials";

/**
 * This input is used for credentials such email and password in login and register page.
 * Do not use this input for other purposes. See: https://reactjs.org/docs/forwarding-refs.html
 * @param type - type of input
 * @param placeholder - placeholder of input
 * @param rest - rest of props
 * @returns {JSX.Element}
 */

const CredentialInput = React.forwardRef(({type, placeholder, label, explanation, ...rest} : ICredentialInputProps, ref: LegacyRef<HTMLInputElement>) => {

    return (
        <>
            <label>{label}</label>
            <input type={type} placeholder={placeholder} ref={ref} {...rest}/>
            <p>{explanation}</p>
        </>
    )
});

/**
 * This button is used to submit credentials in login and register page.
 * Do not use this button for other purposes. See: https://reactjs.org/docs/forwarding-refs.html
 * @param type -  React.ButtonHTMLAttributes<T>.type?: "submit" | "reset" | "button" | undefined
 * @param text - text
 * @param rest - rest of props
 * @returns {JSX.Element}
 * 
 */

const CredentialButton = React.forwardRef(({type, text, ...rest} : ICredentialButtonProps, ref: LegacyRef<HTMLButtonElement>) => {

    return (
        <>
            <button type={type} ref={ref} {...rest}>{text}</button>
        </>
    )
});

export { CredentialInput, CredentialButton};