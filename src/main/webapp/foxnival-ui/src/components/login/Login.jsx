import React, { useEffect, useState } from 'react'
import '../css/form.css'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import userServiceApi from '../../service/UserService';
import { toast } from 'react-toastify';

export default function Login() {

    const navigate = useNavigate();
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        if(JSON.parse(sessionStorage.getItem('loggedInUser'))) {
            navigate('/dashboard');
        }
    })

    //form validation..
    const { values, handleSubmit, handleChange, errors } = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: Yup.object().shape({
            username: Yup.string().email('Please enter a valid username.').required("Please enter your username."),
            password: Yup.string().min(5, 'Password must be at least 5 characters.').required("Please enter your password.")
        }),
        onSubmit: async (values) => {
            userServiceApi.login(values.username, values.password)
                .then((res) => {
                    if (res?.data) {
                        setShowError(false);
                        toast.success("Authenticated.")
                        sessionStorage.setItem("loggedInUser", JSON.stringify(res?.data));
                        navigate('/dashboard');
                    }
                })
                .catch((e) => {
                    console.error(e)
                    if (e?.status === 401) {
                        setShowError(true);
                        toast.error("Unauthenticated.")
                    }
                })

        }
    });

    return (
        <div className='login_style'>
            <h3 className='text-center mt-2'>Login</h3>
            {showError && <div class="alert alert-danger p-0 m-0 text-center" role="alert">
                Please enter valid username or password.
            </div>}
            <form onSubmit={handleSubmit}>
                <div class="form-group form_pading">
                    <label for="exampleInputEmail1">Username</label>
                    <input name='username' onChange={handleChange} value={values.username} type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter username" />
                </div>
                <div className="subcriber_form_pading text-danger">
                    {errors.username}
                </div>
                <div class="form-group form_pading">
                    <label for="exampleInputPassword1">Password</label>
                    <input name='password' onChange={handleChange} value={values.password} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    <Link className='float-end'>Forget password</Link> <br />
                </div>
                <div className="subcriber_form_pading text-danger">
                    {errors.password}
                </div>
                <div className='btn-style mt-1 d-inline-block float-left'>
                    <Link to="/" class="btn btn-danger">Back</Link>
                </div>
                <div className='btn-style mt-1 d-inline-block float-end'>
                    <button type="submit" class="btn btn-success">Login</button >
                </div>
            </form>
        </div>

    )
}
