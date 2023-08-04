import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import {useSelector } from 'react-redux'

import { FieldGroup, Input } from "../../compnents/form-input";
import Button from "../../compnents/button";
import Loading from "../../compnents/Loading";
import Feedback from "../../compnents/FeedBacks";

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useCreateMutation } from "../../redux/slices/usersApiSlice";

import { USER } from "./types";
import { RootState } from "../../redux/store/store";
import { FetchBaseQueryError } from "../types";

const initialFeedback = {
  err: false,
  success: false,
  message:''
}

function Register() {

  const [create, {isLoading}] = useCreateMutation();

  const navigate = useNavigate();

  const { user } = useSelector((state: RootState) => state.auth);

 const [feedback, setFeedback] = useState(initialFeedback)
 
  useEffect(() => {
    if (user){
         navigate('/app');
    }
  }, [navigate, user])

  const { register, handleSubmit, reset, formState: { errors } } = useForm<USER>({
    resolver: zodResolver(USER)
  });

  const handleRegisteration:SubmitHandler<USER> = async (data) => {
    
    try {

      const response = await create(data).unwrap();
      setFeedback({ ...feedback, err: false, success:true, message: response.message });
      reset();

    } catch (err) {
      console.log(err);

      const Err = err as FetchBaseQueryError;

      let errMsg

      if (Err.status === 409) {
        errMsg = 'There is already a user with that email. If you own this email then you might want to log in instead.';
      }

       setFeedback({ ...feedback, err: true, success:false, message: errMsg || 'Error occured!' });
    }
  
 
  };


  return (
    <>
     
      <p className='sign-in-header'>Register your account</p>

      {/* feedback */}
      {feedback.err ? <Feedback type="error" message={feedback.message} /> : null}
      {feedback.success ? <Feedback type="success" message={feedback.message} /> : null}
      {isLoading ? <Loading /> : null}
      <form  onSubmit={handleSubmit(handleRegisteration)}   className='form-container' id="regForm">
        <FieldGroup label='Surname' id='surname' >
          <input className='field-input ' 
            id='surname'
            type='text'
           {...register('surname')}
            placeholder='enter your surname'
          />
          {errors.surname && 
          <span className='field-validation'>
          {errors.surname?.message}
          </span>}
        </FieldGroup>
        <FieldGroup
          label='Other Names'
          id='other_names'
           >
          <input className='field-input ' 
            id='other_names'
            type='text'
            {...register('other_names')}
            placeholder='enter your other names'

          />
          {errors.other_names && 
          <span className='field-validation'>
          {errors.other_names?.message}
          </span>}
        </FieldGroup>
        <FieldGroup label='Email' id='email' >
          <input className='field-input ' 
         
            id='email'
            type='email'
            {...register('email')
            }
            placeholder='enter your email'
          />
          {errors.email && 
          <span className='field-validation'>
          {errors.email?.message}
          </span>}
        </FieldGroup>
        <FieldGroup label='Password' id='pass' >
          <input className='field-input ' 
            id='pass'
            type='password'
            {...register('password')}
            placeholder='Choose password'
          />
          {errors.password && 
          <span className='field-validation'>
          {errors.password?.message}
          </span>}
        </FieldGroup>
        <FieldGroup label='Confirm Password' id='confirmPassword' >
          <input className='field-input ' 
            id='confirmPassword'
            type='password'
            {...register('confirmPassword')}
            
            placeholder='Re-enter password'
          />
          {errors.confirmPassword && 
          <span className='field-validation'>
          {errors.confirmPassword?.message}
          </span>}
        </FieldGroup>
        <Button
          className='btn btn-primary'
          text='Register'
          type='submit'
          id='register_submit'
          form="regForm"
        />
      </form>
      <div className='or-divider'>
        <hr />
        <div className='or-text'>or</div>
      </div>

      <div className='account-link'>
        Already have an account?{" "}
        <Link to='/account/login'>Sign in to your account</Link>
      </div>
    </>
  );
}

export default Register;
