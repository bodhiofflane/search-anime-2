import Button from '../Button/Button';
import './Login.scss';

const Login = () => {
  return (
    <div className="login">
      <Button text={'Login'} appearance={'btn'}/>
      <Button text={'Logout'} appearance={'btn'}/>
    </div>
  );
}
 
export default Login;