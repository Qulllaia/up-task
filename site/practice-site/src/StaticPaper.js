import { Paper } from "@mui/material";
export const StaticPaper = ({ children, ...props }) => (
    <Paper 
      {...props}
      sx={{ 
        '&:hover': { 
          transform: 'none', 
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)' 
        },
        ...props.sx 
      }}
    >
      {children}
    </Paper>
  );