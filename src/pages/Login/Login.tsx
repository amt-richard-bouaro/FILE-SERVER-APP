import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FieldGroup, Input } from "../../compnents/form-input";
import Button from "../../compnents/button";
import Loading from "../../compnents/Loading";

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { FetchBaseQueryError, USER_CREDENTIALS } from "./types";

import { useSelector, useDispatch } from 'react-redux'

import { useAuthMutation } from "../../redux/slices/usersApiSlice";
import { setUser } from "../../redux/slices/authSlice";
import { RootState } from "../../redux/store/store";
import Feedback from "../../compnents/FeedBacks";


function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm<USER_CREDENTIALS>({
    resolver: zodResolver(USER_CREDENTIALS)
  });

  const initialError = {err: false, message:''};
  const [error, setError] = useState(initialError)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [auth, { isLoading, isError }] = useAuthMutation();

  const {user} = useSelector((state:RootState) => state.auth);

  useEffect(() => {
     if (user) {
      navigate('/app/admin/home')
     }
  }, [navigate, user])


  const handleLogin:SubmitHandler<USER_CREDENTIALS> = async (data) => {

    setError(initialError);

    try {

      const response = await auth(data).unwrap();
      dispatch(setUser({ ...response.data }));
      navigate('/app/admin/home');

    } catch (Err) {
      
      console.log(error);

      const err = Err as FetchBaseQueryError;

      setError({...error, err: true, message: err.status === 'FETCH_ERROR'? 'Error: could not reach the server. Please try again later.': 'Error: something went wrong'});
    }
    
  };

  return (
    <>
      {isLoading ? <Loading /> : null}

      <p className='sign-in-header'>Sign in to your account</p>
      {error.err ? <Feedback type="error" message={error.message } /> : null}
      <form onSubmit={handleSubmit(handleLogin)} className='form-container' id="loginForm">
        <FieldGroup label='Email' id='email'>
          <input className='field-input '
            {...register('email')}
            id='email'
            type='email'
            placeholder='enter your email'
          />
          {errors.email &&
            <span className='field-validation'>
              {errors.email?.message}
            </span>}
        </FieldGroup>
        <FieldGroup label='Password' id='pass'>
          <input className='field-input '
            {...register('password')}
            id='pass'
            type='password'
            placeholder='enter your password'
          />
          {errors.password &&
            <span className='field-validation'>
              {errors.password?.message}
            </span>}
        </FieldGroup>
        <Button
          className='btn btn-primary'
          text='Sign In'
          id='login_submit'
          type="submit"
          form="loginForm"
        />
      </form>
      <div className='or-divider'>
        <hr />
        <div className='or-text'>or</div>
      </div>

      <div className='account-link'>
        Don't have an account yet?{" "}
        <Link to='/account/register'>Create your account</Link>
      </div>
    </>
  );
}

export default Login;
