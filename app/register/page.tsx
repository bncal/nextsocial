"use client"

import { useForm} from 'react-hook-form';
import {CredentialButton, CredentialInput} from '../components/Credentials/Input';

const RegisterPage: React.FC = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm();
      const onSubmit = (data: any) => console.log(data);

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <CredentialInput type="text" placeholder="youremail@domain.com" label="Email" explanation='Your email, must be real'  {...register("email", { required: true })}/>
            <CredentialInput type="password" placeholder="Your password" label='Password' explanation='Your password, must be unique'  {...register("password", { required: true })}/>

            <CredentialButton type="submit" text="Register" />
        </form>

    )
}

export default RegisterPage;