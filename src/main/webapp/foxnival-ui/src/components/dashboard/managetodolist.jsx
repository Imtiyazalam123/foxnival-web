import React, { useState } from 'react';
import PageHeader from '../pageheader/pageheader';
import ManageToDoListTable from '../section/managetodolist/managetodolisttable';

export default function ManageToDoList() {
   const [isCreateTaskDialogOpen, setIsCreateTaskDialogOpen] = useState(false);

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
               onButtonClick={handleCreateTask}
           />
           <ManageToDoListTable
               isCreateDialogOpen={isCreateTaskDialogOpen}
               onCloseCreateDialog={handleCloseCreateTaskDialog}
           />
       </div>
   );
}