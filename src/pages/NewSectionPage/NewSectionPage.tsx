import { ThemeProvider } from "@emotion/react";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Theme, createTheme, outlinedInputClasses, styled, useTheme } from "@mui/material"
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const CustomTextField = styled(TextField)({
    '& label': {
        color: 'white',
    },
    '& label.Mui-focused': {
        color: '#408CF9',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#408CF9',
    },
    '& .MuiOutlinedInput-root': {
        color: 'white',
        '& fieldset': {
            border: '1.5px solid white',
        },
        '&:hover fieldset': {
            border: '2px solid white',
        },
        '&.Mui-focused fieldset': {
            border: '2px solid #408CF9',

        },
    },
});

const CustomSelect = styled(Select)({
    '& label': {
        color: 'white',
    },
    '& label.Mui-focused': {
        color: '#408CF9',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#408CF9',
    },
    '& .MuiOutlinedInput-root': {
        color: 'white',
        '& fieldset': {
            border: '1.5px solid white',
        },
        '&:hover fieldset': {
            border: '2px solid white',
        },
        '&.Mui-focused fieldset': {
            border: '2px solid #408CF9',
        },
    },
    '& .MuiSelect-select': {
        border: '1.5px solid white', 
        color: 'white', // color del texto del Select
        '&:focus': {
            border: 'none',
        },
        '&:hover': {
            border: '2px solid white'
        }
    },
    '& .MuiSelect-icon': {
        color: 'white', // color del icono del Select
    },
});




export const NewSectionPage = () => {

    const {control, register, handleSubmit, watch, reset} = useForm({
        defaultValues: {
            type: "",
            title: "",
            title_gl: "",
            title_en:  "",
        }
    });

    const [customOption, setCustomOption] = useState('');

    const handleCustomOptionChange = (event: any) => {
        setCustomOption(event.target.value);
      };

    const formValues = watch();

    const onSubmit = () => {
        reset();
        console.log({formValues})
    }

    return (
        <Box component={'form'} sx={{display: 'flex', flexDirection: 'column', backgroundColor: '#191919', color: 'white', gap: 3, p: 4, width: '500px', borderRadius: 4}} onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="type"
                control={control}
                render={({field})=>{
                    return (
                        <FormControl>
                            <InputLabel id='section-type'>Tipo de sección</InputLabel>
                            <CustomSelect {...field} labelId='section-type' label='Tipo de sección'>
                                <MenuItem value={'FOCO'}>Foco</MenuItem>
                                <MenuItem value={'COMPETITIVA'}>Competitiva</MenuItem>
                                <MenuItem value={'INMERSIVA'}>Inmersiva</MenuItem>
                                <MenuItem value={'MIRADAS DIVERSAS'}>Miradas Diversas</MenuItem>
                            </CustomSelect>
                        </FormControl>
                    )
                }}
            />
            <Controller
                name="title"
                control={control}
                render={({field})=>{
                    return (
                        <FormControl>
                            <CustomTextField 
                                label='Titulo'
                                {...field}
                                defaultValue={""}
                            />
                        </FormControl>
                    )
                }}
            />
            <Controller
                name="title_en"
                control={control}
                render={({field})=>{
                    return (
                        <FormControl>
                            <CustomTextField 
                                label='Titulo Inglés'
                                {...field}
                                defaultValue={""}
                            />
                        </FormControl>
                    )
                }}
            />
            <Controller
                name="title_gl"
                control={control}
                render={({field})=>{
                    return (
                        <FormControl>
                            <CustomTextField 
                                label='Título Gallego'
                                {...field}
                                defaultValue={""}
                            />
                        </FormControl>
                    )
                }}
            />
            <Button onClick={handleSubmit(onSubmit)}>GUARDAR</Button>
        </Box>
    )
}