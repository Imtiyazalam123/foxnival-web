import React, { useState } from 'react'
import '../css/form.css'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
export default function Subscribe() {

    const navigate = useNavigate();
    const [showPlanDetail, setShowPlanDetail] = useState(false)
    let amount = 0;
    const [payableAmount, setPayableAmount] = useState(0);

    const [info, setInfo] = useState('');
    const planInfo = ['for 5 days free trial', 'for 1 year validity', 'for 2 year validity', 'for 3 year validity'];
    const planChange = (e) => {
        //calling formik funtions
        handleChange(e);
        let value = e?.target?.value;
        if (value >= 0) {
            setShowPlanDetail(true);
            if (value === '0') {
                amount = 0;
                setInfo('Need to pay ' + amount + '.00 ' + planInfo[value]);
            } else if (value === '1') {
                amount = 1000;
                setInfo('Need to pay ' + amount + '.00 ' + planInfo[value]);
            } else if (value === '2') {
                amount = 2000
                setInfo('Need to pay ' + amount + '.00 ' + planInfo[value]);
            } else if (value === '3') {
                amount = 3000;
                setInfo('Need to pay ' + amount + '.00 ' + planInfo[value]);
            }
        } else {
            setShowPlanDetail(false);
            amount = 0;
            setInfo('');
        }
        setPayableAmount(amount);
    }

    //form validation
    const {values, handleSubmit, handleChange, errors} = useFormik({
        initialValues: {
           name: '',
           email: '',
           organization: '',
           planOption: '-1',
           password: '',
           confirmPassword: ''
        },
        validationSchema: Yup.object().shape({
           name: Yup.string().min(3, 'Name must be at least 3 characters.').required("Please enter your name."),
           email: Yup.string().email('Please enter a valid email.').required("Please enter your email."),
           organization: Yup.string().min(3, 'Organization name must be at least 3 characters.').required("Please enter your organization name."),
           planOption: Yup.string().oneOf(['0', '1', '2', '3'], 'Please select plan').required("Please select plan."),
           password: Yup.string().min(5, 'Password must be at least 5 characters.').required("Please set your password."),
           confirmPassword: Yup.string().oneOf([Yup.ref('[password')], 'Confirm password not matched').required("Please enter your confirm password.")
        }),
        onSubmit: values => {
            if(payableAmount > 0) {
                navigate("/payment", {state: {amount: payableAmount, userInfo: values}})
            } else {
                console.log("Values ", values);
                
            }
        } 
    });

    return (
        <div className='subcriber_style'>
            <h5 className='text-start mt-2 subcriber_form_pading pb-0 fst-italic'>Fill out your details and proceed with payment</h5>
            <form onSubmit={handleSubmit}>
                <div class="form-group subcriber_form_pading">
                    <label for="nameExample">Your full name</label>
                    <input type="text" class="form-control" name='name' id="nameExample" placeholder="Enter username" onChange={handleChange} value={values.name}/>
                </div>
                <div className="subcriber_form_pading text-danger">
                    {errors.name}
                </div>
                <div class="form-group subcriber_form_pading">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" name='email' id="exampleInputEmail1" placeholder="Enter username" onChange={handleChange} value={values.email}/>
                </div>
                <div className="subcriber_form_pading text-danger">
                    {errors.email}
                </div>
                <div class="form-group subcriber_form_pading">
                    <label for="organizationExample">Your organization name</label>
                    <input type="text" class="form-control" name = 'organization' id="organizationExample" placeholder="Enter organization name" onChange={handleChange} value={values.organization}/>
                </div>
                <div className="subcriber_form_pading text-danger">
                    {errors.organization}
                </div>
                <div class="form-group subcriber_form_pading">
                    <label for="inlineFormCustomSelectPref">Subcribe for </label>
                    <select class="custom-select form-control" id="inlineFormCustomSelectPref" name='planOption' onChange={planChange} value={values.planOption}>
                        <option value='-1' disabled selected>Slect subscription plan.......</option>
                        <option value='0'>Free trial</option>
                        <option value='1'>One year plan</option>
                        <option value='2'>Two yean plan</option>
                        <option value='3'>Three year plan</option>
                    </select>
                </div>
                <div className="subcriber_form_pading text-danger">
                    {errors.planOption}
                </div>
                {showPlanDetail && <div className="subcriber_form_pading text-success fw-bolder fst-italic">
                    {info}
                </div>}
    
                <div class="form-group subcriber_form_pading">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" name = 'password' id="exampleInputPassword1" placeholder="Password" onChange={handleChange} value={values.password}/>
                </div>
                <div className="subcriber_form_pading text-danger">
                    {errors.password}
                </div>
                <div class="form-group subcriber_form_pading">
                    <label for="exampleInputPassword">Confirm password</label>
                    <input type="password" class="form-control" name='confirmPassword' id="exampleInputPassword2" placeholder="Confirm password" onChange={handleChange} value={values.confirmPassword}/>
                </div>
                <div className="subcriber_form_pading text-danger">
                    {errors.confirmPassword}
                </div>
                <div className='subcriber_form_pading mt-3 mb-2 d-inline-block float-left'>
                    <Link to="/" class="btn btn-danger">Cancel</Link>
                </div>
                <div className='subcriber_form_pading mt-3 mb-2 d-inline-block float-end'>
                    <button type="submit" class="btn btn-success">{payableAmount === 0 ? 'Submit' : payableAmount + '.00 Pay'}</button>
                </div>
            </form>
        </div>
    )
}
