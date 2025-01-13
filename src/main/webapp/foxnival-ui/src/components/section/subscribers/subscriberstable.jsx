import React, { useState, useMemo } from 'react';
import {
    Box, TableContainer, Table, TableHead, TableBody, TableRow, TableCell,
    Paper, Checkbox, IconButton, Tooltip, Link, TextField, Dialog, DialogTitle,
    DialogContent, DialogActions, Button, Select, MenuItem, FormControl,
    InputLabel, Popover
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const SubscriptionTable = () => {
    const [subscribers, setSubscribers] = useState([
        {
            id: 1,
            name: 'ABC.com',
            purchaseDate: '06/02/2024',
            expirationDate: '05/02/2025',
            accountStatus: 'Active',
            paymentStatus: 'Success',
            checked: false
        },
        {
            id: 2,
            name: 'BCD.com',
            purchaseDate: '12/11/2024',
            expirationDate: '11/11/2025',
            accountStatus: 'Inactive',
            paymentStatus: 'Success',
            checked: false
        },
        {
            id: 3,
            name: 'DAM.com',
            purchaseDate: '07/06/2024',
            expirationDate: '06/06/2025',
            accountStatus: 'Inactive',
            paymentStatus: 'Failed',
            checked: false
        },
        {
            id: 4,
            name: 'CBA.com',
            purchaseDate: '30/05/2024',
            expirationDate: '29/05/2025',
            accountStatus: 'Active',
            paymentStatus: 'Pending',
            checked: false
        },
        {
            id: 5,
            name: 'LBR.com',
            purchaseDate: '25/07/2024',
            expirationDate: '24/07/2025',
            accountStatus: 'Active',
            paymentStatus: 'Success',
            checked: false
        }
    ]);

    const [selectAll, setSelectAll] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterStatus, setFilterStatus] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [selectedSubscriber, setSelectedSubscriber] = useState(null);

    const handleSelectAll = (event) => {
        setSelectAll(event.target.checked);
        setSubscribers(subscribers.map(sub => ({
            ...sub,
            checked: event.target.checked
        })));
    };

    const handleSelectOne = (id) => {
        const updatedSubscribers = subscribers.map(sub =>
            sub.id === id ? { ...sub, checked: !sub.checked } : sub
        );
        setSubscribers(updatedSubscribers);
        setSelectAll(updatedSubscribers.every(sub => sub.checked));
    };

    const handleOpenFilter = (event) => setAnchorEl(event.currentTarget);
    const handleCloseFilter = () => setAnchorEl(null);

    const handleFilterChange = (status) => {
        setFilterStatus(status);
        handleCloseFilter();
    };

    const handleEditSubscriber = (subscriber) => {
        setSelectedSubscriber({ ...subscriber });
        setOpenEditDialog(true);
    };

    const handleDeleteSubscriber = (subscriber) => {
        setSelectedSubscriber(subscriber);
        setOpenDeleteDialog(true);
    };

    const handleSaveEdit = () => {
        if (selectedSubscriber) {
            const updatedSubscribers = subscribers.map(sub =>
                sub.id === selectedSubscriber.id ? selectedSubscriber : sub
            );
            setSubscribers(updatedSubscribers);
            setOpenEditDialog(false);
            setSelectedSubscriber(null);
        }
    };

    const handleConfirmDelete = () => {
        if (selectedSubscriber) {
            const updatedSubscribers = subscribers.filter(sub =>
                sub.id !== selectedSubscriber.id
            );
            setSubscribers(updatedSubscribers);
            setOpenDeleteDialog(false);
            setSelectedSubscriber(null);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSelectedSubscriber(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const filteredSubscribers = useMemo(() => {
        return subscribers.filter(sub =>
            sub.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
            (filterStatus === '' || sub.accountStatus === filterStatus)
        );
    }, [subscribers, searchQuery, filterStatus]);

    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case 'active':
                return 'success.main';
            case 'inactive':
                return 'error.main';
            default:
                return 'text.primary';
        }
    };

    const getPaymentStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case 'success':
                return 'success.main';
            case 'failed':
                return 'error.main';
            case 'pending':
                return 'warning.main';
            default:
                return 'text.primary';
        }
    };

    return (
        <Box sx={{ bgcolor: 'white', border: 1, borderColor: 'grey.200', borderRadius: 1 }}>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox">
                                <Checkbox
                                    checked={selectAll}
                                    onChange={handleSelectAll}
                                    indeterminate={subscribers.some(sub => sub.checked) && !selectAll}
                                />
                            </TableCell>
                            <TableCell>
                                {/* <TextField
                  size="small"
                  variant="standard"
                  placeholder="Search by Subscriber"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  sx={{
                    '& .MuiInput-underline:before': { borderBottom: 'none' },
                    '& .MuiInput-underline:hover:before': { borderBottom: 'none' },
                    '& .MuiInput-underline:after': { borderBottom: 'none' }
                  }}
                /> */}
                                <TextField
                                    size="small"
                                    variant="standard"
                                    placeholder="Search by Subscriber"
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
                            <TableCell sx={{ fontWeight: 'bold' }}>Purchase Date</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Expiration Date</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}
                                    onClick={handleOpenFilter}>
                                    Account Status
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
                                        <MenuItem onClick={() => handleFilterChange('Active')}>Active</MenuItem>
                                        <MenuItem onClick={() => handleFilterChange('Inactive')}>Inactive</MenuItem>
                                    </Box>
                                </Popover>
                            </TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Payment Status</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredSubscribers.map((subscriber) => (
                            <TableRow key={subscriber.id}>
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        checked={subscriber.checked}
                                        onChange={() => handleSelectOne(subscriber.id)}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Link href="#" underline="hover" color="primary">
                                        {subscriber.name}
                                    </Link>
                                </TableCell>
                                <TableCell>{subscriber.purchaseDate}</TableCell>
                                <TableCell>{subscriber.expirationDate}</TableCell>
                                <TableCell>
                                    <Box sx={{ color: getStatusColor(subscriber.accountStatus) }}>
                                        {subscriber.accountStatus}
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box sx={{ color: getPaymentStatusColor(subscriber.paymentStatus) }}>
                                        {subscriber.paymentStatus}
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box sx={{ display: 'flex', gap: 1 }}>
                                        <Tooltip title="Edit Subscriber" arrow placement="top">
                                            <IconButton
                                                size="small"
                                                color="primary"
                                                onClick={() => handleEditSubscriber(subscriber)}
                                            >
                                                <EditIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Delete Subscriber" arrow placement="top">
                                            <IconButton
                                                size="small"
                                                color="error"
                                                onClick={() => handleDeleteSubscriber(subscriber)}
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
            </TableContainer>

            {/* Edit Dialog */}
            <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)}>
                <DialogTitle>Edit Subscriber</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        label="Name"
                        fullWidth
                        variant="standard"
                        name="name"
                        value={selectedSubscriber?.name || ''}
                        onChange={handleInputChange}
                    />
                    <TextField
                        margin="dense"
                        label="Purchase Date"
                        fullWidth
                        variant="standard"
                        name="purchaseDate"
                        value={selectedSubscriber?.purchaseDate || ''}
                        onChange={handleInputChange}
                    />
                    <TextField
                        margin="dense"
                        label="Expiration Date"
                        fullWidth
                        variant="standard"
                        name="expirationDate"
                        value={selectedSubscriber?.expirationDate || ''}
                        onChange={handleInputChange}
                    />
                    <FormControl fullWidth margin="dense" variant="standard">
                        <InputLabel>Account Status</InputLabel>
                        <Select
                            name="accountStatus"
                            value={selectedSubscriber?.accountStatus || ''}
                            onChange={handleInputChange}
                        >
                            <MenuItem value="Active">Active</MenuItem>
                            <MenuItem value="Inactive">Inactive</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth margin="dense" variant="standard">
                        <InputLabel>Payment Status</InputLabel>
                        <Select
                            name="paymentStatus"
                            value={selectedSubscriber?.paymentStatus || ''}
                            onChange={handleInputChange}
                        >
                            <MenuItem value="Success">Success</MenuItem>
                            <MenuItem value="Failed">Failed</MenuItem>
                            <MenuItem value="Pending">Pending</MenuItem>
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSaveEdit} variant="contained">Save</Button>
                    <Button onClick={() => setOpenEditDialog(false)} variant="outlined">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Delete Dialog */}
            <Dialog open={openDeleteDialog} onClose={() => setOpenDeleteDialog(false)}>
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>
                    Are you sure you want to delete {selectedSubscriber?.name}?
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDeleteDialog(false)}>Cancel</Button>
                    <Button onClick={handleConfirmDelete} color="error">Delete</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default SubscriptionTable;