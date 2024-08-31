import React, { useCallback, useEffect, useMemo, useState } from 'react'
import useRazorpay from 'react-razorpay';
import { useLocation, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function Payment() {
    const { state } = useLocation();
    const [Razorpay, isLoaded] = useRazorpay();
    const navigate = useNavigate();
    const [showLoader, setShowLoader] = useState(true);
    console.log("location ", state);

    const handlePayment = useCallback(() => {
        createOrder();
    }, [Razorpay])

    useEffect(() => {
        if (isLoaded) {
            handlePayment()
        }
    }, [isLoaded, handlePayment])

    const createOrder = async () => {
        console.log("create order called .");

        await fetch('http://localhost:8080/payment/order?amount=' + state?.amount, {
            method: 'POST'
        }).then((response) => {
            return response.json().then((data) => {
                console.log("Response ", data);
                if (data) {
                    const options = {
                        key: "rzp_test_evX6onXoZwfzMj", // Enter the Key ID generated from the Dashboard
                        amount: data?.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                        currency: "INR",
                        name: "Foxnival",
                        description: "Test Transaction",
                        // image: "https://example.com/your_logo",
                        order_id: data?.id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
                        handler: function (response) {
                            Swal.fire({
                                title: "Congratulation!",
                                text: "You have succesfully subscribed, I will send login credential on your email, please check your email and login with that credential!",
                                icon: "success"
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    navigate("/login")
                                }
                            });
                            // alert(response.razorpay_payment_id);
                            // alert(response.razorpay_order_id);
                            // alert(response.razorpay_signature);
                        },
                        prefill: {

                        },
                        notes: {
                            address: "This is subscription payment.",
                        },
                        theme: {
                            color: "#008000",
                        },
                    };

                    const raz = new Razorpay(options);
                    raz.open();
                    setShowLoader(false)
                    raz.on('payment.failed', function (response) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Something went wrong, Please try again after some time!",
                            // footer: '<a href="#">Why do I have this issue?</a>'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                navigate("/")
                            }
                        });
                        // alert(response.error.code);
                        // alert(response.error.description);
                        // alert(response.error.source);
                        // alert(response.error.step);
                        // alert(response.error.reason);
                        // alert(response.error.metadata.order_id);
                        // alert(response.error.metadata.payment_id);
                    });
                }
            }).catch((err) => {
                console.log("Error ", err);
            })
        }).catch((err) => {
            console.log("Error ", err);
        })
    }

    return (
        showLoader && <div class="text-center mt-5">
            <div className="spinner-border text-success loader_style" role="status">
                
            </div> <br/>
            <span className='text-success'>Loading payment page....</span>
        </div>
    )
}
