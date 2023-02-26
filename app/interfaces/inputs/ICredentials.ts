export interface ICredentialInputProps {
    type: string;
    name: string;
    placeholder: string;
    label?: string;
    explanation?: string;
}

export interface ICredentialButtonProps {
    type: 'submit' | 'reset' | 'button' | undefined;
    text: string;
}