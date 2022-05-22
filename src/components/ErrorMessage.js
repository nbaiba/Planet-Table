import Paper from "@mui/material/Paper";
import Backdrop from "@mui/material/Backdrop";

const ErrorMessage = () => {
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <Paper
          elevation={3}
          sx={{
            width: "500px",
            height: "250px",
            margin: " 0 auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            verticalAlign: "middle",
            position: "absolute",
            top: "30%",
            left: "0",
            right: "0",
            backgroundColor: "#d46959",
            color: "#ffffff",
          }}
        >
          <h2
            sx={{
              margin: "auto",
              textAlign: "center",
            }}
          >
            ERROR: Failed to fetch data
          </h2>
        </Paper>
      </Backdrop>
    </div>
  );
};

export default ErrorMessage;
