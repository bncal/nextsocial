'use client'
import Image from 'next/image';
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


        <div className='mt-20 flex flex-row justify-center'>
            
            <img src="/cred.png"alt="img" className="rounded-tl-large rounded-bl-large" />
            <form className='pl-20 pr-20 pb-1 bg-base-300 w-fit rounded-tr-large rounded-br-large' onSubmit={handleSubmit(onSubmit)}>
                <h1 className='pt-12 pb-4 text-3xl font-semibold text-base-content'>Sign in</h1>
                <p className='text-base text-base-content w-72 pb-12'>Complete the form below to register a new account and have access to the platform.</p>
                <CredentialInput type="text" placeholder="youremail@domain.com" label="Email" explanation='Your email, must be real'  {...register("email", { required: true })}/>
                <CredentialInput type="text" placeholder="Username" label="Username" explanation='Your @username'  {...register("username", { required: true })}/>
                <CredentialInput type="password" placeholder="Your password" label='Password' explanation='Your password, must be unique'  {...register("password", { required: true })}/>

                <CredentialButton type="submit" text="Sign in" />
            </form>
        </div>

    )
}

export default RegisterPage;