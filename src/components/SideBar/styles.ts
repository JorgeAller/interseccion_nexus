import { Styles } from "../../interfaces/Styles.interface";

export const styles: Styles = {
    container: {
        height: '100%', 
        minWidth: '330px', 
    },
    secondContainer: {
        overflow: 'auto', 
        width: '330px',
        maxWidth: '330px',
        height: '100%',
        p: '20px',
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden',
        '&::-webkit-scrollbar': {
            width: '2px',
            backgroundColor: "transparent",
        },
            '&::-webkit-scrollbar-thumb': {
            backgroundColor: "black",
        },
        position: 'fixed',
        minWidth: '330px'
    },
    divider: {
        borderBottomWidth: 2, 
        borderColor: "black", 
        my: 2
    },
    fechaLugarContainer: {
        display: 'flex', 
        flexDirection: 'column', 
        gap: 1, 
        mb: {
            md: 1.5, 
            xl: 2.8
        }
    },
    lineaFechaLugar: {
        borderColor: 'black', 
        marginTop: '12px',
        display: 'inline-block', 
        height: '2px'
    },
    fechaContainer: {
        fontWeight: 800,
        right: '24px',
        fontSize: '25px',
        margin: 0,
        textAlign: 'end',
        display: 'flex',
        justifyContent: 'space-between',
        lineHeight: 1
    }, 
    lugarContainer: {
        fontWeight: 800,
        right: '24px',
        fontSize: '25px',
        margin: 0,
        textAlign: 'end',
        display: 'flex',
        justifyContent: 'space-between',
        lineHeight: 1
    },
    socialsAndLangs: {
        display: "flex", 
        flexDirection: "row", 
        justifyContent: "space-between", 
        height: '30px'
    },
    socials: {
        backgroundColor: 'transparent',
        height: '100%', 
        display: 'flex', 
        gap: 1
    }
}