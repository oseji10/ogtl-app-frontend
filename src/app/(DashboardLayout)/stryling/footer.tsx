import { Typography } from "@mui/material";
const styles = {

    footer: {
      backgroundColor: '#2f6e36',
      color: '#fff',
      padding: '20px 0',
      textAlign: 'center',
    },
  };
const Footer = () => {
    return (

<footer style={styles.footer}>
<Typography variant="body2">© 2023 On-God Transport. All rights reserved.</Typography>
</footer>
    )
  }
  
  export default Footer;