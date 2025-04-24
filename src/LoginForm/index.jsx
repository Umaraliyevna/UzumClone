import React, { useState } from "react";

import {
  Button,
  Dialog,
  FormControl,
  FormLabel,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { Form } from "./LoginForm.style";

function LoginForm(props) {
  const {
    onClose,
    open,
    username,
    setUsername,
    password,
    setPassword,
    isLoggedIn,
    setIsLoggedIn,
    onLogin,
  } = props;
  const [showPassword, setShowPassword] = useState(false);

  const handleClose = () => {
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
      onLogin(username.trim(), password);
      setIsLoggedIn(true);
      handleClose();
    }
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      {!isLoggedIn && (
        <Form onSubmit={handleSubmit}>
          <Typography variant="h4" textAlign="center" sx={{ m: 1 }}>
            Hisobingizga kiring
          </Typography>
          <FormControl fullWidth>
            <FormLabel className="formLabel">Foydalanuvchi nomi</FormLabel>
            <TextField
              className="formInput"
              id="outlined-basic"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth variant="filled">
            <FormLabel className="formLabel">Parol</FormLabel>
            <TextField
              className="formInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              slotProps={{
                input: {
                  pattern: "[0-9]*",
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
              type={showPassword ? "text" : "password"}
            />
          </FormControl>
          <Button
            sx={{ mt: 4 }}
            type="submit"
            variant="contained"
            color="success"
            fullWidth
          >
            Tizimg kirish
          </Button>
          <Button color="info" sx={{ mt: 4 }} fullWidth onClick={handleClose}>
            Parolni tiklash
          </Button>
        </Form>
      )}
    </Dialog>
  );
}

export default LoginForm;
