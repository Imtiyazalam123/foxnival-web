import React, { useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
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
  Button,
  TextField,
  MenuItem,
} from '@mui/material';

const StatsCard = ({ icon: Icon, title, value, color, bgColor }) => (
  <Card elevation={0} sx={{ height: '100%' }}>
    <CardContent>
      <Box display="flex" alignItems="flex-start" gap={2}>
        <Box
          sx={{
            backgroundColor: bgColor,
            borderRadius: '50%',
            width: 40,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon sx={{ fontSize: 24, color }} />
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

const RequestsDashboard = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const statsData = [
    {
      title: 'Completed',
      value: 984,
      icon: CheckCircleIcon,
      color: 'rgb(21, 128, 61)',
      bgColor: 'rgba(34, 197, 94, 0.1)',
    },
    {
      title: 'In Progress',
      value: 986,
      icon: AccessTimeIcon,
      color: 'rgb(29, 78, 216)',
      bgColor: 'rgba(59, 130, 246, 0.1)',
    },
    {
      title: 'Pending',
      value: 232,
      icon: WarningAmberIcon,
      color: 'rgb(180, 83, 9)',
      bgColor: 'rgba(245, 158, 11, 0.1)',
    },
  ];

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
      (filterStatus === '' || request.status === filterStatus) &&
      (searchQuery === '' || request.taskName.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  const getCurrentPageData = () => {
    const startIndex = page * rowsPerPage;
    return filteredRequests.slice(startIndex, startIndex + rowsPerPage);
  };

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
                <TableCell sx={{ fontWeight: 'bold' }}>Task Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Assigned Date</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Created Date</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getCurrentPageData().map((request) => (
                <TableRow key={request.id}>
                  <TableCell>
                    <Link
                      component="button"
                      onClick={() => console.log(`Clicked task with ID: ${request.id}`)}
                      sx={{ textAlign: 'left', width: '100%' }}
                    >
                      {request.taskName}
                    </Link>
                  </TableCell>
                  <TableCell><StatusBadge status={request.status} /></TableCell>
                  <TableCell>{request.assignedDate}</TableCell>
                  <TableCell>{request.createdDate}</TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Button variant="outlined" size="small" >
                        Edit
                      </Button>
                      <Button variant="outlined" color="error" size="small">
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
