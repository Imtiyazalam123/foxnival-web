// import React from 'react';
// import RequestsDashboard from '../section/assign-task/assigntasktable';

// export default function ManageUser() {
//     return (
//         <div className="w-full">
//             <RequestsDashboard />
//         </div>
//     );
// }


import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Modal, Checkbox, FormControlLabel } from '@mui/material';

const UserManagementUI = () => {
  const [users, setUsers] = useState([
    { id: 1, firstName: 'Ram', lastName: 'Sharma', email: '9827586239', role: 'Manager' },
    { id: 2, firstName: 'Shyam', lastName: 'Sundar', email: '9827586249', role: 'Director' },
    { id: 3, firstName: 'Salman', lastName: 'Khan', email: '9827586343', role: 'Receptionist' },
    { id: 4, firstName: 'Sohil', lastName: 'Khan', email: '9827534269', role: 'Councillor' },
    { id: 5, firstName: 'Konal', lastName: 'Yadav', email: '9827541326', role: 'Telecaller' }
  ]);

  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    password: '',
    confirmPassword: ''
  });

  const [openModal, setOpenModal] = useState(false);

  const handleCreateUser = () => {
    // Add new user logic
    setUsers([...users, newUser]);
    setNewUser({
      firstName: '',
      lastName: '',
      email: '',
      role: '',
      password: '',
      confirmPassword: ''
    });
    setOpenModal(false);
  };

  const handleUpdateUser = (user) => {
    // Update user logic
  };

  const handleDeleteUser = (userId) => {
    // Delete user logic
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h5">User Management</Typography>
        <Button variant="contained" onClick={() => setOpenModal(true)}>
          Create User
        </Button>
      </Box>

      <Box>
        {users.map((user) => (
          <Box key={user.id} display="flex" alignItems="center" justifyContent="space-between" mb={2}>
            <Typography>{`${user.firstName} ${user.lastName}`}</Typography>
            <Box>
              <Button variant="outlined" onClick={() => handleUpdateUser(user)}>
                Update
              </Button>
              <Button variant="outlined" color="error" onClick={() => handleDeleteUser(user.id)}>
                Delete
              </Button>
            </Box>
          </Box>
        ))}
      </Box>

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box
          bgcolor="background.paper"
          p={4}
          borderRadius={2}
          width="400px"
          margin="0 auto"
          marginTop="100px"
        >
          <Typography variant="h6" mb={2}>
            Create User
          </Typography>
          <TextField
            label="First Name"
            variant="outlined"
            value={newUser.firstName}
            onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
            fullWidth
            mb={2}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            value={newUser.lastName}
            onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
            fullWidth
            mb={2}
          />
          <TextField
            label="Email"
            variant="outlined"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            fullWidth
            mb={2}
          />
          <TextField
            label="Role"
            variant="outlined"
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            fullWidth
            mb={2}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            value={newUser.password}
            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
            fullWidth
            mb={2}
          />
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            value={newUser.confirmPassword}
            onChange={(e) => setNewUser({ ...newUser, confirmPassword: e.target.value })}
            fullWidth
            mb={2}
          />
          <Box display="flex" justifyContent="flex-end">
            <Button variant="contained" onClick={handleCreateUser}>
              Submit
            </Button>
            <Button variant="outlined" onClick={() => setOpenModal(false)} ml={2}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default UserManagementUI;