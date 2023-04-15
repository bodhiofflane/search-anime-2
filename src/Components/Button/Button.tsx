
import { ButtonProps } from './Button.props';

import './Button.scss';

const Button = ({text, appearance}: ButtonProps) => {
  if (appearance === 'link') {
    return <button className="button button__ghost">{text}</button>;
  } else if (appearance === 'btn') {
    return <button className="button button__primary">{text}</button>;
  } else {
    return <button className="button">{text}</button>;
  }
};

export default Button;