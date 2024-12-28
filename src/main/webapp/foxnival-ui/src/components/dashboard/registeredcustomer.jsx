import React, { useState } from 'react';
import RegisteredCustomerTable from '../section/registeredcustomer/registeredcustomertable';
import PageHeader from '../pageheader/pageheader';

export default function RegisteredCustomer() {
    const [isRegisterCustomerDialogOpen, setIsRegisterCustomerDialogOpen] = useState(false);

    const handleRegisterCustomer = () => {
        setIsRegisterCustomerDialogOpen(true);
    };

    const handleCloseRegisterCustomerDialog = () => {
        setIsRegisterCustomerDialogOpen(false);
    };

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
            />
        </div>
    );
}