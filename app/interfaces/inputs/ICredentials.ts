export interface ICredentialInputProps {
    type: string;
    name: string;
    placeholder: string;
    label?: string;
    err?: string;
    explanation?: string;
}

export interface ICredentialButtonProps {
    type: 'submit' | 'reset' | 'button' | undefined;
    text: string;
}

export interface ICredentialCheckboxProps {
    text: string;
    tos?: string;
    tosLink?: string;
}

export interface ICredentialDOBProps {
    placeholder: string;
}