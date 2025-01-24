import { useEffect, useState } from "react"
import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Button from '@mui/material/Button';
import { collection, query, where, getDocs, and } from 'firebase/firestore';
import { db } from '../firebase.config.js';

function Login({ doLogin }: { doLogin: Function }) {

  const [email, setEmail] = useState<string>('')
  const [emailError, setEmailError] = useState<string>(null)
  const [password, setPassword] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>(null)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [validate, setValidate] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>("")

  const toggleShowPassword = (): void => {
    setShowPassword(!showPassword)
  }

  const handleEmailChanged = (event: any): void => {
    setEmail(event.target.value)
  }

  const handlePasswordChanged = (event: any): void => {
    setPassword(event.target.value)
  }

  const checkKey = (event: any): void => {
    if(event.key === "Enter") {
      doLoginEvent();
    }
  }

  const doLoginEvent = (): void => {
    setValidate(!validate);
    setTimeout(async() => {
      if(emailError !== null && emailError.length === 0 && passwordError !== null && passwordError.length === 0){
                  setLoading(true);
                  setErrorMessage("");
                try {
                  const user = await getDocs(query(collection(db, "user"), and(where("email", "==", email), where("password", "==", password))));
                  if(user.docs.length > 0){
                   doLogin(JSON.stringify({
                      email: user.docs[0].data().email,
                      username: user.docs[0].data().username
                    }))
                    setLoading(false);     
                  } else {               
                    setErrorMessage("Email o contraseña incorrectas");
                    setLoading(false); 
                  }
                 
              } catch(e){
                setErrorMessage("Ha ocurrido un error");
                setLoading(false);
              }
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
  
    return (
      <div className='login'>
        <div className='login__item'>
          <TextField id="email" label="Email" variant="outlined" sx={{ m: 1, width: '25ch' }}        
           error={emailError?.length > 0} helperText={emailError ? emailError : ''} value={email} onChange={handleEmailChanged} onKeyUp={checkKey} /> 
        </div>
        <div className='login__item'>
         <TextField id="password" label="Contraseña" variant="outlined" sx={{ m: 1, width: '25ch' }}
         type={showPassword ? 'text' : 'password'}  
         error={passwordError?.length > 0} helperText={passwordError ? passwordError : ''} value={password} onChange={handlePasswordChanged} onKeyUp={checkKey}
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
          <Button variant="contained" loading={loading} sx={{ m: 1, width: '25ch' }} onClick={doLoginEvent}>Acceder</Button>
        </div>
        <div className='error-message'>{ errorMessage.length > 0 ? errorMessage : '' }</div>
      </div>
    )

}

export default Login