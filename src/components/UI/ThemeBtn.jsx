
import { IconButton } from "@material-tailwind/react";
import useDarkMode from "../hooks/Theme";
import { HiLightBulb, HiOutlineLightBulb } from "react-icons/hi2";


const ThemeBtn = ({ className, variant }) => {
  const { themeMode, toggleTheme } = useDarkMode();
  return (
    <>
      <IconButton className={className} variant={variant} onClick={toggleTheme}>
        {themeMode === 'light' ? (
          <HiLightBulb className="text-gray-700" />
        ) :
          (<HiOutlineLightBulb />)}
      </IconButton>

    </>
  )
}

export default ThemeBtn