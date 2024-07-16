// import "./footer.css";

import {
    Box,
    Container,
    Grid,
    Typography,
    TextField,
    Button,
    Link,
  } from "@mui/material";
  
  export default function Footer() {
    return (
      <Box sx={{ backgroundColor: "#333", color: "#fff", py: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" gutterBottom>
                About Us
              </Typography>
              <Typography>
                Your go-to online store for the latest in musical instruments inculding classical, digital, electronics,
                and more. Quality products at unbeatable prices.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" gutterBottom>
                Quick Links
              </Typography>
              <Box component="ul" sx={{ listStyle: "none", padding: 0 }}>
                {["Home", "Shop", "About", "Contact", "Privacy Policy"].map(
                  (link) => (
                    <Box component="li" key={link} sx={{ mb: 1 }}>
                      <Link href="#" color="inherit" underline="hover">
                        {link}
                      </Link>
                    </Box>
                  )
                )}
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" gutterBottom>
                Contact Us
              </Typography>
              <Box component="ul" sx={{ listStyle: "none", padding: 0 }}>
                <Box component="li" sx={{ mb: 1 }}>
                  <Link
                    href="mailto:support@example.com"
                    color="inherit"
                    underline="hover"
                  >
                    vermarashmi028@gmail.com
                  </Link>
                </Box>
                <Box component="li" sx={{ mb: 1 }}>
                  <Typography>+91 9334616595</Typography>
                </Box>
                <Box component="li" sx={{ mb: 1 }}>
                  <Typography>123 Main Street,Patna</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box mt={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((network) => (
                <Link href="#" key={network} color="inherit" underline="hover">
                  {network}
                </Link>
              ))}
            </Box>
          </Box>
          <Box mt={4}>
            <Typography variant="h6" gutterBottom>
              Subscribe to our Newsletter
            </Typography>
            <Box component="form" sx={{ display: "flex", gap: 2 }}>
              <TextField
                type="email"
                variant="outlined"
                placeholder="Enter your email"
                sx={{ backgroundColor: "#fff", borderRadius: 1 }}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#555",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#777" },
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    );
  }
  