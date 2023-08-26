'use client'
import styled from 'styled-components'
import './globals.css' 

import Filters from '@/components/Filters'
import DashboardItem from '@/components/Card/'
import abbrNum from '@/lib/utils/abbrmoney'
import { LineChart, Line, BarChart, Bar, ResponsiveContainer } from 'recharts';

const data = [
  {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 450, pv: 2600, amt: 2200},
  {name: 'Page B', uv: 425, pv: 2500, amt: 2300},
  {name: 'Page B', uv: 500, pv: 2700, amt: 2800},
  {name: 'Page B', uv: 480, pv: 2600, amt: 3000},
  {name: 'Page B', uv: 680, pv: 3600, amt: 3500}

]

const renderLineChart = () => {
  return (
    <LineChart width={240} height={100} data={data} barSize={200}>
      <Line type="monotone" dataKey="uv" stroke="#1759FF" strokeWidth={2} />
    </LineChart>
  )
}

const renderBarChart = () => {
    return (
        <BarChart width={240} height={100} data={data}>
          <Bar dataKey="uv" fill="#1759FF" radius={[5, 5, 0, 0]}/>
        </BarChart>        
   )
}

const DashboardWrapper = styled.div`
  width: 1200px;
  display: grid;
  padding: 15px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 15px;
  margin: 0px auto;
`

const DashboardValue = styled.h1<{numberSize: string}>`
    font-size: ${ props => props.numberSize  };
    font-weight: medium;
`



export default function Home() {


  return (
    <>
    <Filters/>
      <DashboardWrapper>
        <DashboardItem cardTitle= 'Sales'>
          <DashboardValue numberSize='24px'>
            {abbrNum(452317678.89, 2)}
          </DashboardValue>
          {renderLineChart()}
        </DashboardItem>

        <DashboardItem cardTitle= 'Orders'>
          <DashboardValue numberSize='24px'>
            {abbrNum(452317678.89, 2)}
          </DashboardValue>
          {renderBarChart()}
        </DashboardItem>        
        <DashboardItem cardTitle= 'GMV'>
          <DashboardValue numberSize='40px'>
            {abbrNum(452317678.89, 2)}
          </DashboardValue>
          </DashboardItem>
        <DashboardItem cardTitle= 'Impressions'><DashboardValue numberSize='40px'>{abbrNum(452317678.89, 2)}</DashboardValue></DashboardItem>
      </DashboardWrapper>
    </>
  )
}
