import React, { useState } from 'react';
import PageHeader from '../pageheader/pageheader';
import UserManagementDashboard from '../section/manage-user/manageusertable';

export default function ManageUser() {
    const [isCreateUserDialogOpen, setIsCreateUserDialogOpen] = useState(false);

    const handleCreateUser = () => {
        setIsCreateUserDialogOpen(true);
    };

    const handleCloseCreateUserDialog = () => {
        setIsCreateUserDialogOpen(false);
    };

    return (
        <div className="w-full">
            <PageHeader 
                title='Manage User' 
                subheader='Manage user as per the task status.' 
                buttontext='Create User'
                onButtonClick={handleCreateUser}
            />
            <UserManagementDashboard 
                isCreateDialogOpen={isCreateUserDialogOpen}
                onCloseCreateDialog={handleCloseCreateUserDialog}
            />
        </div>
    );
}