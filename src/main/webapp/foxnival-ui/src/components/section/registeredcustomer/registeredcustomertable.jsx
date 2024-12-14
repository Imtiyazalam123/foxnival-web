import React, { useState, useMemo } from 'react';
import { Box, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, TablePagination, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, InputLabel, MenuItem, FormControl, Select, Divider } from '@mui/material';

const RegisteredCustomerTable = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterStatus, setFilterStatus] = useState('');

    const [users, setUsers] = useState([
        {
            id: 1,
            name: 'Ram Sharma',
            phoneNo: '9898989898',
            purpose: 'Enquiry',
            status: 'offline',
            email: 'ram@example.com'
        },
        {
            id: 2,
            name: 'Shyam Rajput',
            phoneNo: '8787878787',
            purpose: 'Enquiry',
            status: 'online',
            email: 'shyam@example.com'
        },
        {
            id: 3,
            name: 'Rohit',
            phoneNo: '5267825672',
            purpose: 'Enquiry',
            status: 'offline',
            email: 'rohit@example.com'
        },
        {
            id: 4,
            name: 'Hema',
            phoneNo: '9256872357',
            purpose: 'Enquiry',
            status: 'offline',
            email: 'hema@example.com'
        },
        {
            id: 5,
            name: 'Salim',
            phoneNo: '8562335548',
            purpose: 'Enquiry',
            status: 'offline',
            email: 'salim@example.com'
        },
        {
            id: 6,
            name: 'Ramu',
            phoneNo: '8259613345',
            purpose: 'Enquiry',
            status: 'offline',
            email: 'ramu@example.com'
        },
        {
            id: 7,
            name: 'Karan',
            phoneNo: '9334215796',
            purpose: 'Enquiry',
            status: 'offline',
            email: 'karan@example.com'
        },
        {
            id: 8,
            name: 'Vivek',
            phoneNo: '9112387625',
            purpose: 'Enquiry',
            status: 'offline',
            email: 'vivek@example.com'
        },
        {
            id: 9,
            name: 'Aarodhya',
            phoneNo: '9325675942',
            purpose: 'Enquiry',
            status: 'offline',
            email: 'aarodhya@example.com'
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

    const handleEditUser = (user) => {
        setSelectedUser(user);
        setOpenEditDialog(true);
    };

    const handleSaveEditedUser = () => {
        const updatedUsers = users.map(user => user.id === selectedUser.id ? selectedUser : user);
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
    };

    const handleCloseDeleteDialog = () => {
        setOpenDeleteDialog(false);
        setSelectedUser(null);
    };

    const handleInputChange = (event) => {
        setSelectedUser({
            ...selectedUser,
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
                    placeholder="Search by Customer Name"
                    sx={{ minWidth: 200 }}
                />
                <FormControl variant="outlined" size="small" sx={{ minWidth: 150 }}>
                    <InputLabel id="filter-status-label">Filter by Status</InputLabel>
                    <Select
                        labelId="filter-status-label"
                        id="filter-status"
                        value={filterStatus}
                        onChange={handleFilterChange}
                    >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value="online">Online</MenuItem>
                        <MenuItem value="offline">Offline</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <Box sx={{ bgcolor: 'white', border: 1, borderColor: 'grey.200', borderRadius: 1 }}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Phone Number</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Purpose</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
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
                                    <TableCell>{user.status}</TableCell>
                                    <TableCell>{user.email || 'N/A'}</TableCell>
                                    <TableCell>
                                        <div style={{ display: 'flex', gap: '8px' }}>
                                            <Button variant="outlined" size="small" onClick={() => handleEditUser(user)}>
                                                Edit
                                            </Button>
                                            <Button variant="outlined" color="error" size="small" onClick={() => handleDeleteUser(user.id)}>
                                                Delete
                                            </Button>
                                        </div>
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
                        value={selectedUser?.name}
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
                        value={selectedUser?.phoneNo}
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
                        value={selectedUser?.purpose}
                        onChange={handleInputChange}
                    />
                    <FormControl variant="standard" fullWidth>
                        <InputLabel id="status-label">Status</InputLabel>
                        <Select
                            labelId="status-label"
                            id="status"
                            name="status"
                            value={selectedUser?.status}
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
                        value={selectedUser?.email || 'N/A'}
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

export default RegisteredCustomerTable;