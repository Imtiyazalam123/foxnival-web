import React, { useEffect, useState } from 'react';
import RequestsDashboard from '../section/assign-task/assigntasktable';
import PageHeader from '../pageheader/pageheader';
import { Box } from '@mui/material';
import { MANAGER, OWNER } from '../../constant/Role';

export default function AssignedTask() {
    const [userHasHigherRole, setUserHasHigherRole] = useState(false);
    
    useEffect(() => {
        let loggedinUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
        setUserHasHigherRole((loggedinUser?.role === OWNER || loggedinUser?.role === MANAGER));
    }, []);
    
    const handleAddTask = () => {
        console.log('Add task clicked');
    };

    return (
        <Box>
            <PageHeader 
                title='Task Assigned' 
                subheader='Task Assigned to user' 
                // buttontext="Add Task" 
                // userHasHigherRole={userHasHigherRole}
                // onButtonClick={handleAddTask}  
            />
            <RequestsDashboard userHasHigherRole={userHasHigherRole}/>
        </Box>
    );
}