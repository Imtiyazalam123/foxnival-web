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
//     const [selectedCustomer, setSelectedCustomer] = useState(null);
//     const [searchQuery, setSearchQuery] = useState('');
//     const [filterStatus, setFilterStatus] = useState('');

//     // Initial customers state
//     const [customers, setCustomers] = useState([
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
//     const [newCustomers, setNewCustomers] = useState({
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
//         setSelectedCustomer(user);
//         setOpenEditDialog(true);
//     };

//     const handleSaveEditedUser = () => {
//         if (selectedCustomer) {
//             const updatedcustomers = customers.map(user =>
//                 user.id === selectedCustomer.id ? selectedCustomer : user
//             );
//             setCustomers(updatedcustomers);
//             handleCloseEditDialog();
//         }
//     };

//     const handleDeleteCustomer = (userId) => {
//         const userToDelete = customers.find(user => user.id === userId);
//         setSelectedCustomer(userToDelete || null);
//         setOpenDeleteDialog(true);
//     };

//     const handleConfirmDeleteCustomer = () => {
//         if (selectedCustomer) {
//             const updatedcustomers = customers.filter(user => user.id !== selectedCustomer.id);
//             setCustomers(updatedcustomers);
//             handleCloseDeleteDialog();
//         }
//     };

//     // Dialog close handlers
//     const handleCloseEditDialog = () => {
//         setOpenEditDialog(false);
//         setSelectedCustomer(null);
//     };

//     const handleCloseDeleteDialog = () => {
//         setOpenDeleteDialog(false);
//         setSelectedCustomer(null);
//     };

//     const handleCloseCreateDialog = () => {
//         onCloseCreateDialog();
//         setNewCustomers({
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

//         if (openEditDialog && selectedCustomer) {
//             setSelectedCustomer(prev => ({
//                 ...prev,
//                 [name]: value
//             }));
//         }

//         if (isCreateDialogOpen) {
//             setNewCustomers(prev => ({
//                 ...prev,
//                 [name]: value
//             }));
//         }
//     };

//     const handleSavenewCustomers = () => {
//         // Validate new user input
//         if (newCustomers.password !== newCustomers.confirmPassword) {
//             alert('Passwords do not match');
//             return;
//         }

//         const newCustomersEntry = {
//             id: customers.length + 1,
//             name: newCustomers.name,
//             phoneNo: newCustomers.mobileNo,
//             purpose: 'Enquiry', // Default purpose
//             source: 'offline',  // Default source
//             email: newCustomers.email
//         };

//         setCustomers(prev => [...prev, newCustomersEntry]);
//         handleCloseCreateDialog();
//     };

//     // Filtering logic
//     const filteredcustomers = useMemo(() => {
//         return customers.filter(user =>
//             user.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
//             (filterStatus === '' || user.source === filterStatus)
//         );
//     }, [customers, searchQuery, filterStatus]);

//     // Pagination logic
//     const getCurrentPageData = () => {
//         const startIndex = page * rowsPerPage;
//         return filteredcustomers.slice(startIndex, startIndex + rowsPerPage);
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
//                                                 onClick={() => handleDeleteCustomer(user.id)}
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
//                         count={filteredcustomers.length}
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
//                         value={selectedCustomer?.name || ''}
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
//                         value={selectedCustomer?.phoneNo || ''}
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
//                         value={selectedCustomer?.purpose || ''}
//                         onChange={handleInputChange}
//                     />
//                     <FormControl variant="standard" fullWidth>
//                         <InputLabel id="source-label">source</InputLabel>
//                         <Select
//                             labelId="source-label"
//                             id="source"
//                             name="source"
//                             value={selectedCustomer?.source || ''}
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
//                         value={selectedCustomer?.email || ''}
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
//                     Are you sure you want to delete {selectedCustomer?.name}?
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={handleCloseDeleteDialog}>Cancel</Button>
//                     <Button onClick={handleConfirmDeleteCustomer} color="error">
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


import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, TablePagination, Dialog, DialogTitle, DialogContent, DialogActions, TextField, InputLabel, MenuItem, FormControl, Select, Divider, IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import { toast } from 'react-toastify';
import customerServiceApi from '../../../service/CustomerService';

const RegisteredCustomerTable = ({ isCreateDialogOpen, onCloseCreateDialog, subscriberId }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [editErrors, setEditErrors] = useState({});
  const [customers, setCustomers] = useState([]);
  const [newCustomers, setNewCustomers] = useState({
    name: '',
    mobileNo: '',
    purpose: '',
    source: '',
    email: '',
    comments: ''
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

  const handleEditUser = (customer) => {
    setSelectedCustomer(customer);
    setOpenEditDialog(true);
  };

  const handleDeleteCustomer = (custId) => {
    const customerToDelete = customers.find(customer => customer?.id === custId);
    setSelectedCustomer(customerToDelete || null);
    setOpenDeleteDialog(true);
  };

  const handleConfirmDeleteCustomer = () => {
    if (selectedCustomer) {
      customerServiceApi.deleteCustomerById(selectedCustomer?.id)
        .then(() => {
          const updatedCustomer = customers.filter(customer => customer.id !== selectedCustomer?.id);
          setCustomers(updatedCustomer);
          toast.success("Customer deleted successfully.");
          handleCloseDeleteDialog();
        })
        .catch(error => {
          toast.error("Error while deleting customer.");
          console.error("Error while deleting customer:", error);
        });
    }
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
    setSelectedCustomer(null);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
    setSelectedCustomer(null);
  };

  useEffect(() => {
    if (subscriberId) {
      customerServiceApi.getCustomerDetailsBySubscriberId(subscriberId)
        .then(response => {
          setCustomers(response.data);
          toast.success("Customers fetched successfully.");
        })
        .catch(error => {
          toast.error("Error while fetching customers.");
          console.error("Error while fetching customers:", error);
        });
    }
  }, [subscriberId]);

  const handleRegisterInputChange = (event) => {
    const { name, value } = event.target;
    setNewCustomers(prev => ({ ...prev, [name]: value }));
  };

  const handleRegisterCustomer = () => {
    const newCustomersEntry = {
      subscriberId: subscriberId,
      name: newCustomers.name,
      mobileNo: newCustomers.mobileNo,
      purpose: newCustomers.purpose,
      source: newCustomers.source,
      email: newCustomers.email,
      comments: newCustomers.comments
    };

    customerServiceApi.addCustomerDetails(newCustomersEntry)
      .then(response => {
        console.log("Register customer successfully:", response.data);
        setCustomers(prevcustomers => [...prevcustomers, response.data]);
        toast.success("User Created Successfully.");
        onCloseCreateDialog();
        setNewCustomers({});
      })
      .catch(error => {
        if (error?.response?.status === 400) {
          toast.error(error?.response?.data?.errorMessage || "Error while registering customer.");
        }
        console.error("Error while registering customer: ", error);
      });
  }
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (openEditDialog && selectedCustomer) {
      setSelectedCustomer(prev => ({ ...prev, [name]: value }));
    }
    if (isCreateDialogOpen) {
      setNewCustomers(prev => ({ ...prev, [name]: value }));
    }
  };

  const filteredcustomers = useMemo(() => {
    return customers.filter(customer =>
      customer?.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filterStatus === '' || customer.source === filterStatus)
    );
  }, [customers, searchQuery, filterStatus]);

  const getCurrentPageData = () => {
    const startIndex = page * rowsPerPage;
    return filteredcustomers.slice(startIndex, startIndex + rowsPerPage);
  };


  const validateField = (name, value) => {
    const errors = {};
    
    switch (name) {
      case 'name':
        if (!value || value.trim() === '') {
          errors.name = 'Name is required';
        } else if (value.length < 2) {
          errors.name = 'Name must be at least 2 characters';
        }
        break;
      case 'mobileNo':
        const phoneRegex = /^[0-9]{10}$/;
        if (!value) {
          errors.mobileNo = 'Phone number is required';
        } else if (!phoneRegex.test(value)) {
          errors.mobileNo = 'Phone number must be 10 digits';
        }
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value && !emailRegex.test(value)) {
          errors.email = 'Invalid email format';
        }
        break;
      case 'purpose':
        if (!value || value.trim() === '') {
          errors.purpose = 'Purpose is required';
        }
        break;
      case 'source':
        if (!value) {
          errors.source = 'Source is required';
        }
        break;
    }
    
    return errors;
  };

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
    
  //   // Validate the field
  //   const fieldErrors = validateField(name, value);
    
  //   // Update errors state
  //   setEditErrors(prev => ({
  //     ...prev,
  //     ...fieldErrors
  //   }));

  //   // Update customer or new customer state
  //   if (openEditDialog && selectedCustomer) {
  //     setSelectedCustomer(prev => ({ ...prev, [name]: value }));
  //   }
  //   if (isCreateDialogOpen) {
  //     setNewCustomers(prev => ({ ...prev, [name]: value }));
  //   }
  // };

  const handleSaveEditedUser = () => {
    // Validate all fields before saving
    const allErrors = {};
    
    // Check each field
    Object.keys(selectedCustomer || {}).forEach(key => {
      const errors = validateField(key, selectedCustomer[key]);
      Object.assign(allErrors, errors);
    });

    // If there are any errors, don't proceed
    if (Object.keys(allErrors).length > 0) {
      setEditErrors(allErrors);
      return;
    }

    if (selectedCustomer && subscriberId) {
      let updatDetails = {
        name: selectedCustomer.name,
        mobileNo: selectedCustomer.mobileNo,
        purpose: selectedCustomer.purpose,
        source: selectedCustomer.source,
        email: selectedCustomer.email,
        comments: selectedCustomer.comments
      }

      customerServiceApi.updateCustomerDetails(selectedCustomer?.id, subscriberId, updatDetails)
        .then(response => {
          const updatedcustomers = customers.map(customer =>
            customer.id === selectedCustomer?.id ? response?.data : customer
          );
          setCustomers(updatedcustomers);
          toast.success("Customer updated successfully.");
          handleCloseEditDialog();
        })
        .catch(error => {
          toast.error("Error while updating customer.");
          console.error("Error while updating customer:", error);
        });
    }
  };

  // Modify the Edit Dialog to include error handling
  const renderEditDialogContent = () => (
    <>
      <TextField
        autoFocus
        margin="dense"
        id="name"
        label="Name"
        type="text"
        fullWidth
        variant="standard"
        name="name"
        value={selectedCustomer?.name || ''}
        onChange={handleInputChange}
        error={!!editErrors.name}
        helperText={editErrors.name}
      />
      <TextField
        margin="dense"
        id="phoneNo"
        label="Phone Number"
        type="text"
        fullWidth
        variant="standard"
        name="mobileNo"
        value={selectedCustomer?.mobileNo || ''}
        onChange={handleInputChange}
        error={!!editErrors.mobileNo}
        helperText={editErrors.mobileNo}
      />
      <TextField
        margin="dense"
        id="purpose"
        label="Purpose"
        type="text"
        fullWidth
        variant="standard"
        name="purpose"
        value={selectedCustomer?.purpose || ''}
        onChange={handleInputChange}
        error={!!editErrors.purpose}
        helperText={editErrors.purpose}
      />
      <FormControl 
        variant="standard" 
        fullWidth 
        error={!!editErrors.source}
      >
        <InputLabel id="source-label">Source</InputLabel>
        <Select
          labelId="source-label"
          id="source"
          name="source"
          value={selectedCustomer?.source || ''}
          onChange={handleInputChange}
        >
          <MenuItem value="Online">Online</MenuItem>
          <MenuItem value="Offline">Offline</MenuItem>
        </Select>
        {editErrors.source && <div style={{color: 'red', fontSize: '0.75rem', marginTop: '4px'}}>{editErrors.source}</div>}
      </FormControl>
      <TextField
        margin="dense"
        id="email"
        label="Email"
        type="email"
        fullWidth
        variant="standard"
        name="email"
        value={selectedCustomer?.email || ''}
        onChange={handleInputChange}
        error={!!editErrors.email}
        helperText={editErrors.email}
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
        value={selectedCustomer?.comments || ''}
        onChange={handleInputChange}
      />
    </>
  );

  
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
                      <MenuItem onClick={() => handleFilterChange('Online')}>Online</MenuItem>
                      <MenuItem onClick={() => handleFilterChange('Offline')}>Offline</MenuItem>
                    </Box>
                  </Popover>
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getCurrentPageData().map((customer) => (
                <TableRow key={customer?.id}>
                  <TableCell>{customer?.name}</TableCell>
                  <TableCell>{customer?.mobileNo}</TableCell>
                  <TableCell>{customer?.purpose}</TableCell>
                  <TableCell>{customer?.source}</TableCell>
                  <TableCell>{customer?.email || 'N/A'}</TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Tooltip title="Edit Customer" arrow placement='top'>
                        <IconButton
                          size="small"
                          color="primary"
                          onClick={() => handleEditUser(customer)}
                        >
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete Customer" arrow placement='top'>
                        <IconButton
                          size="small"
                          color="error"
                          onClick={() => handleDeleteCustomer(customer?.id)}
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
            count={filteredcustomers.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Box>

      {/* Edit Dialogs*/}
      <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
      <DialogTitle sx={{ fontWeight: 'bold' }}>Edit User</DialogTitle>
      <DialogContent>
        {renderEditDialogContent()}
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
          Are you sure you want to delete {selectedCustomer?.name}?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog}>Cancel</Button>
          <Button onClick={handleConfirmDeleteCustomer} color="error">Delete</Button>
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
            value={newCustomers.name}
            onChange={handleRegisterInputChange}
          />
          <TextField
            margin="dense"
            id="phone"
            label="Phone Number"
            type="text"
            fullWidth
            variant="standard"
            name="mobileNo"
            value={newCustomers.mobileNo}
            onChange={handleRegisterInputChange}
          />
          <TextField
            margin="dense"
            id="purpose"
            label="Purpose"
            type="text"
            fullWidth
            variant="standard"
            name="purpose"
            value={newCustomers.purpose}
            onChange={handleRegisterInputChange}
          />
          <FormControl variant="standard" fullWidth margin="dense">
            <InputLabel id="source-label">Source</InputLabel>
            <Select
              labelId="source-label"
              id="source"
              name="source"
              value={newCustomers.source}
              onChange={handleRegisterInputChange}
            >
              <MenuItem value="Online">Online</MenuItem>
              <MenuItem value="Offline">Offline</MenuItem>
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
            value={newCustomers.email}
            onChange={handleRegisterInputChange}
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
            value={newCustomers.comments}
            onChange={handleRegisterInputChange}
          />
        </DialogContent>
        <DialogActions sx={{ padding: '16px 16px 16px 0px' }}>
          <Button variant='contained' onClick={handleRegisterCustomer}>Register</Button>
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