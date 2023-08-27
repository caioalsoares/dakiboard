'use client'
import styled from 'styled-components'
import './globals.css' 

import Filters from '@/components/Filters'
import DashboardItem from '@/components/Card/'
import abbrNum from '@/lib/utils/abbrmoney'
import { LineChart, Line, Bar, BarChart, ResponsiveContainer } from 'recharts';
import WeekOverWeek from '@/components/WeekOverWeek'
import MarketShareCard from '@/components/MarketShare'


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
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={data}>
          <Bar dataKey="uv" fill="#1759FF" radius={[3, 3, 3, 3]} />
        </BarChart>
      </ResponsiveContainer>
   )
}

const DashboardWrapper = styled.div`
  width: 1300px;
  display: grid;
  padding: 15px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 15px;
  margin: 0px auto;
`

const MarketShareWrapper = styled.div`
  width: 1300px;
  display: grid;
  padding: 15px;
  gap: 15px;
  margin: 0px auto;
`

const DashboardValue = styled.div<{numberSize: string, textAlign?: string}>`
    font-size: ${ props => props.numberSize  };
    font-weight: medium;
    text-align: ${ props => props.textAlign  };
`
const BarChartContainer = styled.div`
    width: 240px;
    height: 100px;
`

const PositiveVariation = styled.div`
  font-weight: bold;
  font-size: 12px;
  color: #00ff40;
`
const NegativeVariation = styled.div`
  font-weight: bold;
  font-size: 12px;
  color: red;
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
            <BarChartContainer>
              {renderBarChart()}
            </BarChartContainer>
            
          </DashboardValue>
        </DashboardItem>        
        <DashboardItem cardTitle= 'GMV'>
          <DashboardValue numberSize='40px' textAlign='center'>
            {abbrNum(452317678.89, 2)}
            <PositiveVariation>▲ +3,85%</PositiveVariation>
          </DashboardValue>
          </DashboardItem>
        <DashboardItem cardTitle= 'Impressions'>
          <DashboardValue numberSize='40px' textAlign='center'>
          {abbrNum(452317678.89, 2)}
          <NegativeVariation>▼ -4,85%</NegativeVariation>

          </DashboardValue>
          </DashboardItem>
        {renderBarChart()}
      </DashboardWrapper>
      <WeekOverWeek/>
      <MarketShareWrapper>
        <MarketShareCard/>
      </MarketShareWrapper>
      
    </>
  )
}
