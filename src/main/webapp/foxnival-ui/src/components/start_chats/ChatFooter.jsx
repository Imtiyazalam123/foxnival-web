import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';

export default function ChatFooter() {
    return (
        <Box sx={{ p: 1, display: 'flex' }}>
            <Box sx={{display: 'flex', alignItems:'center'}}>
                <Button sx={{ minWidth: 'auto', mr: 1 }}>
                    <AttachFileIcon />
                </Button>
                <Button sx={{ minWidth: 'auto', mr: 1 }}>
                    <InsertEmoticonIcon />
                </Button>
            </Box>
            <Box sx={{ display: 'flex', flex: 1}}>
                <TextField placeholder='Type your message and hit' size='small'
                 sx={{
                    "& .MuiInputBase-root": {
                        borderRadius:0,
                        borderRight: 0
                    }
                 }}
                 fullWidth
                />
                <Button 
                // variant='outlined'
                // sx={{
                //     borderRadius:0,
                //     minWidth: 'auto',
                //     height: "100%"
                // }}
                >
                
                    <SendIcon />
               
                </Button>
            </Box>
        </Box>

    )
}
