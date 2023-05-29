import { useState } from 'react'
import { BsMoon } from 'react-icons/bs'

export const DarkStyle = {
  bodyBg: 'hsl(207, 26%, 17%)',
  fontColor: 'hsl(0, 0%, 100%)',
  elements: 'hsl(209, 23%, 22%)',
}
export const LightStyle = {
  bodyBg: 'hsl(0, 0%, 98%)',
  fontColor: `hsl(200, 15%, 8%)`,
  elements: `white`,
}
const Header = () => {
  const [mode, setMode] = useState(false)
  function switchMode() {
    setMode(!mode)
  }
  return (
    <div className='header'>
      <h1>Where in the world?</h1>
      <button onClick={switchMode}>
        <BsMoon className='moon' />
        Dark Mode
      </button>
    </div>
  )
}

export default Header
