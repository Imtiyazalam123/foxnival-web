import React from 'react';
import PageHeader from '../pageheader/pageheader';
import { Box } from '@mui/material';
import SubscriptionTable from '../section/subscribers/subscriberstable';

export default function Subscribers() {
    return (
        <Box>
            <PageHeader title='Subscribers' subheader='Task Assigned to user' buttontext='Create Task' />
            <SubscriptionTable/>
        </Box>

    );
}