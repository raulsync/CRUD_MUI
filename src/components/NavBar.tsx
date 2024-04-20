import { AppBar, Toolbar, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)({
  background: '	#ffdbdc',
  color: 'black',
});

const Typo = styled(NavLink)({
  fontSize: '20px',
  marginRight: '30px',
  textDecoration: 'none',
  color: 'inherit',
});

const NavBar = () => {
  return (
    <Header
      position="static"
      elevation={0}
    >
      <Toolbar style={{ margin: '0 auto' }}>
        <Typo to={'/'}>Home</Typo>
        <Typo to={'/users'}>All Users</Typo>
        <Typo to={'/add'}>Add Users</Typo>
      </Toolbar>
    </Header>
  );
};

export default NavBar;
