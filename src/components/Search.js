import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

const Search = ({ column: { filterValue, setFilter } }) => (
  <TextField
    onChange={(e) => setFilter(e.target.value)}
    value={filterValue || ""}
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
);

export default Search;
