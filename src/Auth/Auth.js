import React, { useState } from 'react';
import { set, useForm } from 'react-hook-form';
import classNames from 'classnames/bind';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';

import Button from '~/components/Button';
import { db } from '~/FireBase/firebase.config';
import { CloseIcon, PasswordHideIcon, PasswordunHideIcon } from '../components/Icons';
import styles from './Auth.module.scss';
import { login } from '~/redux/actions/authAction';
import { closeModal } from '~/redux/actions/modalAction';

const cx = classNames.bind(styles);
let n = 1;

function Auth() {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const isModal = useSelector((state) => state.modal.isModal);

    const dispatch = useDispatch();

    const [open, setOpen] = useState(cx('open'));
    const [showPassword, setShowPassword] = useState(false);
    const [log, setLog] = useState('');

    const onSubmit = async (data) => {
        try {
            const auth = getAuth();
            const userCredential = await signInWithEmailAndPassword(auth, data.text, data.password);

            if (auth.currentUser) {
                handleClose();
                dispatch(login());
            }
        } catch (error) {
            setLog('Incorrect account or password');
            console.log(error);
        }
    };

    const handleClose = () => {
        setOpen('close');
        setTimeout(() => {
            setOpen('open');
            dispatch(closeModal());
        }, 500);
    };

    const handleFocus = () => {
        setLog('');
    };

    const handleShowPassword = () => setShowPassword(!showPassword);

    return (
        <div disabled={isModal} className={cx('auth')}>
            <div className={`${cx('auth-layout')} ${cx(open)}`}>
                <header className={cx('auth-header')}>
                    Log in
                    <div className={cx('auth-close')} onClick={handleClose}>
                        <CloseIcon />
                    </div>
                </header>
                <form className={cx('auth-body')} onSubmit={handleSubmit(onSubmit)}>
                    <label className={cx('auth-label')} htmlFor="Text">
                        Email or username
                    </label>
                    <input
                        className={cx('auth-input')}
                        id="Text"
                        name="text"
                        placeholder="Email or username"
                        type="text"
                        {...register('text', { required: true })}
                    />
                    <div className={cx('auth-pass')}>
                        <input
                            className={cx('auth-input')}
                            id="Password"
                            name="password"
                            placeholder="Password"
                            type={showPassword ? 'text' : 'password'}
                            onFocus={handleFocus}
                            {...register('password', {
                                required: true,
                                pattern: {
                                    value: /^[A-Za-z0-9 ]+$/,
                                    message: 'Invalid special character',
                                },
                            })}
                        />
                        <p className={cx('error-msg')}>{errors.password?.message ? errors.password?.message : log}</p>
                        <div className={cx('auth-icon')}>
                            {handleShowPassword ? (
                                <div onClick={handleShowPassword}>
                                    <PasswordunHideIcon />
                                </div>
                            ) : (
                                <div onClick={handleShowPassword}>
                                    <PasswordHideIcon />
                                </div>
                            )}
                        </div>
                    </div>
                    <p className={cx('text-forgot')}>Forgot password?</p>
                    {errors.text || errors.password ? (
                        <Button className={cx('submit-auth')} text large disabled type="submit">
                            Log in
                        </Button>
                    ) : (
                        <Button className={cx('submit-auth')} text large primary type="submit">
                            Log in
                        </Button>
                    )}
                </form>
                <footer className={cx('auth-footer')}>
                    Don’t have an account? <span className={cx('text-signup')}>Sign up</span>
                </footer>
            </div>
        </div>
    );
}

export default Auth;
