
import { ContainerProps } from './Container.props';
import './Container.scss';

const Container = ({children}: ContainerProps) => {
  return (
    <div className="container">
      {children}
    </div>
  );
}
 
export default Container;