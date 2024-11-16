import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Divider, Box, Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import PaymentRoundedIcon from '@mui/icons-material/PaymentRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import UserManagement from '../pages/UserManagement';
import TravelRequests from '../pages/TravelRequests';
import LeaveApplication from '../pages/LeaveApplication';
import PaySlip from '../pages/PaySlip';
import { useNavigate } from 'react-router-dom';


function LandingPage() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('User Management');
  const navigate = useNavigate();
  const [isCollapsed] = useState(false);

  
  const handleCollapseToggle = () => {
    setCollapsed(!collapsed);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  const handleLogout = () => {
    console.log('User logged out');
    navigate('/');
  };

  const drawerWidth = collapsed ? 64 : 240;

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'User Management':
        return <UserManagement />;
      case 'Travel Requests':
        return <TravelRequests />;
      case 'Leave Application':
        return <LeaveApplication />;
      case 'Pay Slip':
        return <PaySlip />;
      default:
        return null;
    }
  };

  return (
    <Box display="flex" height="100vh">
      {/* Collapsible Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          transition: 'width 0.3s',
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            overflowX: 'hidden',
            transition: 'width 0.01s',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            bgcolor: 'gray.800',
            color: 'black',
          },
        }}
      >
        {/* Top Section with Menu Items */}
        <Box>
          <Box display="flex" alignItems="center" justifyContent="space-between" p={2}>
            <IconButton onClick={handleCollapseToggle} color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>
          <Divider />
          <List>
            {[
              { text: 'User Management', icon: <PersonIcon /> },
              { text: 'Travel Requests', icon: <FlightTakeoffIcon /> },
              { text: 'Leave Application', icon: <EventAvailableIcon /> },
              { text: 'Pay Slip', icon: <PaymentRoundedIcon /> },

            ].map((item) => (
              <ListItem
                button
                key={item.text}
                onClick={() => handleTabClick(item.text)}
                selected={activeTab === item.text}
                sx={{
                  '&.Mui-selected': { bgcolor: 'aqua' },
                  '&:hover': { bgcolor: 'gray' },
                }}
              >
                <ListItemIcon sx={{ color: 'black' }}>{item.icon}</ListItemIcon>
                {!collapsed && <ListItemText primary={item.text} />}
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Bottom Section with Logout */}
        <Box mt="auto" p={2}>
        <Button
            variant="contained"
            color="secondary"
            startIcon={<LogoutIcon />}
            onClick={handleLogout}
            fullWidth
          >
            {isCollapsed ? <LogoutIcon /> : 'Logout'}
        </Button>

      </Box>
      </Drawer>

      {/* Main Content Area */}
      <Box flex={1} p={4} bgcolor="orange">
        {renderActiveTab()}
      </Box>
    </Box>
  );
}

export default LandingPage;
