import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <>
      <AppBar position="sticky">
        {/* Justify is in the same direction as flex-direction */}
        {/* By default, it's row, so it's left-right */}
        {/* The display: flex is required to control the children elements */}
        {/* And space-between spaces them out */}
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* First element, to the left */}
          <Typography variant="h6">Ethan Rivers - Register Component </Typography>
          {/* Last element, to the left */}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
