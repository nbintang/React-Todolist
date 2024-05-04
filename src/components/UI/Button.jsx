import { Button } from "@material-tailwind/react";

const ButtonUi = ({children, type, onClick, className, variant, onKeyDown}) => {
  return (
    <Button variant={variant} onKeyDown={onKeyDown} className={`${className} rounded`} type={type} onClick={onClick}>
      {children}
    </Button>
  )
};

export default ButtonUi;