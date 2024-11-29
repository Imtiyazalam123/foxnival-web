import React from 'react';
import RequestsDashboard from '../section/assign-task/assigntasktable';
import PageHeader from '../pageheader/pageheader';

export default function AssignedTask() {
    return (
        <div className="w-full">
            <PageHeader title='Task Assigned' subheader='Task Assigned to user' buttontext='Create Task' />
            <RequestsDashboard />
        </div>
    );
}