import React, { useState } from 'react';
import { Calendar, CheckCircle, HelpCircle, Settings, MoreHorizontal, Edit, Trash } from 'lucide-react';
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
  useTheme,
  useMediaQuery,
  Grid,
  Card,
  CardContent,
  Typography,
  Link,
  Popover,
  Button,
  TextField,
  MenuItem
} from '@mui/material';

const StatsCard = ({ icon: Icon, title, value, background }) => (
  <Card elevation={0} sx={{ height: '100%' }}>
    <CardContent>
      <Box display="flex" alignItems="flex-start" gap={2}>
        <Box
          sx={{
            backgroundColor: background,
            borderRadius: '50%',
            width: 40,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Icon size={20} className="text-gray-600" />
        </Box>
        <Box>
          <Typography variant="h4" component="div" className="font-semibold">
            {value.toLocaleString()}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            {title}
          </Typography>
        </Box>
      </Box>
    </CardContent>
  </Card>
);

const StatusBadge = ({ status }) => {
  const getStatusStyles = (status) => {
    const styles = {
      'In Progress': {
        bgcolor: 'rgba(59, 130, 246, 0.1)',
        color: 'rgb(29, 78, 216)',
      },
      'Completed': {
        bgcolor: 'rgba(34, 197, 94, 0.1)',
        color: 'rgb(21, 128, 61)',
      },
      'Pending': {
        bgcolor: 'rgba(245, 158, 11, 0.1)',
        color: 'rgb(180, 83, 9)',
      }
    };
    return styles[status] || styles['Pending'];
  };

  return (
    <Box
      component="span"
      sx={{
        px: 2,
        py: 1,
        borderRadius: 1,
        fontSize: '0.75rem',
        fontWeight: 500,
        display: 'inline-block',
        ...getStatusStyles(status)
      }}
    >
      {status}
    </Box>
  );
};

const RequestsDashboard = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedItems, setSelectedItems] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const statsData = [
    {
      title: "Completed",
      value: 984,
      icon: Calendar,
      background: 'rgba(34, 197, 94, 0.1)'
    },
    {
      title: "In Progress",
      value: 986,
      icon: HelpCircle,
      background: 'rgba(168, 85, 247, 0.1)'
    },
    {
      title: "Pending",
      value: 232,
      icon: Settings,
      background: 'rgba(249, 115, 22, 0.1)'
    }
  ];

  // Define the requests data within the component
  const requests = [
    { id: "req_66fe8b15i1j285o", taskName: "User Authentication Setup", status: "In Progress", assignedDate: "Apr 12, 2023", createdDate: "Mar 27, 2023" },
    { id: "req_66fe0hdsr2tshgn", taskName: "Database Optimization", status: "Completed", assignedDate: "Apr 22, 2023", createdDate: "Feb 15, 2023" },
    { id: "req_66fet7xvv55ei9", taskName: "API Integration", status: "Pending", assignedDate: "Apr 18, 2023", createdDate: "Jan 10, 2023" },
    { id: "req_66fe4lcd4v9o3q2", taskName: "Frontend Development", status: "In Progress", assignedDate: "Apr 20, 2023", createdDate: "Dec 2, 2022" },
    { id: "req_66fe8b15i1j285p", taskName: "Testing & QA", status: "Completed", assignedDate: "Apr 22, 2023", createdDate: "Feb 14, 2023" },
    { id: "req_66fet7xvv55ei0", taskName: "UI Design Update", status: "Pending", assignedDate: "Apr 18, 2023", createdDate: "Jan 11, 2023" },
    { id: "req_66fe4lcd4v9o3q3", taskName: "Backend API Setup", status: "In Progress", assignedDate: "Apr 20, 2023", createdDate: "Dec 3, 2022" },
    { id: "req_66fe8b15i1j285q", taskName: "User Analytics", status: "Completed", assignedDate: "Apr 22, 2023", createdDate: "Feb 16, 2023" },
    { id: "req_66fet7xvv55ei1", taskName: "Payment Gateway Integration", status: "Pending", assignedDate: "Apr 18, 2023", createdDate: "Jan 12, 2023" },
    { id: "req_66fe4lcd4v9o3q4", taskName: "SEO Optimization", status: "In Progress", assignedDate: "Apr 20, 2023", createdDate: "Dec 4, 2022" }
  ];

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setPage(0);
  };

  const handleFilterChange = (event) => {
    setFilterStatus(event.target.value);
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredRequests = requests.filter((request) => {
    return (
      (filterStatus === "" || request.status === filterStatus) &&
      (searchQuery === "" || request.taskName.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  const getCurrentPageData = () => {
    const startIndex = page * rowsPerPage;
    return filteredRequests.slice(startIndex, startIndex + rowsPerPage);
  };

  const handleSelectAll = (event) => {
    const isChecked = event.target.checked;
    const newSelectedItems = {};
    getCurrentPageData().forEach(request => {
      newSelectedItems[request.id] = isChecked;
    });
    setSelectedItems(newSelectedItems);
  };

  const handleSelectItem = (id) => {
    setSelectedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const isAllSelected = () => {
    const currentPageData = getCurrentPageData();
    return currentPageData.every(request => selectedItems[request.id]);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box sx={{ p: 4, bgcolor: 'grey.50' }}>

      <Grid container spacing={3} sx={{ mb: 6 }}>
        {statsData.map((stat, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <StatsCard {...stat} />
          </Grid>
        ))}
      </Grid>

      {/* Search and Filter Inputs */}
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <TextField
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
          size="small"
          placeholder="Search by Task Name"
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
          <MenuItem value="In Progress">In Progress</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
        </TextField>
      </Box>

      <Box sx={{ bgcolor: 'white', border: 1, borderColor: 'grey.200', borderRadius: 1 }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><input type="checkbox" checked={isAllSelected()} onChange={handleSelectAll} /></TableCell>
                <TableCell>Task Name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Assigned Date</TableCell>
                <TableCell>Created Date</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getCurrentPageData().map((request) => (
                <TableRow key={request.id}>
                  <TableCell><input type="checkbox" checked={selectedItems[request.id] || false} onChange={() => handleSelectItem(request.id)} /></TableCell>
                  <TableCell>{request.taskName}</TableCell>
                  <TableCell><StatusBadge status={request.status} /></TableCell>
                  <TableCell>{request.assignedDate}</TableCell>
                  <TableCell>{request.createdDate}</TableCell>
                  <TableCell>
                    <Button
                      aria-describedby={id}
                      onClick={handleMenuOpen}
                      startIcon={<MoreHorizontal size={16} />}
                      sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                    />
                    <Popover
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleMenuClose}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center'
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center'
                      }}
                    >
                      <Box sx={{ p: 2 }}>
                        <Button startIcon={<Edit size={16} />} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>Edit</Button>
                        <Button startIcon={<Trash size={16} />} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>Delete</Button>
                      </Box>
                    </Popover>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredRequests.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Box>
    </Box>
  );
};

export default RequestsDashboard;
