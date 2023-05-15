import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

interface FormLoginProps {
  isLogin?: boolean;
}
const FormLogin: React.FC<FormLoginProps> = ({ isLogin = true }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const form = useForm();
  const { control, handleSubmit } = form;
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const onSubmit = (data: any) => console.log(data);
  return (
    <div className="clsformlogin ">
      <div className="clsformlogin-content">
        <h2 className="clsformlogin-title">
          {" "}
          {isLogin ? "Login with username password" : "Sign up"}
        </h2>
        <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name={"username"}
            control={control}
            rules={{ required: " Nhap user name" }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                error={!!error}
                helperText={error && error.message}
                onChange={onChange}
                value={value}
                className={"clsformlogin-input"}
                label={"username"}
                size="small"
              />
            )}
          />
          <Controller
            name={"Password"}
            control={control}
            rules={{ required: " Nhap passworld" }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                onChange={onChange}
                value={value}
                error={!!error}
                helperText={error && error.message}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                className={"clsformlogin-input"}
                size="small"
                label="Password"
              />
            )}
          />
          <Button variant="contained" type="submit" className="clsformlogin-button">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FormLogin;
