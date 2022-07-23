import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '~/components/Button';

function Home() {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <>
            <h2>Home page</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                aaa
                <input
                    id="Text"
                    name="text"
                    placeholder="Email or username"
                    type="text"
                    {...register('text', { required: true })}
                />
                ccc
                <input
                    id="Password"
                    name="password"
                    placeholder="Password"
                    type={true ? 'password' : 'text'}
                    {...register('password', {
                        required: true,
                        pattern: { value: /^[A-Za-z]+$/i, message: 'Invalid special character' },
                    })}
                />
                <p>{errors.password?.message}</p>
                {errors.text || errors.password ? (
                    <Button text large disabled type="submit">
                        Log in
                    </Button>
                ) : (
                    <Button text large primary type="submit">
                        Log in
                    </Button>
                )}
            </form>
        </>
    );
}

export default Home;
