import { useState, useEffect } from 'react';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Button from '@mui/material/Button';

function Register() {

  const [email, setEmail] = useState<string>('')
  const [emailError, setEmailError] = useState<string>(null)
  const [username, setUsername] = useState<string>('')
  const [usernameError, setUsernameError] = useState<string>(null)
  const [password, setPassword] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>(null)
  const [repeatPassword, setRepeatPassword] = useState<string>('')
  const [repeatPasswordError, setRepeatPasswordError] = useState<string>(null)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showRepeatPassword, setShowRepeatPassword] = useState<boolean>(false)
  const [validate, setValidate] = useState<boolean>(false)

  const toggleShowPassword = (): void => {
    setShowPassword(!showPassword)
  }

  const toggleShowRepeatPassword = (): void => {
    setShowRepeatPassword(!showRepeatPassword)
  }

  const handleEmailChanged = (event: any): void => {
    setEmail(event.target.value)
  }

  const handleUsernameChanged = (event: any): void => {
    setUsername(event.target.value)
  }

  const handlePasswordChanged = (event: any): void => {
    setPassword(event.target.value)
  }

  const handlePasswordRepeatChanged = (event: any): void => {
    setRepeatPassword(event.target.value)
  }

  const doRegister = (): void => {
    setValidate(!validate);
    setTimeout(() => {
      if(emailError !== null && emailError.length === 0 && usernameError !== null && usernameError?.length === 0 && passwordError !== null && passwordError?.length === 0 && repeatPassword !== null && repeatPassword?.length === 0){
        console.log("do register")
      }
    }, 500)
  }

   useEffect(() => {
    if(emailError === null) {
      setEmailError("")
    } else if(email.length === 0) {
      setEmailError("Campo requerido")
     } else if(email.length > 80) {
       setEmailError("Tamaño máximo 80 caracteres")
     } else if(!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
       setEmailError("Debe ser un email")
     } else {
       setEmailError("")
     }
   }, [email, validate]);

   useEffect(() => {
    if(usernameError === null){
      setUsernameError("")
    } else if(username.length === 0){
      setUsernameError("Campo requerido")
     }else if(username.length > 80){
      setUsernameError("Tamaño máximo 80 caracteres")
     } else {
      setUsernameError("")
     }
   }, [username, validate]);

   useEffect(() => {
    if(passwordError === null){
      setPasswordError("")
    } else if(password.length === 0){
      setPasswordError("Campo requerido")
     }else if(password.length > 8){
      setPasswordError("Tamaño máximo 8 caracteres")
     } else {
      setPasswordError("")
     }
   }, [password, validate]);

   useEffect(() => {
    if(repeatPasswordError === null){
      setRepeatPasswordError("")
    } else if(repeatPassword.length === 0){
      setRepeatPasswordError("Campo requerido")
     }else if(repeatPassword.length > 8){
      setRepeatPasswordError("Tamaño máximo 8 caracteres")
     } else if(repeatPassword !== password){
      setRepeatPasswordError("Las contraseñas no coinciden")
     } else {
      setRepeatPasswordError("")
     }
   }, [repeatPassword, password, validate]);
  
    return (
      <div className='login'>
        <div className='login__item'>
          <TextField id="email" label="Email" variant="outlined" sx={{ m: 1, width: '25ch' }}        
           error={emailError?.length > 0} helperText={emailError ? emailError : ''} value={email} onChange={handleEmailChanged} />
        </div>
        <div className='login__item'>
          <TextField id="username" label="Nombre de usuario" variant="outlined" sx={{ m: 1, width: '25ch' }}
          error={usernameError?.length > 0} helperText={usernameError ? usernameError : ''} value={username} onChange={handleUsernameChanged} />
        </div>
        <div className='login__item'>
         <TextField id="password" label="Contraseña" variant="outlined" sx={{ m: 1, width: '25ch' }}
         type={showPassword ? 'text' : 'password'}  
         error={passwordError?.length > 0} helperText={passwordError ? passwordError : ''} value={password} onChange={handlePasswordChanged}
         slotProps={{
          input: {
           endAdornment: <InputAdornment position="end">
           <IconButton
             aria-label={
               showPassword ? 'hide the password' : 'display the password'
             }
             onClick={toggleShowPassword}
             edge="end"
           >
             {showPassword ? <VisibilityOff /> : <Visibility />}
           </IconButton>
         </InputAdornment>,
          },
        }}
         />
        </div>
        <div className='login__item'>
        <TextField id="repeatPassword" label="Repetir contraseña" variant="outlined" sx={{ m: 1, width: '25ch' }}
         type={showRepeatPassword ? 'text' : 'password'}
         error={repeatPasswordError?.length > 0} helperText={repeatPasswordError ? repeatPasswordError : ''} value={repeatPassword} onChange={handlePasswordRepeatChanged}
         slotProps={{
          input: {
           endAdornment: <InputAdornment position="end">
           <IconButton
             aria-label={
              showRepeatPassword ? 'hide the password' : 'display the password'
             }
             onClick={toggleShowRepeatPassword}
             edge="end"
           >
             {showRepeatPassword ? <VisibilityOff /> : <Visibility />}
           </IconButton>
         </InputAdornment>,
          },
        }}
         />
        </div>
        <div className='login__item'>
          <Button variant="contained"  sx={{ m: 1, width: '25ch' }} onClick={doRegister}>Registrar</Button>
        </div>
      </div>
    )

}

export default Register