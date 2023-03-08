'use client'
import Image from 'next/image';
import { useForm} from 'react-hook-form';
import {CredentialButton, CredentialCheckbox, CredentialDOB, CredentialInput} from '../components/Credentials/Input';
import { CREDENTIAL_ERRORS } from '../enumerators/credentials/errors';
import isSlur from '../helpers/badwords';

const RegisterPage: React.FC =  () => {

    const { register, watch, getValues, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            username: '',
            email: '',
            password: '',
            dob: '',
        }
    });
    const watchUserName = watch("username");

    return (

        <div className='pt-8 flex flex-col justify-center items-center space-y-8'>
            <Image src='/logos/next-social.png' width={490} height={110} alt="logo"></Image>
            <form className='flex flex-col  p-10 space-y-3.5 bg-slate-50 rounded-lg drop-shadow-md max-w-sm'
            
                
                onSubmit={handleSubmit(async (data) => {
                    console.log(data);
                    const res = await fetch('http://localhost:3000/api/user', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    });   

                })}>

                <CredentialInput type="text" placeholder="Username" label='Username' {...register("username", { required: true, minLength: 2, maxLength: 20})}/>
                {errors.username?.type === 'required' && <p className='text-sm font-semibold text-red-600 mt-2'>{CREDENTIAL_ERRORS.REQUIRED_USERNAME}</p>}
                {errors.username?.type === 'minLength' && <p className='text-sm font-semibold text-red-600 mt-2'>{CREDENTIAL_ERRORS.MIN_LENGHT_USERNAME}</p>}
                {isSlur(watchUserName) && <p className='text-sm font-semibold text-red-600 mt-2'>{CREDENTIAL_ERRORS.BANNED_WORD}</p>}
                
                <CredentialInput type="email" placeholder="email@domain.it" label='Email'{...register("email", { required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })}/>
                {errors.email?.type === 'required' && <p className='text-sm font-semibold text-red-600 mt-2'>{CREDENTIAL_ERRORS.REQUIRED_EMAIL}</p>}
                {errors.email?.type === 'pattern' && <p className='text-sm font-semibold text-red-600 mt-2'>{CREDENTIAL_ERRORS.INVALID_EMAIL}</p>}
                
                
                <CredentialInput type="password" placeholder="•••••••••••••" label='Password'{...register("password", { required: true, minLength: 8 })}/>
                {errors.password?.type === 'required' && <p className='text-sm font-semibold text-red-600 mt-2'>{CREDENTIAL_ERRORS.REQUIRED_PASSWORD}.</p>}
                {errors.password?.type === 'minLength' && <p className='text-sm font-semibold text-red-600 mt-2'>{CREDENTIAL_ERRORS.MIN_LENGHT_PASSWORD}</p>}                
                
                <label className='font-semibold text-sm text-gray-800 dark:text-gray-400'>Date of Birth</label>
                <div className='flex flex-row justify-between'>
                    <CredentialDOB placeholder='' {...register("dob", {required: true})} />
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