import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'

export default function InquiryForm() {
    return (
        <>
            <form>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter name" required/>
                </div>
                <div class="form-group">
                    <label for="name">Your organization name</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter organization name" required/>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" required/>
                </div>
                <div class="form-group">
                    <label for="number">Contact number</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter contact number" required/>
                </div>
                <button type="submit" class="btn btn-success mt-2 button_style">Submit</button>
            </form>
        </>
    )
}
