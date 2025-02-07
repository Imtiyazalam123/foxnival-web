import React, { useEffect, useState } from 'react';
import RegisteredCustomerTable from '../section/registeredcustomer/registeredcustomertable';
import PageHeader from '../pageheader/pageheader';

export default function RegisteredCustomer() {
    const [isRegisterCustomerDialogOpen, setIsRegisterCustomerDialogOpen] = useState(false);
    const [subscriberId, setSubscriberId] = useState(null);

    const handleRegisterCustomer = () => {
        setIsRegisterCustomerDialogOpen(true);
    };

    const handleCloseRegisterCustomerDialog = () => {
        setIsRegisterCustomerDialogOpen(false);
    };

    useEffect(() => {
        let loggedinUser = JSON.parse(localStorage.getItem('loggedInUser'));
        if (loggedinUser && loggedinUser.subscriber) {
            setSubscriberId(loggedinUser.subscriber.id);
        } else {
            setSubscriberId(null);
        }
    }, []);

    return (
        <div className="w-full">
            <PageHeader
                title='Registered Customer'
                subheader='Register Customer as per the task status.'
                buttontext='Register customer'
                onButtonClick={handleRegisterCustomer}
            />
            <RegisteredCustomerTable
                isCreateDialogOpen={isRegisterCustomerDialogOpen}
                onCloseCreateDialog={handleCloseRegisterCustomerDialog}
                subscriberId={subscriberId}
            />
        </div>
    );
}