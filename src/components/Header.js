import TextField from "@mui/material/TextField";
import AppBar from "@mui/material/AppBar";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

const Header = () => {
  return (
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
              <SearchIcon style={{ color: "white" }} />
            </InputAdornment>
          ),
        }}
        InputLabelProps={{
          style: { color: "white" },
        }}
        sx={{ input: { color: "white" } }}
      />
    </AppBar>
  );
};

export default Header;
