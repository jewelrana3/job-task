
import { useContext, useState } from 'react'
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../provider/AuthProvider';

const SignUp = () => {
    const { createUser, profile } = useContext(AuthContext)
    const [show, setShow] = useState(false);
    const [confirms, setConfirms] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const Navigate = useNavigate();


    const onSubmit = (data) => {
        if (data.password !== data.confirmPass) {
            toast.error("Password Does not match!");
            return;
        }

        createUser(data.email, data.password)
            .then((result) => {
                if (result.user) {
                    profile(data.name, data.photo)
                    const user = {
                        name: data.name,
                        email: data.email,
                        photo:data.photo
                    }
                  
                    fetch('http://localhost:5000/user', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(user)
                    })
                        .then((res) => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                toast('User created successfully!');
                                Navigate('/')
                            }
                        })
                        .catch((err) => {
                            console.error(err);
                        });
                }
            })
            .catch((err) => {
                console.error(err.message);
                throw err;
            });
    }
    return (
        <div className="pt-24 mb-24">
            <div className="relative">
                <img className="w-full" src="https://i.ibb.co/QkHFkQR/seo-optimization-3d-render-cartoon-illustration-107791-16996-1.jpg" alt="" />
            </div>
            <div style={{ marginTop: '-800px', width: '600px', height: '700px' }} className="login bg-white absolute inset-x-0 flex items-center justify-center mx-auto px-20 ">
                <div>
                    <div className='ml-8'>
                        <h1 className='text-4xl font-bold'>SignUp Now!</h1>
                        <p className='text-xl'>You can signup with you social account below</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <input
                                type="text"
                                {...register("name", { required: true })}
                                name="name"
                                placeholder="Name"
                                className="input rounded-none  border border-gray-300 focus:border-rose-600 w-full"
                            />
                            {errors.name && <span className="text-red-600 text-start">required</span>}
                        </div>
                        <div className="form-control">

                            <input
                                type="email"
                                {...register("email", { required: true })}
                                name="email"
                                placeholder="email"
                                className="input input-bordered mt-5 rounded-none w-full"
                            />
                            {errors.email && <span className="text-red-600 text-start">required</span>}
                        </div>

                        <div className="form-control">

                            <input
                                type="text"
                                {...register("photo", { required: true })}
                                name="photo"
                                placeholder="Photo URL"
                                className="input input-bordered mt-5  rounded-none w-full"
                            />
                            {errors.photo && (
                                <span className="text-red-600 text-start">required</span>
                            )}
                        </div>
                        <div className="form-control">

                            <div className="flex items-center justify-between">
                                <input
                                    type={show ? "text" : "password"}
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        pattern:
                                            /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                                    })}
                                    placeholder="password"
                                    className="input input-bordered  mt-5 rounded-none w-full"
                                />
                                <span
                                    className="absolute  p-2 cursor-pointer mt-5"
                                    onClick={() => setShow(!show)}
                                    style={{ marginLeft: '500px' }}
                                >
                                    {show ? <FaEye /> : <FaEyeSlash />}
                                </span>
                            </div>
                            {errors.password?.type === "required" && (
                                <p className="text-red-600 text-start">required</p>
                            )}
                            {errors.password?.type === "minLength" && (
                                <p className="text-red-600">Password must be 6 characters</p>
                            )}
                            {errors.password?.type === "pattern" && (
                                <p className="text-red-600">
                                    Password must have one Uppercase one lower case, one number
                                    and one special character.
                                </p>
                            )}
                        </div>
                        <div className="form-control">

                            <div className="flex items-center justify-between">
                                <input
                                    type={show ? "text" : "password"}
                                    {...register("confirmPass", { required: true })}
                                    placeholder="Confirm Password"
                                    className="input input-bordered mt-5   w-full rounded-none relative"
                                />
                                <span
                                    className="absolute p-2 cursor-pointer mt-5"
                                    onClick={() => setConfirms(!confirms)}
                                    style={{ marginLeft: '500px' }}
                                >
                                    {confirms ? <FaEye /> : <FaEyeSlash />}
                                </span>
                            </div>
                            {errors.confirmPass?.type === "required" && (
                                <p className="text-red-600 text-start">required</p>
                            )}
                        </div>
                        <div className="form-control mt-6 -mb-20">
                            <input style={{ width: '540px', }}
                                className="signUp btn text-white bg-green-500"
                                type="submit"
                                value="SignUp"
                            />
                        </div>
                    </form>
                    <div className="">
                        <p className="mt-14 ml-9">
                            Already have an account! Please
                            <Link to="/login" className="hover:underline text-blue-500 ml-2">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

        </div>

    );

}

export default SignUp;