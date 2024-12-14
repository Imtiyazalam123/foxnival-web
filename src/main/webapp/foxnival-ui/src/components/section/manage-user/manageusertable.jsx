import React, { useState, useMemo } from 'react';
import { Box, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, TablePagination, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, InputLabel, MenuItem, FormControl, Select, Divider } from '@mui/material';

const UserManagementDashboard = ({ isCreateDialogOpen, onCloseCreateDialog }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [newUser, setNewUser] = useState({
    id: null,
    name: '',
    email: '',
    designation: '',
    status: '',
    mobileNo: ''
  });

  const designationOptions = [
    'Receptionist',
    'Manager',
    'Telecaller',
    'HR',
    'Sales Representative'
  ];

  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Ram Sharma',
      designation: 'Receptionist Director',
      status: 'Active',
      mobileNo: '9898989898'
    },
    {
      id: 2,
      name: 'Shyam Sundar',
      designation: 'Manager counsellor',
      status: 'Active',
      mobileNo: '9797979797'
    },
    {
      id: 3,
      name: 'Salman Khan',
      designation: 'Telecaller',
      status: 'Active',
      mobileNo: '9696969696'
    },
    {
      id: 4,
      name: 'Sohil Khan',
      designation: 'Manager counsellor',
      status: 'Active',
      mobileNo: '9494949494'
    },
    {
      id: 5,
      name: 'Konal Yadav',
      designation: 'Telecaller',
      status: 'Inactive',
      mobileNo: '9393939399'
    }
  ]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setPage(0);
  };

  const handleFilterChange = (event) => {
    setFilterStatus(event.target.value);
    setPage(0);
  };

  const handleSaveNewUser = () => {
    const newUserId = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
    const updatedUsers = [...users, { ...newUser, id: newUserId }];
    setUsers(updatedUsers);
    onCloseCreateDialog();
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setNewUser(user);
    setOpenEditDialog(true);
  };

  const handleSaveEditedUser = () => {
    const updatedUsers = users.map(user => user.id === newUser.id ? newUser : user);
    setUsers(updatedUsers);
    handleCloseEditDialog();
  };

  const handleDeleteUser = (userId) => {
    setSelectedUser(users.find(user => user.id === userId));
    setOpenDeleteDialog(true);
  };

  const handleConfirmDeleteUser = () => {
    const updatedUsers = users.filter(user => user.id !== selectedUser.id);
    setUsers(updatedUsers);
    handleCloseDeleteDialog();
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
    setSelectedUser(null);
    setNewUser({
      id: null,
      name: '',
      designation: '',
      status: 'Active',
      mobileNo: ''
    });
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
    setSelectedUser(null);
  };

  const handleInputChange = (event) => {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value
    });
  };

  const filteredUsers = useMemo(() => {
    return users.filter(user =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filterStatus === '' || user.status === filterStatus)
    );
  }, [users, searchQuery, filterStatus]);

  const getCurrentPageData = () => {
    const startIndex = page * rowsPerPage;
    return filteredUsers.slice(startIndex, startIndex + rowsPerPage);
  };

  return (
    <Box sx={{ p: 4, bgcolor: 'grey.50' }}>
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <TextField
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
          size="small"
          placeholder="Search by User Name"
          sx={{ minWidth: 200 }}
        />
        <TextField
          select
          variant="outlined"
          value={filterStatus}
          onChange={handleFilterChange}
          size="small"
          label="Filter by Status"
          sx={{ minWidth: 150 }}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Active">Active</MenuItem>
          <MenuItem value="Inactive">Inactive</MenuItem>
        </TextField>
      </Box>

      <Box sx={{ bgcolor: 'white', border: 1, borderColor: 'grey.200', borderRadius: 1 }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Designation</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Mobile No.</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {getCurrentPageData().map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.designation}</TableCell>
                  <TableCell>{user.status}</TableCell>
                  <TableCell>{user.mobileNo}</TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Button variant="outlined" size="small" onClick={() => handleEditUser(user)}>
                        Edit
                      </Button>
                      <Button variant="outlined" color="error" size="small" onClick={() => handleDeleteUser(user.id)}>
                        Delete
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredUsers.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Box>

      <Dialog open={isCreateDialogOpen} onClose={onCloseCreateDialog}>
        <DialogTitle sx={{ fontWeight: 'bold' }}>Create User</DialogTitle>
        <Divider sx={{ borderStyle: '1px', color: 'black' }} />
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            name="name"
            value={newUser.name}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            name="email"
            value={newUser.email}
            onChange={handleInputChange}
          />
          <FormControl variant="standard" fullWidth margin="dense">
            <InputLabel id="designation-label">Designation</InputLabel>
            <Select
              labelId="designation-label"
              id="designation"
              name="designation"
              value={newUser.designation}
              onChange={handleInputChange}
            >
              {designationOptions.map(designation => (
                <MenuItem key={designation} value={designation}>
                  {designation}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {/* <FormControl variant="standard" fullWidth margin="dense">
            <InputLabel id="status-label">Status</InputLabel>
            <Select
              labelId="status-label"
              id="status"
              name="status"
              value={newUser.status}
              onChange={handleInputChange}
            >
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </Select>
          </FormControl> */}
          <TextField
            margin="dense"
            id="mobile"
            label="Mobile No."
            type="text"
            fullWidth
            variant="standard"
            name="mobileNo"
            value={newUser.mobileNo}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            name="password"
            value={newUser.password}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            fullWidth
            variant="standard"
            name="confirmPassword"
            value={newUser.confirmPassword}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions sx={{ padding: '16px 16px 16px 0px' }}>
          <Button variant='contained' onClick={handleSaveNewUser}>Save</Button>
          <Button variant='outlined' onClick={onCloseCreateDialog}>Cancel</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
        <DialogTitle sx={{ fontWeight: 'bold' }}>Edit User</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            name="name"
            value={newUser.name}
            onChange={handleInputChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="text"
            fullWidth
            variant="standard"
            name="name"
          // value={newUser.name}
          // onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            id="designation"
            label="Designation"
            type="text"
            fullWidth
            variant="standard"
            name="designation"
            value={newUser.designation}
            onChange={handleInputChange}
          />
          <FormControl variant="standard" fullWidth>
            <InputLabel id="status-label">Status</InputLabel>
            <Select
              labelId="status-label"
              id="status"
              name="status"
              value={newUser.status}
              onChange={handleInputChange}
            >
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            id="mobile"
            label="Mobile No."
            type="text"
            fullWidth
            variant="standard"
            name="mobileNo"
            value={newUser.mobileNo}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            name="password"
          // value={newUser.password}
          // onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            fullWidth
            variant="standard"
            name="confirmPassword"
          // value={newUser.confirmPassword}
          // onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions sx={{ padding: '16px 16px 16px 0px' }}>
          <Button variant='contained' onClick={handleSaveEditedUser}>Save</Button>
          <Button variant='outlined' onClick={handleCloseEditDialog}>Cancel</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openDeleteDialog}
        onClose={handleCloseDeleteDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Confirm Delete
        </DialogTitle>
        <DialogContent id="alert-dialog-description">
          Are you sure you want to delete {selectedUser?.name}?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog}>Cancel</Button>
          <Button onClick={handleConfirmDeleteUser} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UserManagementDashboard;