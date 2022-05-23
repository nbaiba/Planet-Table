import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

const Header = ({ searchbar }) => {
  return (
    <Box>
      <AppBar
        sx={{
          paddingLeft: "5%",
          backgroundColor: "#473485",
          display: "flex",
          flexDirection: "row",
          gap: "60%",
          justifyContent: "center",
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
