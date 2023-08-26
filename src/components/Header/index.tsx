"use-client"

import Image from 'next/image'
import styled from 'styled-components'

const HeaderContent = styled.div`
  padding: 10px;
  border-bottom: 1px solid blue;
`


const Header = () => {
    return (
        <HeaderContent>
        <Image
        src="/dakilogo.svg"
        alt="Next.js Logo"
        width={70}
        height={50}
        priority
      /></HeaderContent>
    )
}

export default Header