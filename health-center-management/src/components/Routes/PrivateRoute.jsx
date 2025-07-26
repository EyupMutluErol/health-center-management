import { isAuthenticated } from '../../services/authService'

function PrivateRoute({children}) {
  return isAuthenticated() ? children : <Navigate to='/login'/>;
}

export default PrivateRoute
