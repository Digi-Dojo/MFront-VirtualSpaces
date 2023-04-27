import { Alert } from "@mui/material"

export const ErrorAlert = ({message}) => (
    <Alert variant="outlined" severity="error" style={{ marginTop: '16px' }}>An error occured {message !== "" ? `: ${message}` : ""} </Alert>
)

export const SuccessAlert = ({message}) => (
    <Alert variant="outlined" severity="success" style={{ marginTop: '16px' }}> Success! {message !== "" ? message : ""}  </Alert>
)

