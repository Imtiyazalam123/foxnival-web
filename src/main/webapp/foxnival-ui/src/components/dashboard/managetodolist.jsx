// ManageToDoList.js
import React, { useState, useEffect } from 'react';
import PageHeader from '../pageheader/pageheader';
import ManageToDoListTable from '../section/managetodolist/managetodolisttable';
import { MANAGER, OWNER } from '../../constant/Role'; // Make sure path is correct

export default function ManageToDoList() {
    const [isCreateTaskDialogOpen, setIsCreateTaskDialogOpen] = useState(false);
    const [userHasHigherRole, setUserHasHigherRole] = useState(false);

    useEffect(() => {
        let loggedinUser = JSON.parse(localStorage.getItem('loggedInUser'));
        setUserHasHigherRole((loggedinUser?.role === OWNER || loggedinUser?.role === MANAGER));
    }, []);

    const handleCreateTask = () => {
        setIsCreateTaskDialogOpen(true);
    };

    const handleCloseCreateTaskDialog = () => {
        setIsCreateTaskDialogOpen(false);
    };

    return (
        <div className="w-full">
            <PageHeader
                title='Manage To Do List'
                subheader='Create and manage tasks.'
                buttontext='Create Task'
                userHasHigherRole={userHasHigherRole} // Added this prop
                onButtonClick={handleCreateTask}
            />
            <ManageToDoListTable
                isCreateDialogOpen={isCreateTaskDialogOpen}
                onCloseCreateDialog={handleCloseCreateTaskDialog}
            />
        </div>
    );
}