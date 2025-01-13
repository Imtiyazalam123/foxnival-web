import React from 'react';
import RequestsDashboard from '../section/assign-task/assigntasktable';
import PageHeader from '../pageheader/pageheader';
import { Box, Container } from '@mui/material';

export default function AssignedTask() {
    return (
        <Box>
            <PageHeader title='Task Assigned' subheader='Task Assigned to user' buttontext='Create Task' />
            <RequestsDashboard />
        </Box>

    );
}