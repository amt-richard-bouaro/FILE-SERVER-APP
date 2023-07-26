import { useState,useEffect, CSSProperties } from "react";
import { useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { FieldGroup } from "../../compnents/form-input";
import Button from "../../compnents/button";
import Loading from "../../compnents/Loading";
import {useChangePasswordMutation} from '../../redux/slices/usersApiSlice'
import { useTheme } from "../../context/ThemeProvider";
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
// import { FetchBaseQueryError, USER_CREDENTIALS } from "./types";

import { z } from 'zod'
import Feedback from "../../compnents/FeedBacks";
import { ErrorResponse } from "../../types";
import { RootState } from "../../redux/store/store";

const CHANGE_PASSWORD_DATA = z.object({
    currentPassword: z.string()
        .nonempty('Please enter your password')
        .min(8, 'Are you sure this is a valid password'),
    newPassword: z.string().nonempty('Please enter your new password').refine(val => {
        if (val.length < 8) return false;

        if (!/[A-Z]/.test(val)) return false;

        if (!/[a-z]/.test(val)) return false;

        if (!/[^a-zA-Z0-9]/.test(val)) return false;

        return true;
    }, 'Passwords must be at least 8 characters long and include upper case, lower case, and special characters.'),
    confirmPassword: z.string().nonempty('Confirm your new password'),
}).refine((val) => val.newPassword === val.confirmPassword, {
    message: `Password don't match`,
    path: ['confirmPassword'],

});

type CHANGE_PASSWORD_DATA = z.infer<typeof CHANGE_PASSWORD_DATA>


const ChangePassword = () => {

    const { theme } = useTheme();

    const [feedback, setFeedback] = useState<{ type: 'error' | 'success', message: string } | null>(null);

    const [loading, setLoading] = useState(false);

    const { user } = useSelector((state:RootState) => state.auth)
    const navigate = useNavigate()

    const [changeUserPassword] = useChangePasswordMutation()

    const { register, handleSubmit,reset, formState: { errors } } = useForm<CHANGE_PASSWORD_DATA>({
        resolver: zodResolver(CHANGE_PASSWORD_DATA)
    });

    const handleChangePassword: SubmitHandler<CHANGE_PASSWORD_DATA> = async(data) => {
        setLoading(true)
        
        try {

            const response = await changeUserPassword(data).unwrap();

            if (response.code === 'PASSWORD_CHANGED') {
                setLoading(false);
                setFeedback({ type: 'success', message: response.message });
                reset();

                setTimeout(() => {
                    setFeedback(null);
                    
                    navigate('/');
                }, 5000);

            }

        } catch (error) {

            const err: ErrorResponse = error as ErrorResponse;
            setLoading(false);
            if (err.data) {
                
                setFeedback({ type: 'error', message: err.data.message });
            } else {

                setFeedback({ type: 'error', message: 'Error occurred while trying to change password' });
            }


            setTimeout(() => {
                setFeedback(null);
            }, 5000)
        }

    }



    // useEffect(() => {
    //     if (!user.must_change_password) {  
    //         navigate(-1);
    //     }
    // }, []);


  return (
     
          
      <div className="change-password-container" style={{ ...theme as CSSProperties }}>
          {loading ? <Loading /> : null}
          <form onSubmit={handleSubmit(handleChangePassword)} className='form-container' id="changedPasswordForm">
              {feedback ? <Feedback type={feedback.type} message={feedback.message} /> : null}
                  <FieldGroup label='Current Password' id='currentPassword'>
                      <input className='field-input '
                          {...register('currentPassword')}
                          id='currentPassword'
                          type='password'
                          placeholder='Enter reset password'
                      />
                      {errors.currentPassword &&
                          <span className='field-validation'>
                              {errors.currentPassword?.message}
                          </span>}
                  </FieldGroup>
                  <FieldGroup label='Password' id='pass'>
                      <input className='field-input '
                          {...register('newPassword')}
                          id='pass'
                          type='password'
                          placeholder='Enter your new password'
                      />
                  {errors.newPassword &&
                          <span className='field-validation'>
                              {errors.newPassword?.message}
                          </span>}
                  </FieldGroup>
                  <FieldGroup label='Confirm Password' id='confirmPass'>
                      <input className='field-input '
                          {...register('confirmPassword')}
                          id='confirmPass'
                          type='password'
                          placeholder='Re-enter new password'
                      />
                  {errors.confirmPassword &&
                          <span className='field-validation'>
                              {errors.confirmPassword?.message}
                          </span>}
                  </FieldGroup>
                  <Button
                      className='btn btn-primary'
                      text='Change Password'
                      id='change_password_submit'
                      type="submit"
                      form="changedPasswordForm"
                  />
              </form>
         </div>


  )
}

export default ChangePassword