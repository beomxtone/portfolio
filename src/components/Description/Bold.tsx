import Box from '@mui/material/Box';

interface BoldProps {
  children: React.ReactNode;
}

const Bold = ({ children }: BoldProps) => {
  return (
    <Box component='span' fontWeight={800}>
      {children}
    </Box>
  );
};

export default Bold;
