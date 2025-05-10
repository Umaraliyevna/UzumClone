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
import { Controller, useForm } from "react-hook-form";

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
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleClose = () => {
    onClose();
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
      onLogin(username.trim(), password);
      setIsLoggedIn(true);
    }
  };

  const onSubmit = (values) => {
    handleClose();
    if (values.username.trim() && values.password.trim()) {
      onLogin(values.username.trim(), values.password);
      setIsLoggedIn(true);
    }
  };
  return (
    <Dialog onClose={handleClose} open={open}>
      {!isLoggedIn && (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h4" textAlign="center" sx={{ m: 1 }}>
            Hisobingizga kiring
          </Typography>
          <Controller
            control={control}
            fullWidth
            name="username"
            rules={{ required: { value: true, message: "Username kiriting" } }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                className="formInput"
                variant="outlined"
                label="Username"
                error={!!error}
                {...field}
                helperText={
                  error?.message ? error.message : "Please enter your username"
                }
              />
            )}
          />
          <Controller
            control={control}
            fullWidth
            name="password"
            rules={{
              required: { value: true, message: "Parol kiriting" },
              minLength: {
                value: 8,
                message:
                  "Password eng kamida 8 ta harfdan iborad bo'lishi kerak",
              },
            }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                className="formInput"
                label="Password"
                error={!!error}
                {...field}
                helperText={
                  error?.message ? error.message : "Please enter your password"
                }
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
            )}
          />

          <Button
            sx={{ mt: 4 }}
            type="submit"
            variant="contained"
            color="success"
            fullWidth
          >
            Tizimg kirish
          </Button>
          <Button color="info" sx={{ mt: 2 }} fullWidth>
            Parolni tiklash
          </Button>
        </Form>
      )}
    </Dialog>
  );
}

export default LoginForm;
