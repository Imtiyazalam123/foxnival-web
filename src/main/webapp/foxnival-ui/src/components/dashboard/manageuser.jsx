import React, { useEffect, useState } from 'react';
import PageHeader from '../pageheader/pageheader';
import UserManagementDashboard from '../section/manage-user/manageusertable';

export default function ManageUser() {
    const [isCreateUserDialogOpen, setIsCreateUserDialogOpen] = useState(false);
    const [subscriberId, setSubscriberId] = useState(null);

    const handleCreateUser = () => {
        setIsCreateUserDialogOpen(true);
    };

    const handleCloseCreateUserDialog = () => {
        setIsCreateUserDialogOpen(false);
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
                title='Manage User' 
                subheader='Manage user as per the task status.' 
                buttontext='Create User'
                onButtonClick={handleCreateUser}
            />
            <UserManagementDashboard 
                isCreateDialogOpen={isCreateUserDialogOpen}
                onCloseCreateDialog={handleCloseCreateUserDialog}
                subscriberId={subscriberId}
            />
        </div>
    );
}