import { useEffect } from 'react'

const MainPage = () => {
    useEffect(() => {
        document.title = 'MAIN PAGE TITLE'
    })
  return (
    <div>MainPage</div>
  )
}

export default MainPage