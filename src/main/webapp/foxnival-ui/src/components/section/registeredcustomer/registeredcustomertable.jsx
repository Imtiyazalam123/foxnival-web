// import React, { useState, useMemo } from 'react';
// import PropTypes from 'prop-types';
// import {
//     Box,
//     TableContainer,
//     Table,
//     TableHead,
//     TableBody,
//     TableRow,
//     TableCell,
//     Paper,
//     TablePagination,
//     Button,
//     Dialog,
//     DialogTitle,
//     DialogContent,
//     DialogActions,
//     TextField,
//     InputLabel,
//     MenuItem,
//     FormControl,
//     Select,
//     Divider
// } from '@mui/material';

// // Predefined designation options
// const designationOptions = [
//     'Manager',
//     'Sales Representative',
//     'Customer Support',
//     'Admin'
// ];

// const RegisteredCustomerTable = ({ isCreateDialogOpen, onCloseCreateDialog }) => {
//     const [page, setPage] = useState(0);
//     const [rowsPerPage, setRowsPerPage] = useState(10);
//     const [openEditDialog, setOpenEditDialog] = useState(false);
//     const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
//     const [selectedUser, setSelectedUser] = useState(null);
//     const [searchQuery, setSearchQuery] = useState('');
//     const [filterStatus, setFilterStatus] = useState('');

//     // Initial users state
//     const [users, setUsers] = useState([
//         {
//             id: 1,
//             name: 'Ram Sharma',
//             phoneNo: '9898989898',
//             purpose: 'Enquiry',
//             source: 'offline',
//             email: 'ram@example.com'
//         },
//         {
//             id: 2,
//             name: 'Shyam Rajput',
//             phoneNo: '8787878787',
//             purpose: 'Enquiry',
//             source: 'online',
//             email: 'shyam@example.com'
//         },
//         {
//             id: 3,
//             name: 'Rohit',
//             phoneNo: '5267825672',
//             purpose: 'Enquiry',
//             source: 'offline',
//             email: 'rohit@example.com'
//         },
//         {
//             id: 4,
//             name: 'Hema',
//             phoneNo: '9256872357',
//             purpose: 'Enquiry',
//             source: 'offline',
//             email: 'hema@example.com'
//         },
//         {
//             id: 5,
//             name: 'Salim',
//             phoneNo: '8562335548',
//             purpose: 'Enquiry',
//             source: 'offline',
//             email: 'salim@example.com'
//         },
//         {
//             id: 6,
//             name: 'Ramu',
//             phoneNo: '8259613345',
//             purpose: 'Enquiry',
//             source: 'offline',
//             email: 'ramu@example.com'
//         },
//         {
//             id: 7,
//             name: 'Karan',
//             phoneNo: '9334215796',
//             purpose: 'Enquiry',
//             source: 'offline',
//             email: 'karan@example.com'
//         },
//         {
//             id: 8,
//             name: 'Vivek',
//             phoneNo: '9112387625',
//             purpose: 'Enquiry',
//             source: 'offline',
//             email: 'vivek@example.com'
//         },
//         {
//             id: 9,
//             name: 'Aarodhya',
//             phoneNo: '9325675942',
//             purpose: 'Enquiry',
//             source: 'offline',
//             email: 'aarodhya@example.com'
//         }
//     ]);

//     // New user state
//     const [newUser, setNewUser] = useState({
//         name: '',
//         email: '',
//         designation: '',
//         mobileNo: '',
//         password: '',
//         confirmPassword: ''
//     });

//     // Page change handlers
//     const handleChangePage = (event, newPage) => {
//         setPage(newPage);
//     };

//     const handleChangeRowsPerPage = (event) => {
//         setRowsPerPage(parseInt(event.target.value, 10));
//         setPage(0);
//     };

//     // Search and filter handlers
//     const handleSearchChange = (event) => {
//         setSearchQuery(event.target.value);
//         setPage(0);
//     };

//     const handleFilterChange = (event) => {
//         setFilterStatus(event.target.value);
//         setPage(0);
//     };

//     // User management handlers
//     const handleEditUser = (user) => {
//         setSelectedUser(user);
//         setOpenEditDialog(true);
//     };

//     const handleSaveEditedUser = () => {
//         if (selectedUser) {
//             const updatedUsers = users.map(user =>
//                 user.id === selectedUser.id ? selectedUser : user
//             );
//             setUsers(updatedUsers);
//             handleCloseEditDialog();
//         }
//     };

//     const handleDeleteUser = (userId) => {
//         const userToDelete = users.find(user => user.id === userId);
//         setSelectedUser(userToDelete || null);
//         setOpenDeleteDialog(true);
//     };

//     const handleConfirmDeleteUser = () => {
//         if (selectedUser) {
//             const updatedUsers = users.filter(user => user.id !== selectedUser.id);
//             setUsers(updatedUsers);
//             handleCloseDeleteDialog();
//         }
//     };

//     // Dialog close handlers
//     const handleCloseEditDialog = () => {
//         setOpenEditDialog(false);
//         setSelectedUser(null);
//     };

//     const handleCloseDeleteDialog = () => {
//         setOpenDeleteDialog(false);
//         setSelectedUser(null);
//     };

//     const handleCloseCreateDialog = () => {
//         onCloseCreateDialog();
//         setNewUser({
//             name: '',
//             email: '',
//             designation: '',
//             mobileNo: '',
//             password: '',
//             confirmPassword: ''
//         });
//     };

//     // Input change handlers
//     const handleInputChange = (event) => {
//         const { name, value } = event.target;

//         if (openEditDialog && selectedUser) {
//             setSelectedUser(prev => ({
//                 ...prev,
//                 [name]: value
//             }));
//         }

//         if (isCreateDialogOpen) {
//             setNewUser(prev => ({
//                 ...prev,
//                 [name]: value
//             }));
//         }
//     };

//     const handleSaveNewUser = () => {
//         // Validate new user input
//         if (newUser.password !== newUser.confirmPassword) {
//             alert('Passwords do not match');
//             return;
//         }

//         const newUserEntry = {
//             id: users.length + 1,
//             name: newUser.name,
//             phoneNo: newUser.mobileNo,
//             purpose: 'Enquiry', // Default purpose
//             source: 'offline',  // Default source
//             email: newUser.email
//         };

//         setUsers(prev => [...prev, newUserEntry]);
//         handleCloseCreateDialog();
//     };

//     // Filtering logic
//     const filteredUsers = useMemo(() => {
//         return users.filter(user =>
//             user.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
//             (filterStatus === '' || user.source === filterStatus)
//         );
//     }, [users, searchQuery, filterStatus]);

//     // Pagination logic
//     const getCurrentPageData = () => {
//         const startIndex = page * rowsPerPage;
//         return filteredUsers.slice(startIndex, startIndex + rowsPerPage);
//     };

//     return (
//         <Box sx={{ p: 4, bgcolor: 'grey.50' }}>
//             {/* Search and Filter Section */}
//             <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
//                 <TextField
//                     variant="outlined"
//                     value={searchQuery}
//                     onChange={handleSearchChange}
//                     size="small"
//                     placeholder="Search by Customer Name"
//                     sx={{ minWidth: 200 }}
//                 />
//                 <FormControl variant="outlined" size="small" sx={{ minWidth: 150 }}>
//                     <InputLabel id="filter-source-label">Filter by source</InputLabel>
//                     <Select
//                         labelId="filter-source-label"
//                         id="filter-source"
//                         value={filterStatus}
//                         onChange={handleFilterChange}
//                     >
//                         <MenuItem value="">All</MenuItem>
//                         <MenuItem value="online">Online</MenuItem>
//                         <MenuItem value="offline">Offline</MenuItem>
//                     </Select>
//                 </FormControl>
//             </Box>

//             {/* User Table */}
//             <Box sx={{ bgcolor: 'white', border: 1, borderColor: 'grey.200', borderRadius: 1 }}>
//                 <TableContainer component={Paper}>
//                     <Table>
//                         <TableHead>
//                             <TableRow>
//                                 {['Name', 'Phone Number', 'Purpose', 'Source', 'Email', 'Actions']
//                                     .map(header => (
//                                         <TableCell key={header} sx={{ fontWeight: 'bold' }}>
//                                             {header}
//                                         </TableCell>
//                                     ))}
//                             </TableRow>
//                         </TableHead>

//                         <TableBody>
//                             {getCurrentPageData().map((user) => (
//                                 <TableRow key={user.id}>
//                                     <TableCell>{user.name}</TableCell>
//                                     <TableCell>{user.phoneNo}</TableCell>
//                                     <TableCell>{user.purpose}</TableCell>
//                                     <TableCell>{user.source}</TableCell>
//                                     <TableCell>{user.email || 'N/A'}</TableCell>
//                                     <TableCell>
//                                         <Box sx={{ display: 'flex', gap: 1 }}>
//                                             <Button
//                                                 variant="outlined"
//                                                 size="small"
//                                                 onClick={() => handleEditUser(user)}
//                                             >
//                                                 Edit
//                                             </Button>
//                                             <Button
//                                                 variant="outlined"
//                                                 color="error"
//                                                 size="small"
//                                                 onClick={() => handleDeleteUser(user.id)}
//                                             >
//                                                 Delete
//                                             </Button>
//                                         </Box>
//                                     </TableCell>
//                                 </TableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                     <TablePagination
//                         rowsPerPageOptions={[5, 10, 25]}
//                         component="div"
//                         count={filteredUsers.length}
//                         rowsPerPage={rowsPerPage}
//                         page={page}
//                         onPageChange={handleChangePage}
//                         onRowsPerPageChange={handleChangeRowsPerPage}
//                     />
//                 </TableContainer>
//             </Box>

//             {/* Edit User Dialog */}
//             <Dialog
//                 open={openEditDialog}
//                 onClose={handleCloseEditDialog}
//             >
//                 <DialogTitle sx={{ fontWeight: 'bold' }}>
//                     Edit User
//                 </DialogTitle>
//                 <DialogContent>
//                     <TextField
//                         autoFocus
//                         margin="dense"
//                         id="name"
//                         label="Name"
//                         type="text"
//                         fullWidth
//                         variant="standard"
//                         name="name"
//                         value={selectedUser?.name || ''}
//                         onChange={handleInputChange}
//                     />
//                     <TextField
//                         margin="dense"
//                         id="phoneNo"
//                         label="Phone Number"
//                         type="text"
//                         fullWidth
//                         variant="standard"
//                         name="phoneNo"
//                         value={selectedUser?.phoneNo || ''}
//                         onChange={handleInputChange}
//                     />
//                     <TextField
//                         margin="dense"
//                         id="purpose"
//                         label="Purpose"
//                         type="text"
//                         fullWidth
//                         variant="standard"
//                         name="purpose"
//                         value={selectedUser?.purpose || ''}
//                         onChange={handleInputChange}
//                     />
//                     <FormControl variant="standard" fullWidth>
//                         <InputLabel id="source-label">source</InputLabel>
//                         <Select
//                             labelId="source-label"
//                             id="source"
//                             name="source"
//                             value={selectedUser?.source || ''}
//                             onChange={handleInputChange}
//                         >
//                             <MenuItem value="online">Online</MenuItem>
//                             <MenuItem value="offline">Offline</MenuItem>
//                         </Select>
//                     </FormControl>
//                     <TextField
//                         margin="dense"
//                         id="email"
//                         label="Email"
//                         type="email"
//                         fullWidth
//                         variant="standard"
//                         name="email"
//                         value={selectedUser?.email || ''}
//                         onChange={handleInputChange}
//                     />
//                 </DialogContent>
//                 <DialogActions sx={{ padding: '16px 16px 16px 0px' }}>
//                     <Button variant='contained' onClick={handleSaveEditedUser}>
//                         Save
//                     </Button>
//                     <Button variant='outlined' onClick={handleCloseEditDialog}>
//                         Cancel
//                     </Button>
//                 </DialogActions>
//             </Dialog>

//             {/* Delete User Dialog */}
//             <Dialog
//                 open={openDeleteDialog}
//                 onClose={handleCloseDeleteDialog}
//                 aria-labelledby="alert-dialog-title"
//                 aria-describedby="alert-dialog-description"
//             >
//                 <DialogTitle id="alert-dialog-title">
//                     Confirm Delete
//                 </DialogTitle>
//                 <DialogContent id="alert-dialog-description">
//                     Are you sure you want to delete {selectedUser?.name}?
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={handleCloseDeleteDialog}>Cancel</Button>
//                     <Button onClick={handleConfirmDeleteUser} color="error">
//                         Delete
//                     </Button>
//                 </DialogActions>
//             </Dialog>

//             {/* Register User Dialog */}
//             <Dialog
//                 open={isCreateDialogOpen}
//                 onClose={onCloseCreateDialog}
//             >
//                 <DialogTitle sx={{ fontWeight: 'bold' }}>
//                     Register Customer
//                 </DialogTitle>
//                 <Divider sx={{ borderStyle: '1px', color: 'black' }} />
//                 <DialogContent>
//                     <TextField
//                         autoFocus
//                         margin="dense"
//                         id="name"
//                         label="Name"
//                         type="text"
//                         fullWidth
//                         variant="standard"
//                         name="name"
//                     // value={newCustomer.name}
//                     // onChange={handleInputChange}
//                     />
//                     <TextField
//                         margin="dense"
//                         id="phone"
//                         label="Phone Number"
//                         type="text"
//                         fullWidth
//                         variant="standard"
//                         name="phone"
//                     // value={newCustomer.phone}
//                     // onChange={handleInputChange}
//                     />
//                     <TextField
//                         margin="dense"
//                         id="purpose"
//                         label="Purpose"
//                         type="text"
//                         fullWidth
//                         variant="standard"
//                         name="purpose"
//                     // value={newCustomer.purpose}
//                     // onChange={handleInputChange}
//                     />
//                     <FormControl variant="standard" fullWidth margin="dense">
//                         <InputLabel id="source-label">Source</InputLabel>
//                         <Select
//                             labelId="source-label"
//                             id="source"
//                             name="source"
//                         // value={newCustomer.source}
//                         // onChange={handleInputChange}
//                         >
//                             <MenuItem value="online">Online</MenuItem>
//                             <MenuItem value="offline">Offline</MenuItem>
//                         </Select>
//                     </FormControl>
//                     <TextField
//                         margin="dense"
//                         id="email"
//                         label="Email"
//                         type="email"
//                         fullWidth
//                         variant="standard"
//                         name="email"
//                     // value={newCustomer.email}
//                     // onChange={handleInputChange}
//                     />
//                     <TextField
//                         margin="dense"
//                         id="comments"
//                         label="Comments"
//                         type="text"
//                         multiline
//                         rows={3}
//                         fullWidth
//                         variant="standard"
//                         name="comments"
//                     // value={newCustomer.comments}
//                     // onChange={handleInputChange}
//                     />
//                 </DialogContent>
//                 <DialogActions sx={{ padding: '16px 16px 16px 0px' }}>
//                     <Button variant='contained' >
//                         Register
//                     </Button>
//                     <Button variant='outlined' onClick={onCloseCreateDialog}>
//                         Cancel
//                     </Button>
//                 </DialogActions>
//             </Dialog>
//         </Box>
//     );
// };


// export default RegisteredCustomerTable;


import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Box, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, TablePagination, Dialog, DialogTitle, DialogContent, DialogActions, TextField, InputLabel, MenuItem, FormControl, Select, Divider, IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';

const RegisteredCustomerTable = ({ isCreateDialogOpen, onCloseCreateDialog }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  const [users, setUsers] = useState([
            {
                id: 1,
                name: 'Ram Sharma',
                phoneNo: '9898989898',
                purpose: 'Enquiry',
                source: 'offline',
                email: 'ram@example.com'
            },
            {
                id: 2,
                name: 'Shyam Rajput',
                phoneNo: '8787878787',
                purpose: 'Enquiry',
                source: 'online',
                email: 'shyam@example.com'
            },
            {
                id: 3,
                name: 'Rohit',
                phoneNo: '5267825672',
                purpose: 'Enquiry',
                source: 'offline',
                email: 'rohit@example.com'
            },
            {
                id: 4,
                name: 'Hema',
                phoneNo: '9256872357',
                purpose: 'Enquiry',
                source: 'offline',
                email: 'hema@example.com'
            },
            {
                id: 5,
                name: 'Salim',
                phoneNo: '8562335548',
                purpose: 'Enquiry',
                source: 'offline',
                email: 'salim@example.com'
            },
            {
                id: 6,
                name: 'Ramu',
                phoneNo: '8259613345',
                purpose: 'Enquiry',
                source: 'offline',
                email: 'ramu@example.com'
            },
            {
                id: 7,
                name: 'Karan',
                phoneNo: '9334215796',
                purpose: 'Enquiry',
                source: 'offline',
                email: 'karan@example.com'
            },
            {
                id: 8,
                name: 'Vivek',
                phoneNo: '9112387625',
                purpose: 'Enquiry',
                source: 'offline',
                email: 'vivek@example.com'
            },
            {
                id: 9,
                name: 'Aarodhya',
                phoneNo: '9325675942',
                purpose: 'Enquiry',
                source: 'offline',
                email: 'aarodhya@example.com'
            }
        ]);

  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    designation: '',
    mobileNo: '',
    password: '',
    confirmPassword: ''
  });

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleOpenFilter = (event) => setAnchorEl(event.currentTarget);
  const handleCloseFilter = () => setAnchorEl(null);
  const handleFilterChange = (source) => {
    setFilterStatus(source);
    setPage(0);
    handleCloseFilter();
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setOpenEditDialog(true);
  };

  const handleSaveEditedUser = () => {
    if (selectedUser) {
      const updatedUsers = users.map(user =>
        user.id === selectedUser.id ? selectedUser : user
      );
      setUsers(updatedUsers);
      handleCloseEditDialog();
    }
  };

  const handleDeleteUser = (userId) => {
    const userToDelete = users.find(user => user.id === userId);
    setSelectedUser(userToDelete || null);
    setOpenDeleteDialog(true);
  };

  const handleConfirmDeleteUser = () => {
    if (selectedUser) {
      const updatedUsers = users.filter(user => user.id !== selectedUser.id);
      setUsers(updatedUsers);
      handleCloseDeleteDialog();
    }
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
    setSelectedUser(null);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
    setSelectedUser(null);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (openEditDialog && selectedUser) {
      setSelectedUser(prev => ({ ...prev, [name]: value }));
    }
    if (isCreateDialogOpen) {
      setNewUser(prev => ({ ...prev, [name]: value }));
    }
  };

  const filteredUsers = useMemo(() => {
    return users.filter(user =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filterStatus === '' || user.source === filterStatus)
    );
  }, [users, searchQuery, filterStatus]);

  const getCurrentPageData = () => {
    const startIndex = page * rowsPerPage;
    return filteredUsers.slice(startIndex, startIndex + rowsPerPage);
  };

  return (
    <Box >
      <Box sx={{ bgcolor: 'white', border: 1, borderColor: 'grey.200', borderRadius: 1 }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <TextField
                    size="small"
                    variant="standard"
                    placeholder="Search by Name"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    sx={{
                      '& .MuiInput-underline:before': { borderBottom: 'none' },
                      '& .MuiInput-underline:hover:before': { borderBottom: 'none' },
                      '& .MuiInput-underline:after': { borderBottom: 'none' },
                      '& .MuiInputBase-input': {
                          fontWeight: 'bold',
                          color: 'rgba(0, 0, 0, 0.87)',
                          fontSize: '14px',
                          fontFamily: 'inherit'
                      },
                      '& .MuiInputBase-input::placeholder': {
                          color: 'rgba(0, 0, 0, 0.87)',
                          opacity: 1
                      }
                  }}
                  />
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Phone Number</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Purpose</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }} onClick={handleOpenFilter}>
                    Source
                    <KeyboardArrowDownIcon />
                  </Box>
                  <Popover
                    open={Boolean(anchorEl)}
                    anchorEl={anchorEl}
                    onClose={handleCloseFilter}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                  >
                    <Box sx={{ p: 1 }}>
                      <MenuItem onClick={() => handleFilterChange('')}>All</MenuItem>
                      <MenuItem onClick={() => handleFilterChange('online')}>Online</MenuItem>
                      <MenuItem onClick={() => handleFilterChange('offline')}>Offline</MenuItem>
                    </Box>
                  </Popover>
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getCurrentPageData().map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.phoneNo}</TableCell>
                  <TableCell>{user.purpose}</TableCell>
                  <TableCell>{user.source}</TableCell>
                  <TableCell>{user.email || 'N/A'}</TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Tooltip title="Edit Customer" arrow placement='top'>
                        <IconButton
                          size="small"
                          color="primary"
                          onClick={() => handleEditUser(user)}
                        >
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete Customer" arrow placement='top'>
                        <IconButton
                          size="small"
                          color="error"
                          onClick={() => handleDeleteUser(user.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
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

      {/* Dialogs remain unchanged */}
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
            value={selectedUser?.name || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            id="phoneNo"
            label="Phone Number"
            type="text"
            fullWidth
            variant="standard"
            name="phoneNo"
            value={selectedUser?.phoneNo || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            id="purpose"
            label="Purpose"
            type="text"
            fullWidth
            variant="standard"
            name="purpose"
            value={selectedUser?.purpose || ''}
            onChange={handleInputChange}
          />
          <FormControl variant="standard" fullWidth>
            <InputLabel id="source-label">Source</InputLabel>
            <Select
              labelId="source-label"
              id="source"
              name="source"
              value={selectedUser?.source || ''}
              onChange={handleInputChange}
            >
              <MenuItem value="online">Online</MenuItem>
              <MenuItem value="offline">Offline</MenuItem>
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            name="email"
            value={selectedUser?.email || ''}
            onChange={handleInputChange}
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
        <DialogTitle id="alert-dialog-title">Confirm Delete</DialogTitle>
        <DialogContent id="alert-dialog-description">
          Are you sure you want to delete {selectedUser?.name}?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog}>Cancel</Button>
          <Button onClick={handleConfirmDeleteUser} color="error">Delete</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={isCreateDialogOpen} onClose={onCloseCreateDialog}>
        <DialogTitle sx={{ fontWeight: 'bold' }}>Register Customer</DialogTitle>
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
          />
          <TextField
            margin="dense"
            id="phone"
            label="Phone Number"
            type="text"
            fullWidth
            variant="standard"
            name="phone"
          />
          <TextField
            margin="dense"
            id="purpose"
            label="Purpose"
            type="text"
            fullWidth
            variant="standard"
            name="purpose"
          />
          <FormControl variant="standard" fullWidth margin="dense">
            <InputLabel id="source-label">Source</InputLabel>
            <Select
              labelId="source-label"
              id="source"
              name="source"
            >
              <MenuItem value="online">Online</MenuItem>
              <MenuItem value="offline">Offline</MenuItem>
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            name="email"
          />
          <TextField
            margin="dense"
            id="comments"
            label="Comments"
            type="text"
            multiline
            rows={3}
            fullWidth
            variant="standard"
            name="comments"
          />
        </DialogContent>
        <DialogActions sx={{ padding: '16px 16px 16px 0px' }}>
          <Button variant='contained'>Register</Button>
          <Button variant='outlined' onClick={onCloseCreateDialog}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

RegisteredCustomerTable.propTypes = {
  isCreateDialogOpen: PropTypes.bool.isRequired,
  onCloseCreateDialog: PropTypes.func.isRequired,
};

export default RegisteredCustomerTable;