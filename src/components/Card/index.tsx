import {
    Card,
    CardContent,
    CardDescription,
  } from "@/components/ui/card"

import styled from 'styled-components'
import Image from "next/image"

const cardIcon = (cardTitle: string): string => {
    switch (cardTitle){
        case 'GMV':
            return './gmvicon.svg'
        case 'Impressions':
            return './impressionsicon.svg'
        case 'Orders':
            return './salesicon.svg'
        case 'Sales':
           return './ordersicon.svg'
        case 'Marketshare':
        return './marketshareicon.svg'
        default:
            return './gmvicon.svg'
    }
}

const CardHeaderContainer = styled.div`
    padding: 24px;
    display: grid;
    grid-template-columns: 1fr auto;

`

const CardTitle = styled.div`
  font-size:18px;
  font-weight: 500;
`

const DashboardItem = (props: any) => {
    return (<Card>
    <CardHeaderContainer>
        <CardTitle>{props.cardTitle}</CardTitle>
        <Image src={cardIcon(props.cardTitle)} alt='icon' width={15} height={15}/>
    </CardHeaderContainer>
    <CardContent>
    {props.children}
    </CardContent>
    </Card>)
}

export default DashboardItem