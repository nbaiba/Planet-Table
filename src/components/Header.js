import TextField from "@mui/material/TextField";
import AppBar from "@mui/material/AppBar";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";

const Header = () => {
  return (
    <Box>
      <AppBar
        sx={{
          paddingLeft: "10%",
          backgroundColor: "#473485",
          display: "flex",
          flexDirection: "row",
          gap: "60%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Planets</h2>
        <TextField
          color="primary"
          id="standard-basic"
          label="Search by name"
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon style={{ color: "#ffffff" }} />
              </InputAdornment>
            ),
          }}
          InputLabelProps={{
            style: { color: "#ffffff" },
          }}
          sx={{ input: { color: "#ffffff" } }}
        />
      </AppBar>
    </Box>
  );
};

export default Header;
