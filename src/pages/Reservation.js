import React from "react";
import { Box, Typography, Grid, TextField, Button, InputAdornment } from "@mui/material";
// import { DatePicker, TimePicker } from "@mui/x-date-pickers";
// import { motion } from "framer-motion";
import { motion } from "framer-motion";



const Reservation = () => (
  <Box sx={{ py: 8, px: 2, maxWidth: 800, mx: "auto" }}>
    <Typography variant="h3" sx={{ textAlign: "center", mb: 6, fontWeight: "bold", color: "#f59e0b" }}>
      Make a Reservation
    </Typography>
    
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <form>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Full Name" variant="outlined" required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Phone Number" variant="outlined" required />
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* <DatePicker
              label="Date"
              renderInput={(params) => <TextField {...params} fullWidth />}
            /> */}
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* <TimePicker
              label="Time"
              renderInput={(params) => <TextField {...params} fullWidth />}
            /> */}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              fullWidth
              label="Party Size"
              variant="outlined"
              SelectProps={{ native: true }}
            >
              {[1, 2, 3, 4, 5, 6, "7+"].map((size) => (
                <option key={size} value={size}>
                  {size} {size === 1 ? "person" : "people"}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              fullWidth
              label="Occasion"
              variant="outlined"
              SelectProps={{ native: true }}
            >
              {["None", "Birthday", "Anniversary", "Business Dinner", "Other"].map((occasion) => (
                <option key={occasion} value={occasion}>
                  {occasion}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Special Requests"
              variant="outlined"
              multiline
              rows={3}
            />
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: "#f59e0b",
                color: "#000",
                px: 6,
                py: 1.5,
                fontSize: "1.1rem",
                fontWeight: "bold",
              }}
            >
              Book Table
            </Button>
          </Grid>
        </Grid>
      </form>
    </motion.div>
  </Box>
);

export default Reservation;