import React, { useState, useEffect } from 'react';
import Button from '~/components/Button';
import { useForm } from 'react-hook-form';
import classNames from 'classnames/bind';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { db } from '~/FireBase/firebase.config';
import { CloseIcon, PasswordHideIcon, PasswordunHideIcon } from '../components/Icons';
import styles from './Auth.module.scss';
import { useDispatch, useSelector } from 'react-redux';

import { confirmAuth } from '~/redux/actions/authAction';
const cx = classNames.bind(styles);

// let currentUser = false;
// localStorage.getItem('currentUser')
//     ? (currentUser = localStorage.getItem('currentUser') === 'true' ? true : false)
//     : localStorage.setItem('currentUser', false);

function Auth() {
    const [modal, setModal] = useState(false);
    const [open, setOpen] = useState(cx('open'));
    const [showPassword, setShowPassword] = useState(true);

    const dispatch = useDispatch();

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const auth = getAuth();
            const userCredential = await signInWithEmailAndPassword(auth, data.text, data.password);

            if (auth.currentUser) {
                navigate('/');
            }

            setModal(!modal);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        dispatch(confirmAuth());
    }, []);

    const handleOpen = () => {
        setOpen('open');
        setModal(!modal);
    };

    const handleClose = () => {
        setOpen('close');
        setTimeout(() => setModal(!modal), 500);
    };

    const handleShowPassword = () => setShowPassword(!showPassword);

    return (
        <>
            <span onClick={handleOpen} className={cx('btn-auth')}>
                Log in
            </span>

            {modal && (
                <div className={cx('auth')}>
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
                                    type={showPassword ? 'password' : 'text'}
                                    {...register('password', {
                                        required: true,
                                        pattern: {
                                            value: /^[A-Za-z0-9 ]+$/,
                                            message: 'Invalid special character',
                                        },
                                    })}
                                />
                                <p className={cx('error-msg')}>{errors.password?.message}</p>
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
            )}
        </>
    );
}

export default Auth;
