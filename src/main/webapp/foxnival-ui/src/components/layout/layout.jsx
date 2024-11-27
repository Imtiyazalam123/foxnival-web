// // src/components/Layout.jsx
// import { Outlet } from 'react-router-dom';
// import Sidebar from '../section/sidebar/sidebar';
// import { Box } from "@mui/material";

// export default function Layout() {
//   return (
//     <Box sx={{ display: 'flex' }}>
//       <Sidebar />
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           p: 3,
//           width: { sm: `calc(100% - 240px)` }
//         }}
//       >
//         <Outlet />
//       </Box>
//     </Box>
//   );
// }


import { Box, Toolbar } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Sidebar from '../section/sidebar/sidebar';

export default function Layout() {
  const drawerWidth = 270;

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        //   ml: { sm: `${drawerWidth}px` }
        }}
      >
        <Toolbar /> 
        <Outlet />
      </Box>
    </Box>
  );
}