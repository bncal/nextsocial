import React, { LegacyRef } from "react";
import { ICredentialInputProps, ICredentialButtonProps, ICredentialCheckboxProps, ICredentialDOBProps} from "@/app/interfaces/inputs/ICredentials";

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

    const inputClass="py-2 px-3 border-1 border-gray-200 rounded-md text-sm dark:text-gray-400 w-full drop-shadow-sm";
    // const inputClass = "bg-yellow py-3 px-4 block w-full border-yellow rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400";
    const labelClass = "block text-sm font-semibold mb-2 dark:text-white";
    const explanationClass = "text-sm text-gray-500 mt-2";
    const errorClass = "text-sm font-semibold text-red-600 mt-2";
    
    return (
        <div className="">
            <label className={labelClass}>{label}</label>
            <input className={inputClass} type={type} placeholder={placeholder} ref={ref} {...rest}/>
        </div>
    )
});

/**
 * This button is used to submit credentials in login and register page.
 * Do not use this button for other purposes. See: https://reactjs.org/docs/forwarding-refs.html
 * note: ring not working
 * @todo fix ring
 * @param type -  React.ButtonHTMLAttributes<T>.type?: "submit" | "reset" | "button" | undefined
 * @param text - text
 * @param rest - rest of props
 * @returns {JSX.Element}
 * 
 */

const CredentialButton = React.forwardRef(({type, text, ...rest} : ICredentialButtonProps, ref: LegacyRef<HTMLButtonElement>) => {

    const buttonClass = "w-full py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800";
    return (
        <>
            <div className="">
                <button className={buttonClass} type={type} ref={ref} {...rest}>{text}</button>
            </div>
        </>
    )
});

const CredentialCheckbox = React.forwardRef(({text, tos, tosLink} : ICredentialCheckboxProps, ref: LegacyRef<HTMLButtonElement>) => {

    const checkboxClass = 'shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800';
    
    return (
        <>
            <div className="flex">
                <input type="checkbox" className={checkboxClass} />
                <label className="font-medium text-sm text-gray-500 ml-3 dark:text-gray-400">{text} <span><a href={tosLink}>{tos}</a></span></label>
            </div>
        </>
    )
});

const CredentialDOB = React.forwardRef(({placeholder, ...rest} : ICredentialDOBProps, ref: LegacyRef<HTMLInputElement>) => { 

    const  inputClass = "py-3 px-3 inline-flex border-1 border-gray-200 rounded-md text-sm dark:text-gray-400 w-72 drop-shadow-sm w-full text-center";    
    return (
        <>
            <input className={inputClass} type="text" placeholder={placeholder} ref={ref} {...rest}/>            
        </>
    )
});
export { CredentialInput, CredentialButton, CredentialCheckbox, CredentialDOB};