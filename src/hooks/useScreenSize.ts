import { Breakpoint, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react" ;

export const useScreenSize = () => {

    const isScreenSizeXSorSM = useMediaQuery(useTheme().breakpoints.down('md'));
    const isScreenSizeLGorXL = useMediaQuery(useTheme().breakpoints.up('lg'));

    const isScreenSizeXS = useMediaQuery(useTheme().breakpoints.only('xs'));
    const isScreenSizeSM = useMediaQuery(useTheme().breakpoints.only('sm'));
    const isScreenSizeMD = useMediaQuery(useTheme().breakpoints.only('md'));
    const isScreenSizeLG = useMediaQuery(useTheme().breakpoints.only('lg'));
    const isScreenSizeXL = useMediaQuery(useTheme().breakpoints.only('xl'));

    const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>('md');

    useEffect(()=>{
        if(isScreenSizeXS) return setCurrentBreakpoint('xs')
        if(isScreenSizeSM) return setCurrentBreakpoint('sm')
        if(isScreenSizeMD) return setCurrentBreakpoint('md')
        if(isScreenSizeLG) return setCurrentBreakpoint('lg')
        if(isScreenSizeXL) return setCurrentBreakpoint('xl')
    }, [isScreenSizeXS, isScreenSizeSM, isScreenSizeMD, isScreenSizeLG, isScreenSizeXL])

    return {
        isScreenSizeXSorSM,
        isScreenSizeLGorXL,
        isScreenSizeXS,
        isScreenSizeSM, 
        isScreenSizeMD,
        isScreenSizeLG, 
        isScreenSizeXL,
        currentBreakpoint
    }

}