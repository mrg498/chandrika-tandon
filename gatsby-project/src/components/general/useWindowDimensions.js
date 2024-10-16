import { useEffect, useState } from "react"

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({windowWidth: 0, windowHeight: 0}); 

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      })
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  return windowDimensions
}

export default useWindowDimensions
