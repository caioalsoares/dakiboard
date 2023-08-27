import styled from 'styled-components'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend, ComposedChart, Line } from 'recharts';
import SelectComponent from '@/components/select'


const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 8400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 10210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 7290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 4000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 10500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 8100,
  },
];

const WeekOverWeekContainer = styled.div`
    background: #1759FF;
`

const LayoutItem = styled.div<{marginTop?: string, height?: string}>`
    width: 1300px;
    height:  ${ props => props.height};
    padding:30px;
    margin: 0px auto;
    margin-top: ${ props => props.marginTop};
`
const WeekOverWeekHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;

`
const Title = styled.span`
    font-size:18px;
    font-weight: 500;
    color: white;

`
const WeekOverWeekFilterContainer = styled.div`
    display: inline-flex;

    gap: 10px;
`

const WeekOverWeekFilters = () => {
    return (
        <WeekOverWeekFilterContainer>
        <SelectComponent placeholder='Variavel 1'/>
        <SelectComponent placeholder='Variavel 2'/>
        </WeekOverWeekFilterContainer>
    )
}

const WeekOverWeekChart = () => {
    return (
        <ResponsiveContainer height="100%">
        <ComposedChart width={1200} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#b5e3ff"stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#b5e3ff" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#00133b" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#00133b" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" stroke='#a2daff' strokeWidth={2} axisLine={false} tick={{fontSize: 12}} />
  <YAxis stroke='#a2daff' strokeWidth={2} axisLine={false} tick={{fontSize: 12}}/>
  <Tooltip wrapperClassName='TooltipChart' wrapperStyle={{borderRadius: "0px"}}/>
  <Area type="monotone" dataKey="uv" stroke="#FFF" strokeWidth={3} fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="pv" stroke="#00133b" fillOpacity={1} strokeWidth={3} fill="url(#colorPv)" />
  <Line type="linear" dataKey="amt" stroke="#ffc52c" strokeWidth={3} fill='#ffc52c'/>
  <Legend align='right'/>
</ComposedChart></ResponsiveContainer>
    )
}


const WeekOverWeek = () => {
    return (
        <WeekOverWeekContainer>
            <LayoutItem>
            <WeekOverWeekHeader>
                <Title>Evolução semanal</Title> 
                <WeekOverWeekFilters/>
            </WeekOverWeekHeader>
            
            <LayoutItem height='320px'>
            <WeekOverWeekChart/>
            </LayoutItem>
            </LayoutItem>

        </WeekOverWeekContainer>
    )
}

export default WeekOverWeek