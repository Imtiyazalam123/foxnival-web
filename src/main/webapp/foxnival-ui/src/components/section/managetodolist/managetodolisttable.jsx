// import 'simplebar-react/dist/simplebar.min.css';
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
// import SimpleBar from 'simplebar-react';

// // Predefined options
// const severityOptions = ['Low', 'Medium', 'High', 'Critical'];
// const statusOptions = ['Open', 'In Progress', 'Under Review', 'Completed'];

// const ManageToDoListTable = ({ isCreateDialogOpen, onCloseCreateDialog }) => {
//     const [page, setPage] = useState(0);
//     const [rowsPerPage, setRowsPerPage] = useState(10);
//     const [openEditDialog, setOpenEditDialog] = useState(false);
//     const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
//     const [selectedTask, setSelectedTask] = useState(null);
//     const [searchQuery, setSearchQuery] = useState('');
//     const [filterStatus, setFilterStatus] = useState('');

//     const [tasks, setTasks] = useState([
//         {
//             id: 1,
//             taskName: 'Implement Login Feature',
//             severity: 'High',
//             assignedTo: 'Ram Sharma',
//             status: 'In Progress',
//             attachment: 'login-spec.pdf',
//             assignedTime: '2024-03-23 10:00 AM'
//         },
//         {
//             id: 2,
//             taskName: 'Database Optimization',
//             severity: 'Critical',
//             assignedTo: 'Shyam Rajput',
//             status: 'Open',
//             attachment: 'db-schema.xlsx',
//             assignedTime: '2024-03-23 11:30 AM'
//         },
//         {
//             id: 3,
//             taskName: 'Bug Fix: Homepage Crash',
//             severity: 'High',
//             assignedTo: 'Rohit',
//             status: 'Under Review',
//             attachment: 'crash-report.doc',
//             assignedTime: '2024-03-23 09:15 AM'
//         },
//         {
//             id: 4,
//             taskName: 'API Integration',
//             severity: 'Medium',
//             assignedTo: 'Priya Singh',
//             status: 'Open',
//             attachment: 'api-docs.pdf',
//             assignedTime: '2024-03-23 14:20 PM'
//         },
//         {
//             id: 5,
//             taskName: 'UI Design Review',
//             severity: 'Low',
//             assignedTo: 'Amit Kumar',
//             status: 'Completed',
//             attachment: 'design-mockups.fig',
//             assignedTime: '2024-03-23 16:45 PM'
//         },
//         {
//             id: 6,
//             taskName: 'Security Audit',
//             severity: 'Critical',
//             assignedTo: 'Neha Gupta',
//             status: 'In Progress',
//             attachment: 'security-checklist.docx',
//             assignedTime: '2024-03-24 09:30 AM'
//         },
//         {
//             id: 7,
//             taskName: 'Performance Testing',
//             severity: 'High',
//             assignedTo: 'Rajesh Kumar',
//             status: 'Under Review',
//             attachment: 'perf-results.xlsx',
//             assignedTime: '2024-03-24 11:15 AM'
//         },
//         {
//             id: 8,
//             taskName: 'Content Update',
//             severity: 'Low',
//             assignedTo: 'Anita Patel',
//             status: 'Completed',
//             attachment: 'content-v2.doc',
//             assignedTime: '2024-03-24 13:40 PM'
//         },
//         {
//             id: 9,
//             taskName: 'Payment Gateway Integration',
//             severity: 'Critical',
//             assignedTo: 'Vikram Singh',
//             status: 'In Progress',
//             attachment: 'payment-flow.pdf',
//             assignedTime: '2024-03-24 15:20 PM'
//         },
//         {
//             id: 10,
//             taskName: 'Mobile App Bug Fix',
//             severity: 'High',
//             assignedTo: 'Sana Khan',
//             status: 'Open',
//             attachment: 'bug-report-mobile.doc',
//             assignedTime: '2024-03-24 16:45 PM'
//         },
//         {
//             id: 11,
//             taskName: 'Email Template Design',
//             severity: 'Medium',
//             assignedTo: 'Rahul Verma',
//             status: 'Under Review',
//             attachment: 'email-templates.zip',
//             assignedTime: '2024-03-25 09:00 AM'
//         },
//         {
//             id: 12,
//             taskName: 'Database Backup Script',
//             severity: 'High',
//             assignedTo: 'Deepak Shah',
//             status: 'Completed',
//             attachment: 'backup-script.sh',
//             assignedTime: '2024-03-25 10:30 AM'
//         },
//         {
//             id: 13,
//             taskName: 'User Documentation',
//             severity: 'Low',
//             assignedTo: 'Meera Iyer',
//             status: 'In Progress',
//             attachment: 'user-guide.pdf',
//             assignedTime: '2024-03-25 13:15 PM'
//         },
//         {
//             id: 14,
//             taskName: 'SSL Certificate Renewal',
//             severity: 'Critical',
//             assignedTo: 'Arjun Reddy',
//             status: 'Open',
//             attachment: 'ssl-details.txt',
//             assignedTime: '2024-03-25 14:45 PM'
//         },
//         {
//             id: 15,
//             taskName: 'Analytics Dashboard',
//             severity: 'Medium',
//             assignedTo: 'Pooja Sharma',
//             status: 'Under Review',
//             attachment: 'dashboard-specs.xlsx',
//             assignedTime: '2024-03-25 16:30 PM'
//         }
//     ]);

//     // New task state
//     const [newTask, setNewTask] = useState({
//         taskName: '',
//         severity: '',
//         assignedTo: '',
//         status: '',
//         assignedTime: '',
//         attachment: null,
//         comments: ''
//     });

//     const handleFileChange = (event) => {
//         setNewTask(prev => ({
//             ...prev,
//             attachment: event.target.files[0]
//         }));
//     };

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

//     // Task management handlers
//     const handleEditTask = (task) => {
//         setSelectedTask(task);
//         setOpenEditDialog(true);
//     };

//     const handleSaveEditedTask = () => {
//         if (selectedTask) {
//             const updatedTasks = tasks.map(task =>
//                 task.id === selectedTask.id ? selectedTask : task
//             );
//             setTasks(updatedTasks);
//             handleCloseEditDialog();
//         }
//     };

//     const handleDeleteTask = (taskId) => {
//         const taskToDelete = tasks.find(task => task.id === taskId);
//         setSelectedTask(taskToDelete || null);
//         setOpenDeleteDialog(true);
//     };

//     const handleConfirmDeleteTask = () => {
//         if (selectedTask) {
//             const updatedTasks = tasks.filter(task => task.id !== selectedTask.id);
//             setTasks(updatedTasks);
//             handleCloseDeleteDialog();
//         }
//     };

//     // Dialog close handlers
//     const handleCloseEditDialog = () => {
//         setOpenEditDialog(false);
//         setSelectedTask(null);
//     };

//     const handleCloseDeleteDialog = () => {
//         setOpenDeleteDialog(false);
//         setSelectedTask(null);
//     };

//     const handleCloseCreateDialog = () => {
//         onCloseCreateDialog();
//         setNewTask({
//             taskName: '',
//             severity: '',
//             assignedTo: '',
//             status: '',
//             attachment: '',
//             assignedTime: ''
//         });
//     };

//     // Input change handlers
//     const handleInputChange = (event) => {
//         const { name, value } = event.target;

//         if (openEditDialog && selectedTask) {
//             setSelectedTask(prev => ({
//                 ...prev,
//                 [name]: value
//             }));
//         }

//         if (isCreateDialogOpen) {
//             setNewTask(prev => ({
//                 ...prev,
//                 [name]: value
//             }));
//         }
//     };

//     const handleSaveNewTask = () => {
//         const newTaskEntry = {
//             id: tasks.length + 1,
//             ...newTask,
//             assignedTime: new Date().toLocaleString()
//         };

//         setTasks(prev => [...prev, newTaskEntry]);
//         handleCloseCreateDialog();
//     };

//     // Filtering logic
//     const filteredTasks = useMemo(() => {
//         return tasks.filter(task =>
//             task.taskName.toLowerCase().includes(searchQuery.toLowerCase()) &&
//             (filterStatus === '' || task.status === filterStatus)
//         );
//     }, [tasks, searchQuery, filterStatus]);

//     // Pagination logic
//     const getCurrentPageData = () => {
//         const startIndex = page * rowsPerPage;
//         return filteredTasks.slice(startIndex, startIndex + rowsPerPage);
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
//                     placeholder="Search by Task Name"
//                     sx={{ minWidth: 200 }}
//                 />
//                 <FormControl variant="outlined" size="small" sx={{ minWidth: 150 }}>
//                     <InputLabel id="filter-status-label">Filter by Status</InputLabel>
//                     <Select
//                         labelId="filter-status-label"
//                         id="filter-status"
//                         value={filterStatus}
//                         onChange={handleFilterChange}
//                     >
//                         <MenuItem value="">All</MenuItem>
//                         {statusOptions.map(status => (
//                             <MenuItem key={status} value={status}>{status}</MenuItem>
//                         ))}
//                     </Select>
//                 </FormControl>
//             </Box>

//             {/* Task Table */}
//             <Box sx={{ bgcolor: 'white', border: 1, borderColor: 'grey.200', borderRadius: 1 }}>
//                 <TableContainer component={Paper}>
//                     <Table>
//                         <TableHead>
//                             <TableRow>
//                                 {['Task Name', 'Severity', 'Assigned To', 'Status', 'Attachment', 'Assigned Time', 'Actions']
//                                     .map(header => (
//                                         <TableCell key={header} sx={{ fontWeight: 'bold' }}>
//                                             {header}
//                                         </TableCell>
//                                     ))}
//                             </TableRow>
//                         </TableHead>

//                         <TableBody>
//                             {getCurrentPageData().map((task) => (
//                                 <TableRow key={task.id}>
//                                     <TableCell>{task.taskName}</TableCell>
//                                     <TableCell>{task.severity}</TableCell>
//                                     <TableCell>{task.assignedTo}</TableCell>
//                                     <TableCell>{task.status}</TableCell>
//                                     <TableCell>{task.attachment || 'N/A'}</TableCell>
//                                     <TableCell>{task.assignedTime}</TableCell>
//                                     <TableCell>
//                                         <Box sx={{ display: 'flex', gap: 1 }}>
//                                             <Button
//                                                 variant="outlined"
//                                                 size="small"
//                                                 onClick={() => handleEditTask(task)}
//                                             >
//                                                 Edit
//                                             </Button>
//                                             <Button
//                                                 variant="outlined"
//                                                 color="error"
//                                                 size="small"
//                                                 onClick={() => handleDeleteTask(task.id)}
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
//                         count={filteredTasks.length}
//                         rowsPerPage={rowsPerPage}
//                         page={page}
//                         onPageChange={handleChangePage}
//                         onRowsPerPageChange={handleChangeRowsPerPage}
//                     />
//                 </TableContainer>
//             </Box>

//             {/* Edit Task Dialog */}
//             <Dialog
//                 open={openEditDialog}
//                 onClose={handleCloseEditDialog}
//             >
//                 <DialogTitle sx={{ fontWeight: 'bold' }}>
//                     Edit Task
//                 </DialogTitle>
//                 <DialogContent>
//                     <TextField
//                         autoFocus
//                         margin="dense"
//                         id="taskName"
//                         label="Task Name"
//                         type="text"
//                         fullWidth
//                         variant="standard"
//                         name="taskName"
//                         value={selectedTask?.taskName || ''}
//                         onChange={handleInputChange}
//                     />
//                     <FormControl variant="standard" fullWidth margin="dense">
//                         <InputLabel>Severity</InputLabel>
//                         <Select
//                             name="severity"
//                             value={selectedTask?.severity || ''}
//                             onChange={handleInputChange}
//                         >
//                             {severityOptions.map(option => (
//                                 <MenuItem key={option} value={option}>{option}</MenuItem>
//                             ))}
//                         </Select>
//                     </FormControl>
//                     <TextField
//                         margin="dense"
//                         id="assignedTo"
//                         label="Assigned To"
//                         type="text"
//                         fullWidth
//                         variant="standard"
//                         name="assignedTo"
//                         value={selectedTask?.assignedTo || ''}
//                         onChange={handleInputChange}
//                     />
//                     <FormControl variant="standard" fullWidth margin="dense">
//                         <InputLabel>Status</InputLabel>
//                         <Select
//                             name="status"
//                             value={selectedTask?.status || ''}
//                             onChange={handleInputChange}
//                         >
//                             {statusOptions.map(option => (
//                                 <MenuItem key={option} value={option}>{option}</MenuItem>
//                             ))}
//                         </Select>
//                     </FormControl>
//                     <TextField
//                         margin="dense"
//                         id="attachment"
//                         label="Attachment"
//                         type="text"
//                         fullWidth
//                         variant="standard"
//                         name="attachment"
//                         value={selectedTask?.attachment || ''}
//                         onChange={handleInputChange}
//                     />
//                 </DialogContent>
//                 <DialogActions sx={{ padding: '16px 16px 16px 0px' }}>
//                     <Button variant='contained' onClick={handleSaveEditedTask}>
//                         Save
//                     </Button>
//                     <Button variant='outlined' onClick={handleCloseEditDialog}>
//                         Cancel
//                     </Button>
//                 </DialogActions>
//             </Dialog>

//             {/* Delete Task Dialog */}
//             <Dialog
//                 open={openDeleteDialog}
//                 onClose={handleCloseDeleteDialog}
//             >
//                 <DialogTitle>
//                     Confirm Delete
//                 </DialogTitle>
//                 <DialogContent>
//                     Are you sure you want to delete task "{selectedTask?.taskName}"?
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={handleCloseDeleteDialog}>Cancel</Button>
//                     <Button onClick={handleConfirmDeleteTask} color="error">
//                         Delete
//                     </Button>
//                 </DialogActions>
//             </Dialog>

//             {/* Create Task Dialog */}

//             <Dialog
//                 open={isCreateDialogOpen}
//                 onClose={onCloseCreateDialog}
//                 maxWidth="sm"
//                 fullWidth
//             >
//                 <DialogTitle sx={{ fontWeight: 'bold', pb: 2 }}>
//                     Create New Task
//                 </DialogTitle>
//                 <SimpleBar style={{ overflow: 'auto', flexGrow: 1, maxHeight: 400 }}>
//                     <DialogContent>
//                         <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 1 }}>
//                             <TextField
//                                 label="Task name"
//                                 name="taskName"
//                                 value={newTask.taskName}
//                                 onChange={handleInputChange}
//                                 fullWidth
//                                 required
//                             />

//                             <FormControl fullWidth required>
//                                 <InputLabel>Severity</InputLabel>
//                                 <Select
//                                     name="severity"
//                                     value={newTask.severity}
//                                     onChange={handleInputChange}
//                                     label="Severity"
//                                 >
//                                     {severityOptions.map(option => (
//                                         <MenuItem key={option} value={option}>{option}</MenuItem>
//                                     ))}
//                                 </Select>
//                             </FormControl>

//                             <FormControl fullWidth required>
//                                 <InputLabel>Assigned</InputLabel>
//                                 <Select
//                                     name="assignedTo"
//                                     value={newTask.assignedTo}
//                                     onChange={handleInputChange}
//                                     label="Assignes to"
//                                 >
//                                     <MenuItem value="user1">User 1</MenuItem>
//                                     <MenuItem value="user2">User 2</MenuItem>
//                                     <MenuItem value="user3">User 3</MenuItem>
//                                 </Select>
//                             </FormControl>

//                             <FormControl fullWidth required>
//                                 <InputLabel>Status</InputLabel>
//                                 <Select
//                                     name="status"
//                                     value={newTask.status}
//                                     onChange={handleInputChange}
//                                     label="Status"
//                                 >
//                                     {statusOptions.map(option => (
//                                         <MenuItem key={option} value={option}>{option}</MenuItem>
//                                     ))}
//                                 </Select>
//                             </FormControl>

//                             <TextField
//                                 label="Assigned time"
//                                 type="datetime-local"
//                                 name="assignedTime"
//                                 value={newTask.assignedTime}
//                                 onChange={handleInputChange}
//                                 fullWidth
//                                 required
//                                 InputLabelProps={{ shrink: true }}
//                             />

//                             <TextField
//                                 type="file"
//                                 onChange={handleFileChange}
//                                 fullWidth
//                                 InputProps={{
//                                     startAdornment: <Button component="span">Browse</Button>
//                                 }}
//                             />

//                             <TextField
//                                 label="Comment box"
//                                 name="comments"
//                                 value={newTask.comments}
//                                 onChange={handleInputChange}
//                                 multiline
//                                 rows={4}
//                                 fullWidth
//                             />

//                             <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', mt: 2 }}>
//                                 <Button variant="contained" onClick={handleSaveNewTask}>
//                                     Create task
//                                 </Button>
//                                 <Button variant="outlined" onClick={onCloseCreateDialog}>
//                                     Cancel
//                                 </Button>
//                             </Box>
//                         </Box>
//                     </DialogContent>
//                 </SimpleBar>
//             </Dialog>
//         </Box>
//     );
// };

// ManageToDoListTable.propTypes = {
//     isCreateDialogOpen: PropTypes.bool.isRequired,
//     onCloseCreateDialog: PropTypes.func.isRequired
// };


// export default ManageToDoListTable;



import 'simplebar-react/dist/simplebar.min.css';
import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
    TablePagination,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    IconButton,
    Tooltip,
    Button,
    Popover
} from '@mui/material';
import SimpleBar from 'simplebar-react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// Predefined options
const severityOptions = ['Low', 'Medium', 'High', 'Critical'];
const statusOptions = ['Open', 'In Progress', 'Under Review', 'Completed'];

const ManageToDoListTable = ({ isCreateDialogOpen, onCloseCreateDialog }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterStatus, setFilterStatus] = useState('');
    const [statusAnchorEl, setStatusAnchorEl] = useState(null);

    // Existing tasks state
    const [tasks, setTasks] = useState([
        {
            id: 1,
            taskName: 'Implement Login Feature',
            severity: 'High',
            assignedTo: 'Ram Sharma',
            status: 'In Progress',
            attachment: 'login-spec.pdf',
            assignedTime: '2024-03-23 10:00 AM'
        },
        {
            id: 2,
            taskName: 'Database Optimization',
            severity: 'Critical',
            assignedTo: 'Shyam Rajput',
            status: 'Open',
            attachment: 'db-schema.xlsx',
            assignedTime: '2024-03-23 11:30 AM'
        },
        {
            id: 3,
            taskName: 'Bug Fix: Homepage Crash',
            severity: 'High',
            assignedTo: 'Rohit',
            status: 'Under Review',
            attachment: 'crash-report.doc',
            assignedTime: '2024-03-23 09:15 AM'
        },
        {
            id: 4,
            taskName: 'API Integration',
            severity: 'Medium',
            assignedTo: 'Priya Singh',
            status: 'Open',
            attachment: 'api-docs.pdf',
            assignedTime: '2024-03-23 14:20 PM'
        },
        {
            id: 5,
            taskName: 'UI Design Review',
            severity: 'Low',
            assignedTo: 'Amit Kumar',
            status: 'Completed',
            attachment: 'design-mockups.fig',
            assignedTime: '2024-03-23 16:45 PM'
        },
        {
            id: 6,
            taskName: 'Security Audit',
            severity: 'Critical',
            assignedTo: 'Neha Gupta',
            status: 'In Progress',
            attachment: 'security-checklist.docx',
            assignedTime: '2024-03-24 09:30 AM'
        },
        {
            id: 7,
            taskName: 'Performance Testing',
            severity: 'High',
            assignedTo: 'Rajesh Kumar',
            status: 'Under Review',
            attachment: 'perf-results.xlsx',
            assignedTime: '2024-03-24 11:15 AM'
        },
        {
            id: 8,
            taskName: 'Content Update',
            severity: 'Low',
            assignedTo: 'Anita Patel',
            status: 'Completed',
            attachment: 'content-v2.doc',
            assignedTime: '2024-03-24 13:40 PM'
        },
        {
            id: 9,
            taskName: 'Payment Gateway Integration',
            severity: 'Critical',
            assignedTo: 'Vikram Singh',
            status: 'In Progress',
            attachment: 'payment-flow.pdf',
            assignedTime: '2024-03-24 15:20 PM'
        },
        {
            id: 10,
            taskName: 'Mobile App Bug Fix',
            severity: 'High',
            assignedTo: 'Sana Khan',
            status: 'Open',
            attachment: 'bug-report-mobile.doc',
            assignedTime: '2024-03-24 16:45 PM'
        },
        {
            id: 11,
            taskName: 'Email Template Design',
            severity: 'Medium',
            assignedTo: 'Rahul Verma',
            status: 'Under Review',
            attachment: 'email-templates.zip',
            assignedTime: '2024-03-25 09:00 AM'
        },
        {
            id: 12,
            taskName: 'Database Backup Script',
            severity: 'High',
            assignedTo: 'Deepak Shah',
            status: 'Completed',
            attachment: 'backup-script.sh',
            assignedTime: '2024-03-25 10:30 AM'
        },
        {
            id: 13,
            taskName: 'User Documentation',
            severity: 'Low',
            assignedTo: 'Meera Iyer',
            status: 'In Progress',
            attachment: 'user-guide.pdf',
            assignedTime: '2024-03-25 13:15 PM'
        },
        {
            id: 14,
            taskName: 'SSL Certificate Renewal',
            severity: 'Critical',
            assignedTo: 'Arjun Reddy',
            status: 'Open',
            attachment: 'ssl-details.txt',
            assignedTime: '2024-03-25 14:45 PM'
        },
        {
            id: 15,
            taskName: 'Analytics Dashboard',
            severity: 'Medium',
            assignedTo: 'Pooja Sharma',
            status: 'Under Review',
            attachment: 'dashboard-specs.xlsx',
            assignedTime: '2024-03-25 16:30 PM'
        }
    ]);

    // New task state
    const [newTask, setNewTask] = useState({
        taskName: '',
        severity: '',
        assignedTo: '',
        status: '',
        assignedTime: '',
        attachment: null,
        comments: ''
    });

    const handleFileChange = (event) => {
        setNewTask(prev => ({
            ...prev,
            attachment: event.target.files[0]
        }));
    };

    // Status filter handlers
    const handleOpenStatusFilter = (event) => {
        setStatusAnchorEl(event.currentTarget);
    };

    const handleCloseStatusFilter = () => {
        setStatusAnchorEl(null);
    };

    const handleStatusFilterChange = (status) => {
        setFilterStatus(status);
        setPage(0);
        handleCloseStatusFilter();
    };

    // Page change handlers
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Task management handlers
    const handleEditTask = (task) => {
        setSelectedTask(task);
        setOpenEditDialog(true);
    };

    const handleDeleteTask = (taskId) => {
        const taskToDelete = tasks.find(task => task.id === taskId);
        setSelectedTask(taskToDelete);
        setOpenDeleteDialog(true);
    };

    const handleSaveEditedTask = () => {
        if (selectedTask) {
            const updatedTasks = tasks.map(task =>
                task.id === selectedTask.id ? selectedTask : task
            );
            setTasks(updatedTasks);
            handleCloseEditDialog();
        }
    };

    const handleConfirmDeleteTask = () => {
        if (selectedTask) {
            const updatedTasks = tasks.filter(task => task.id !== selectedTask.id);
            setTasks(updatedTasks);
            handleCloseDeleteDialog();
        }
    };

    // Dialog close handlers
    const handleCloseEditDialog = () => {
        setOpenEditDialog(false);
        setSelectedTask(null);
    };

    const handleCloseDeleteDialog = () => {
        setOpenDeleteDialog(false);
        setSelectedTask(null);
    };

    const handleCloseCreateDialog = () => {
        onCloseCreateDialog();
        setNewTask({
            taskName: '',
            severity: '',
            assignedTo: '',
            status: '',
            attachment: '',
            assignedTime: ''
        });
    };

    // Input change handlers
    const handleInputChange = (event) => {
        const { name, value } = event.target;

        if (openEditDialog && selectedTask) {
            setSelectedTask(prev => ({
                ...prev,
                [name]: value
            }));
        }

        if (isCreateDialogOpen) {
            setNewTask(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSaveNewTask = () => {
        const newTaskEntry = {
            id: tasks.length + 1,
            ...newTask,
            assignedTime: new Date().toLocaleString()
        };

        setTasks(prev => [...prev, newTaskEntry]);
        handleCloseCreateDialog();
    };

    // Filtering logic
    const filteredTasks = useMemo(() => {
        return tasks.filter(task =>
            task.taskName.toLowerCase().includes(searchQuery.toLowerCase()) &&
            (filterStatus === '' || task.status === filterStatus)
        );
    }, [tasks, searchQuery, filterStatus]);

    // Get current page data
    const getCurrentPageData = () => {
        const startIndex = page * rowsPerPage;
        return filteredTasks.slice(startIndex, startIndex + rowsPerPage);
    };

    return (
        <Box>
            <Box sx={{ bgcolor: 'white', border: 1, borderColor: 'grey.200', borderRadius: 1 }}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <TextField
                                        size="small"
                                        variant="standard"
                                        placeholder="Search by Task Name"
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
                                            }
                                        }}
                                    />
                                </TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Severity</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Assigned To</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }} onClick={handleOpenStatusFilter}>
                                        Status
                                        <KeyboardArrowDownIcon />
                                    </Box>
                                    <Popover
                                        open={Boolean(statusAnchorEl)}
                                        anchorEl={statusAnchorEl}
                                        onClose={handleCloseStatusFilter}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                        }}
                                    >
                                        <Box sx={{ p: 1 }}>
                                            <MenuItem onClick={() => handleStatusFilterChange('')}>All</MenuItem>
                                            {statusOptions.map(status => (
                                                <MenuItem key={status} onClick={() => handleStatusFilterChange(status)}>
                                                    {status}
                                                </MenuItem>
                                            ))}
                                        </Box>
                                    </Popover>
                                </TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Attachment</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Assigned Time</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {getCurrentPageData().map((task) => (
                                <TableRow key={task.id}>
                                    <TableCell>{task.taskName}</TableCell>
                                    <TableCell>{task.severity}</TableCell>
                                    <TableCell>{task.assignedTo}</TableCell>
                                    <TableCell>{task.status}</TableCell>
                                    <TableCell>{task.attachment || 'N/A'}</TableCell>
                                    <TableCell>{task.assignedTime}</TableCell>
                                    <TableCell>
                                        <Box sx={{ display: 'flex', gap: 1 }}>
                                            <Tooltip title="Edit Task" arrow>
                                                <IconButton
                                                    size="small"
                                                    color="primary"
                                                    onClick={() => handleEditTask(task)}
                                                >
                                                    <EditIcon />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Delete Task" arrow>
                                                <IconButton
                                                    size="small"
                                                    color="error"
                                                    onClick={() => handleDeleteTask(task.id)}
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
                        count={filteredTasks.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </TableContainer>
            </Box>

            {/* Edit Dialog */}
            <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
                <DialogTitle sx={{ fontWeight: 'bold' }}>Edit Task</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Task Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        name="taskName"
                        value={selectedTask?.taskName || ''}
                        onChange={handleInputChange}
                    />
                    <FormControl variant="standard" fullWidth margin="dense">
                        <InputLabel>Severity</InputLabel>
                        <Select
                            name="severity"
                            value={selectedTask?.severity || ''}
                            onChange={handleInputChange}
                        >
                            {severityOptions.map(option => (
                                <MenuItem key={option} value={option}>{option}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField
                        margin="dense"
                        label="Assigned To"
                        type="text"
                        fullWidth
                        variant="standard"
                        name="assignedTo"
                        value={selectedTask?.assignedTo || ''}
                        onChange={handleInputChange}
                    />
                    <FormControl variant="standard" fullWidth margin="dense">
                        <InputLabel>Status</InputLabel>
                        <Select
                            name="status"
                            value={selectedTask?.status || ''}
                            onChange={handleInputChange}
                        >
                            {statusOptions.map(option => (
                                <MenuItem key={option} value={option}>{option}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField
                        margin="dense"
                        label="Attachment"
                        type="text"
                        fullWidth
                        variant="standard"
                        name="attachment"
                        value={selectedTask?.attachment || ''}
                        onChange={handleInputChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={handleSaveEditedTask}>Save</Button>
                    <Button variant="outlined" onClick={handleCloseEditDialog}>Cancel</Button>
                </DialogActions>
            </Dialog>

            {/* Delete Dialog */}
            <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog}>
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>
                    Are you sure you want to delete task "{selectedTask?.taskName}"?
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDeleteDialog}>Cancel</Button>
                    <Button onClick={handleConfirmDeleteTask} color="error">Delete</Button>
                </DialogActions>
            </Dialog>

            {/* Create Dialog */}
            <Dialog
                open={isCreateDialogOpen}
                onClose={onCloseCreateDialog}
                maxWidth="sm"
                fullWidth
            >
                <DialogTitle sx={{ fontWeight: 'bold', pb: 2 }}>Create New Task</DialogTitle>
                <SimpleBar style={{ overflow: 'auto', flexGrow: 1, maxHeight: 400 }}>
                    <DialogContent>
                        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 1 }}>
                            <TextField
                                label="Task name"
                                name="taskName"
                                value={newTask.taskName}
                                onChange={handleInputChange}
                                fullWidth
                                required
                            />
                            <FormControl fullWidth required>
                                <InputLabel>Severity</InputLabel>
                                <Select
                                    name="severity"
                                    value={newTask.severity}
                                    onChange={handleInputChange}
                                    label="Severity"
                                >
                                    {severityOptions.map(option => (
                                        <MenuItem key={option} value={option}>{option}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl fullWidth required>
                                <InputLabel>Assigned To</InputLabel>
                                <Select
                                    name="assignedTo"
                                    value={newTask.assignedTo}
                                    onChange={handleInputChange}
                                    label="Assigned to"
                                >
                                    <MenuItem value="user1">User 1</MenuItem>
                                    <MenuItem value="user2">User 2</MenuItem>
                                    <MenuItem value="user3">User 3</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl fullWidth required>
                                <InputLabel>Status</InputLabel>
                                <Select
                                    name="status"
                                    value={newTask.status}
                                    onChange={handleInputChange}
                                    label="Status"
                                >
                                    {statusOptions.map(option => (
                                        <MenuItem key={option} value={option}>{option}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <TextField
                                label="Assigned time"
                                type="datetime-local"
                                name="assignedTime"
                                value={newTask.assignedTime}
                                onChange={handleInputChange}
                                fullWidth
                                required
                                InputLabelProps={{ shrink: true }}
                            />

                            <TextField
                                type="file"
                                onChange={handleFileChange}
                                fullWidth
                                InputProps={{
                                    startAdornment: <Button component="span">Browse</Button>
                                }}
                            />

                            <TextField
                                label="Comment box"
                                name="comments"
                                value={newTask.comments}
                                onChange={handleInputChange}
                                multiline
                                rows={4}
                                fullWidth
                            />

                            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', mt: 2 }}>
                                <Button variant="contained" onClick={handleSaveNewTask}>
                                    Create task
                                </Button>
                                <Button variant="outlined" onClick={onCloseCreateDialog}>
                                    Cancel
                                </Button>
                            </Box>
                        </Box>
                    </DialogContent>
                </SimpleBar>
            </Dialog>
        </Box>
    );
};

ManageToDoListTable.propTypes = {
    isCreateDialogOpen: PropTypes.bool.isRequired,
    onCloseCreateDialog: PropTypes.func.isRequired
};

export default ManageToDoListTable;