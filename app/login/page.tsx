'use client'
import Image from 'next/image';
import { useForm} from 'react-hook-form';
import {CredentialButton, CredentialCheckbox, CredentialDOB, CredentialInput} from '../components/Credentials/Input';

const LoginPage: React.FC = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm();
      const onSubmit = (data: any) => console.log(data);

    return (

        <div className='pt-8 flex flex-col justify-center items-center space-y-8'>
            <Image src='/logos/next-social.png' width={490} height={110} alt="logo"></Image>
            <form className='flex flex-col  p-10 space-y-3.5 bg-slate-50 rounded-lg drop-shadow-md max-w-sm'>
                <h1 className='text-xl font-semibold'>Sign in</h1>
                <CredentialInput type="text" placeholder="Username or email@domain.it" label='Email or username' err=""  {...register("login", { required: true })}/>
                <CredentialInput type="password" placeholder="•••••••••••••" label='Password' err=""  {...register("password", { required: true })}/>
                <CredentialCheckbox text="Remember me"></CredentialCheckbox>
                <div className='pt-8'>
                    <CredentialButton type="submit" text="Sign in" />

                </div>
            </form>
        </div>
    )
}

export default LoginPage;