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
  Avatar,
  Chip
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WorkIcon from '@mui/icons-material/Work';

// Dummy user data
const getUserData = (username) => ({
  name: username,
  email: `${username.toLowerCase().replace(' ', '.')}@company.com`,
  phone: '+1 (555) 123-4567',
  department: 'Engineering',
  position: 'Senior Developer',
  avatar: '/api/placeholder/80/80',
  activeTasks: 5,
  completedTasks: 23,
  currentProjects: ['Login Feature', 'API Integration', 'Database Optimization'],
  skills: ['React', 'Node.js', 'Python', 'MongoDB']
});

const UserDetailDrawer = ({ open, onClose, username }) => {
  if (!username) return null;
  
  const userData = getUserData(username);

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
          <Typography variant="h6" component="h2">User Profile</Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 3 }} />

        {/* User Profile Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Avatar
            src={userData.avatar}
            sx={{ width: 80, height: 80, mr: 2 }}
          />
          <Box>
            <Typography variant="h5">{userData.name}</Typography>
            <Typography color="text.secondary">{userData.position}</Typography>
          </Box>
        </Box>

        {/* Contact Information */}
        <List>
          <ListItem>
            <EmailIcon sx={{ mr: 2 }} />
            <ListItemText 
              primary="Email"
              secondary={userData.email}
            />
          </ListItem>
          <ListItem>
            <PhoneIcon sx={{ mr: 2 }} />
            <ListItemText 
              primary="Phone"
              secondary={userData.phone}
            />
          </ListItem>
          <ListItem>
            <WorkIcon sx={{ mr: 2 }} />
            <ListItemText 
              primary="Department"
              secondary={userData.department}
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 2 }} />

        {/* Task Statistics */}
        <Typography variant="h6" gutterBottom>Task Statistics</Typography>
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <Box sx={{ flex: 1, p: 2, bgcolor: 'background.paper', borderRadius: 1, boxShadow: 1 }}>
            <Typography variant="h4">{userData.activeTasks}</Typography>
            <Typography color="text.secondary">Active Tasks</Typography>
          </Box>
          <Box sx={{ flex: 1, p: 2, bgcolor: 'background.paper', borderRadius: 1, boxShadow: 1 }}>
            <Typography variant="h4">{userData.completedTasks}</Typography>
            <Typography color="text.secondary">Completed</Typography>
          </Box>
        </Box>

        {/* Current Projects */}
        <Typography variant="h6" gutterBottom>Current Projects</Typography>
        <List>
          {userData.currentProjects.map((project, index) => (
            <ListItem key={index}>
              <ListItemText primary={project} />
            </ListItem>
          ))}
        </List>

        {/* Skills */}
        <Typography variant="h6" gutterBottom>Skills</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {userData.skills.map((skill, index) => (
            <Chip key={index} label={skill} variant="outlined" />
          ))}
        </Box>
      </Box>
    </Drawer>
  );
};

export default UserDetailDrawer;