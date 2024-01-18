import { useEffect, useState } from "react"

export const useWindowDimensions = () => {

    const [windowDimensions, setWindowDimensions] = useState({
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth
    });

    useEffect(()=>{
        const handleWindowResize = () => {

            const {innerHeight, innerWidth} = window;

            setWindowDimensions({
                windowHeight: innerHeight,
                windowWidth: innerWidth
            });
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    },[])

    return {windowDimensions}
}
