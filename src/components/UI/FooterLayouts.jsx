import useRandomWords from "../hooks/RandomWords"

export default function Footer() {
  const {footerStrings} = useRandomWords();
  return <>
  <a href="">
  <h1 className='text-sm sm:text-lg font-ptsans opacity-50  border-b border-b-gray-400 text-gray-800 dark:text-gray-300'>{footerStrings}</h1>
  </a>
  </>
}