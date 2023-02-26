import React, { LegacyRef } from "react";
import { ICredentialInputProps, ICredentialButtonProps} from "@/app/interfaces/inputs/ICredentials";

/**
 * This input is used for credentials such email and password in login and register page.
 * Do not use this input for other purposes.
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

const CredentialButton = React.forwardRef(({type, text, ...rest} : ICredentialButtonProps, ref: LegacyRef<HTMLButtonElement>) => {

    return (
        <>
            <button type={type} ref={ref} {...rest}>{text}</button>
        </>
    )
});

export { CredentialInput, CredentialButton};