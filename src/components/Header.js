import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

const Header = ({ searchbar }) => {
  return (
    <Box>
      <AppBar
        sx={{
          backgroundColor: "#473485",
          display: "flex",
          flexDirection: "row",
          gap: { sm: "5%", md: "60%" },
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h2>Planets</h2>
        {searchbar.render("Filter")}
      </AppBar>
    </Box>
  );
};

export default Header;
