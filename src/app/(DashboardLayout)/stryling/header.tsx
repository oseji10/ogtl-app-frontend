import { AppBar, Button, Toolbar } from "@mui/material";
import Image from "next/image";


const styles = {
   
    header: {
      backgroundColor: '#fff',
      color: '#000',
      boxShadow: 'none',
      paddingBottom: '10px',
    },

  };

const Header = () => (
    <AppBar position="static" style={styles.header}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <Image src="/images/logo.jpg" alt="On-God Transport Logo" width={100} height={50} />
        <div>
          <Button href="/" color="inherit">Home</Button>
          <Button href="/routes" color="inherit">Routes</Button>
          <Button href="/terminals" color="inherit">Terminals</Button>
          <Button href="/services" color="inherit">Services</Button>
          <Button href="/about-us" color="inherit">About</Button>
          <Button href="/contact-us" color="inherit">Contact</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
  export default Header;