import { useState } from 'react'
import Login from '@/components/Login.tsx'
import Register from '@/components/Register.tsx'

function LoginRegister() {

    const [showLogin, setShowLogin] = useState<boolean>(true)

    const handleLogin = (): void => {
      if(!showLogin){
        setShowLogin(true)
      }
    }

    const handleRegister = (): void => {
      if(showLogin){
        setShowLogin(false)
      }
    }
      
    return (
      <div className="login-register">
        <div className='login-register__item center'>
          <div className='login-register__item__button'>
            <div onClick={handleLogin} className={`login-register__item__button__element login-register__item__button__element--left ${showLogin ? 'login-register__item__button__element--selected' : 'login-register__item__button__element--not-selected'}`}>Login</div>
            <div onClick={handleRegister} className={`login-register__item__button__element login-register__item__button__element--right ${showLogin ? 'login-register__item__button__element--not-selected' : 'login-register__item__button__element--selected'}`}>Registro</div>
          </div>
          { showLogin ? <Login /> : <Register /> }
        </div>
      </div>
    )

}

export default LoginRegister