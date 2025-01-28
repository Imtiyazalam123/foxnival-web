import React from 'react';
import { 
  Drawer,
  Box,
  Typography,
  IconButton,
  Divider,
  Chip,
  List,
  ListItem,
  ListItemText,
  Avatar
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CommentIcon from '@mui/icons-material/Comment';
import AttachmentIcon from '@mui/icons-material/Attachment';

const TaskDetailDrawer = ({ open, onClose, task }) => {
  if (!task) return null;

  // Dummy comments data
  const comments = [
    {
      id: 1,
      user: 'John Doe',
      avatar: '/api/placeholder/40/40',
      comment: 'Started working on the login API integration',
      timestamp: '2024-03-23 11:00 AM'
    },
    {
      id: 2,
      user: 'Jane Smith',
      avatar: '/api/placeholder/40/40',
      comment: 'Database schema needs to be updated for new fields',
      timestamp: '2024-03-23 11:30 AM'
    }
  ];

  // Get severity color
  const getSeverityColor = (severity) => {
    const colors = {
      Low: '#4CAF50',
      Medium: '#FF9800',
      High: '#f44336',
      Critical: '#9C27B0'
    };
    return colors[severity] || '#000';
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: { xs: '100%', sm: 400 },
        },
      }}
    >
      <Box sx={{ p: 3 }}>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" component="h2">Task Details</Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 3 }} />

        {/* Task Info */}
        <Typography variant="h5" gutterBottom>{task.taskName}</Typography>
        
        <Box sx={{ mb: 3 }}>
          <Chip 
            label={task.severity}
            sx={{ 
              backgroundColor: getSeverityColor(task.severity),
              color: 'white',
              mr: 1
            }}
          />
          <Chip 
            label={task.status}
            variant="outlined"
          />
        </Box>

        {/* Details List */}
        <List>
          <ListItem>
            <ListItemText 
              primary="Assigned To"
              secondary={task.assignedTo}
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Assigned Time"
              secondary={task.assignedTime}
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary={<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <AttachmentIcon fontSize="small" />
                Attachment
              </Box>}
              secondary={task.attachment}
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 2 }} />

        {/* Comments Section */}
        <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <CommentIcon fontSize="small" />
          Comments
        </Typography>

        <List>
          {comments.map((comment) => (
            <ListItem key={comment.id} alignItems="flex-start">
              <Avatar src={comment.avatar} sx={{ mr: 2 }} />
              <ListItemText
                primary={comment.user}
                secondary={
                  <React.Fragment>
                    <Typography component="span" variant="body2" color="text.primary">
                      {comment.comment}
                    </Typography>
                    <br />
                    <Typography component="span" variant="caption" color="text.secondary">
                      {comment.timestamp}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};


export default TaskDetailDrawer;