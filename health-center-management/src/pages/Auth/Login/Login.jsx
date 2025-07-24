import LoginForm from '../../../components/LoginForm/LoginForm'
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="login-overlay"></div>
      <div className="login-form-wrapper">
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
