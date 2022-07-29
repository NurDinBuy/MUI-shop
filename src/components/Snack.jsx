import React from 'react';
import {Alert, Snackbar} from "@mui/material";

function Snack(props) {
    const {isOpen, handleClose = Function.prototype} = props
    return (
        <Snackbar
            open={isOpen}
            onClose={handleClose}
            autoHideDuration={3000}
        >
            <Alert
                severity={"success"}
            >
                Товар добавлен в корзину!
            </Alert>
        </Snackbar>
    );
}

export default Snack;