// import { Outlet } from 'react-router-dom';
// import Header from '../header/header';

// export default function RootLayout() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />
//       <div className="flex-1">
//         <Outlet />
//       </div>
//     </div>
//   );
// }


// src/components/layout/RootLayout.jsx
import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import { Box, Toolbar } from '@mui/material';

export default function RootLayout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flex: 1 }}>
        <Toolbar /> 
        <Outlet />
      </Box>
    </Box>
  );
}