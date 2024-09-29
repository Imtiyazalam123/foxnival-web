import React from 'react'
import '../css/form.css'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className='login_style'>
            <h3 className='text-center mt-2'>Login</h3>
            <form>
                <div class="form-group form_pading">
                    <label for="exampleInputEmail1">Username</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter username" required />
                </div>
                <div class="form-group form_pading">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required />
                    <Link className='float-end'>Forget password</Link> <br />
                </div>
                <div className='btn-style mt-1 d-inline-block float-left'>
                    <Link to="/" class="btn btn-danger">Back</Link>
                </div>
                <div className='btn-style mt-1 d-inline-block float-end'>
                    <Link to = "/dashboard" type="submit" class="btn btn-success">Login</Link>
                </div>
            </form>
        </div>

    )
}
