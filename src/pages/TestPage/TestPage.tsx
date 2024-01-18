/* eslint-disable no-useless-escape */
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { useGetUserByIdQuery, useGetUserInfoQuery } from '../../services/api'

export const TestPage = () => {
    
    //const isLoading = useAppSelector((state) => state.auth.isLoading)

    const {data} = useGetUserInfoQuery({})
    console.log({data})
    
    return (
        <>
            <Box>
                HOL QUE TAL
            </Box>
            <Link to={'/programa'}>
                PROGRAMA 
            </Link>
        </>
    )
}
