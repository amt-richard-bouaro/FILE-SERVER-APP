import { useNavigate } from 'react-router-dom'
import { useTheme } from '../../context/ThemeProvider'
import { useState } from 'react';
import { FieldGroup } from '../../compnents/form-input';
import Button from '../../compnents/button';
import { useForm, SubmitHandler } from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import { RESET_PASSWORD } from './types';
import { FaArrowLeft } from 'react-icons/fa'
import Feedback from '../../compnents/FeedBacks';
import { useResetPasswordMutation } from '../../redux/slices/usersApiSlice';
import { ErrorResponse } from '../../types';
import Loading from '../../compnents/Loading';

const Reset = () => {
    const { theme } = useTheme();

    const [resetPassword, {isLoading}] = useResetPasswordMutation()

    const [feedback, setFeedback] = useState<{ type: 'error' | 'success', message: string } | null>(null)

    const { register, handleSubmit, formState: { errors } } = useForm<RESET_PASSWORD>({
        resolver: zodResolver(RESET_PASSWORD)
    })

    const navigate = useNavigate();


    const handleReset: SubmitHandler<RESET_PASSWORD> = async (data) => {
        
        try {

            const response = await resetPassword(data).unwrap();

            if (response.code === 'PASSWORD_RESET_SUCCESS') {
                setFeedback({ type: 'error', message: response.message });

                setTimeout(() => {
                    setFeedback(null)
                    navigate('/')
                }, 5000);
            } 

            
        } catch (error) {

            const err: ErrorResponse = error as ErrorResponse;
            
            if (err.data) {
                setFeedback({ type: 'error', message: err.data.message });

                setTimeout(() => {
                    setFeedback(null)
                }, 5000);
            } else {
                
                setFeedback({ type: 'error', message: 'Error occurred while trying to reset password' });

                setTimeout(() => {
                    setFeedback(null)
                }, 5000); 
            }
            
        }
       
        
    }

  return (
      <div className='plain-container' style={{ ...theme }}>

          <div className=" plain-container-item-center">
              {feedback ? <Feedback type={feedback.type} message={feedback.message} /> : null}
              {isLoading ? <Loading /> : null}
              <form onSubmit={handleSubmit(handleReset)} className='form-container mg-t-20' id="resetForm">
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
                  <div className="display-message">
                      Upon successful reset, a new password will be generated and sent to your registered email address. 
                  </div>
                  <Button
                      className='btn btn-primary'
                      text='Reset Password'
                      id='reset_password_submit'
                      type="submit"
                      form="resetForm"
                  />
              </form>
              <button className="btn btn-go-back" onClick={() => navigate(-1)}>< FaArrowLeft className='go-back-icon' /> {" "}Go back</button>
          </div>


      </div>
  )
}

export default Reset