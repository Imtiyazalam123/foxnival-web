import React from 'react';
import { 
  Drawer,
  Box,
  Typography,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemText,
  Chip
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const TaskDetailsDrawer = ({ open, onClose, task }) => {
  if (!task) return null;

  const getStatusColor = (status) => {
    const colors = {
      'In Progress': 'primary',
      'Completed': 'success',
      'Pending': 'warning'
    };
    return colors[status] || 'default';
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { width: { xs: '100%', sm: 400 } }
      }}
    >
      <Box sx={{ p: 3 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6" component="h2">
            Task Details
          </Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider />

        <List sx={{ pt: 2 }}>
          <ListItem>
            <ListItemText 
              primary="Task Name"
              secondary={task.taskName}
              primaryTypographyProps={{ variant: 'subtitle2', color: 'text.secondary' }}
              secondaryTypographyProps={{ variant: 'body1', color: 'text.primary', sx: { mt: 1 } }}
            />
          </ListItem>

          <ListItem>
            <ListItemText 
              primary="Status"
              secondary={
                <Chip 
                  label={task.status}
                  color={getStatusColor(task.status)}
                  size="small"
                  sx={{ mt: 1 }}
                />
              }
              primaryTypographyProps={{ variant: 'subtitle2', color: 'text.secondary' }}
            />
          </ListItem>

          <ListItem>
            <ListItemText 
              primary="Assigned Date"
              secondary={task.assignedDate}
              primaryTypographyProps={{ variant: 'subtitle2', color: 'text.secondary' }}
              secondaryTypographyProps={{ variant: 'body1', color: 'text.primary', sx: { mt: 1 } }}
            />
          </ListItem>

          <ListItem>
            <ListItemText 
              primary="Due Date"
              secondary={task.createdDate}
              primaryTypographyProps={{ variant: 'subtitle2', color: 'text.secondary' }}
              secondaryTypographyProps={{ variant: 'body1', color: 'text.primary', sx: { mt: 1 } }}
            />
          </ListItem>

          <ListItem>
            <ListItemText 
              primary="Task ID"
              secondary={task.id}
              primaryTypographyProps={{ variant: 'subtitle2', color: 'text.secondary' }}
              secondaryTypographyProps={{ variant: 'body1', color: 'text.primary', sx: { mt: 1 } }}
            />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default TaskDetailsDrawer;