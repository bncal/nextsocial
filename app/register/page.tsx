'use client'
import Image from 'next/image';
import { useForm} from 'react-hook-form';
import {CredentialButton, CredentialCheckbox, CredentialDOB, CredentialInput} from '../components/Credentials/Input';

const RegisterPage: React.FC = () => {

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
                <CredentialInput type="text" placeholder="Username" label='Username' err=""  {...register("username", { required: true })}/>
                <CredentialInput type="email" placeholder="email@domain.it" label='Email' err=""  {...register("email", { required: true })}/>
                <CredentialInput type="password" placeholder="•••••••••••••" label='Password' err=""  {...register("password", { required: true })}/>
                <label className='font-semibold text-sm text-gray-800 dark:text-gray-400'>Date of Birth</label>
                <div className='flex flex-row gap-2 justify-between'>
                    <CredentialDOB placeholder='dd' {...register("dob", { required: true })}></CredentialDOB>
                    <CredentialDOB placeholder='mmm' {...register("dob", { required: true })}></CredentialDOB>
                    <CredentialDOB placeholder='yyyy' {...register("dob", { required: true })}></CredentialDOB>
                </div>
                <CredentialCheckbox text="I agree to the" tos="Terms of Service" tosLink="https://www.google.com"></CredentialCheckbox>
                <CredentialCheckbox text="I agree with the use of the telemetry of my keyboard and mouse inputs, and the use of cookies on our website."></CredentialCheckbox>
                <div className='pt-8'>
                    <CredentialButton type="submit" text="Sign up" />

                </div>
            </form>
        </div>
    )
}

export default RegisterPage;