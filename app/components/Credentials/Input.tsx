import React, { LegacyRef } from "react";
import { ICredentialInputProps, ICredentialButtonProps} from "@/app/interfaces/inputs/ICredentials";

/**
 * This input is used for credentials such email and password in login and register page.
 * Do not use this input for other purposes. See: https://reactjs.org/docs/forwarding-refs.html
 * @param type - type of input
 * @param placeholder - placeholder of input
 * @param rest - rest of props
 * @param label - label of input
 * @param explanation - explanation of the input
 * @param err - error that will be shown if there is an error
 * 
 * @returns {JSX.Element}
 */

const CredentialInput = React.forwardRef(({type, placeholder, label, err, explanation, ...rest} : ICredentialInputProps, ref: LegacyRef<HTMLInputElement>) => {

    const inputClass = "shrink-0 w-72 text-base text-base-content placeholder-color-info border-2 border-info border-solid rounded-lg p-3";
    const labelClass = "flex-1 text-base text-base-content";
    const explanationClass = "flex-1 text-sm text-base-content";
    const errorClass = "flex-1 text-sm text-error";
    
    return (
        <div className="flex flex-col space-y-2.5 pb-5">
            <label className={labelClass}>{label}</label>
            <input className={inputClass} type={type} placeholder={placeholder} ref={ref} {...rest}/>
            <p className={explanationClass}>{explanation}</p>
            <p className={errorClass}>{err}</p>
        </div>
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

    const buttonClass = "btn btn-active btn-primary";
    return (
        <>
            <div className="flex flex-row justify-center place-items-center pt-10">
                <button className={buttonClass} type={type} ref={ref} {...rest}>{text}</button>
            </div>
        </>
    )
});

export { CredentialInput, CredentialButton};