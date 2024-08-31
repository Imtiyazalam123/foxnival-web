export const createOrder = async (amount) => {
    console.log("Order ", amount);
    let options = null;
    await fetch('http://localhost:8080/payment/order?amount=' + amount, {
        method: 'POST'
    }).then((response) => {
        return response.json().then((data) => {
            console.log("Response ", data);
            if (data) {
             options = createOptionsObj(data)
            }
        }).catch((err) => {
            console.log("Error ", err);

        })

    }).catch((err) => {
        console.log("Error ", err);
    })
    return options;
}
const createOptionsObj = (data) => {

    let options = {
        key: "rzp_test_evX6onXoZwfzMj", // Enter the Key ID generated from the Dashboard
        amount: data?.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Foxnival",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: data?.id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
        handler: function (response) {
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature);
        },
        prefill: {
            name: "",
            email: "",
            contact: "",
        },
        notes: {
            address: "This is subscription payment.",
        },
        theme: {
            color: "#3399cc",
        },
    }
    return options;
}