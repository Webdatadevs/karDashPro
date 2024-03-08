import { Box } from '@chakra-ui/react'
import React from 'react'

const Layout = ({children}) => {
  return (
    <Box width={'97%'} gap={'20px'}  marginX={'auto'} display={'flex'}>
        {children}
    </Box>
  )
}

export default Layout