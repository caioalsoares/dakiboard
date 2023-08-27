import styled from 'styled-components'
import DashboardItem from '@/components/Card/'
import { PieChart, Pie, Sector, Cell, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer  } from 'recharts';




const data = [
    {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 450, pv: 2600, amt: 2200},
    {name: 'Page B', uv: 425, pv: 2500, amt: 2300},
    {name: 'Page B', uv: 500, pv: 2700, amt: 2800},
    {name: 'Page B', uv: 480, pv: 2600, amt: 3000},
    {name: 'Page B', uv: 680, pv: 3600, amt: 3500}
  
  ]

  const COLORS = ['#009afe', '#ffc52c', '#0f3dae', '#c9ddfe'];



const MarketContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 20px;
`

const PieChartLegend = styled.span<{ color: string}>`
    padding:4px;
    background-color: ${props => props.color};
    color: white;
    border-radius: 3px;
    font-size:12px;
    margin-right: 5px;
`
const renderPieChart = () => {
    return (
        <ResponsiveContainer width={350} height={250}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={60}
            label
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="amt"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>

        </ResponsiveContainer>
      );
}

const renderLineChart = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={400}
            height={300}
            data={data}
          >
            <XAxis dataKey="name"  stroke='#CCC' strokeWidth={2} axisLine={false} tick={{fontSize: 12,}} dy={10} />
            <YAxis stroke='#CCC' strokeWidth={2} axisLine={false} tick={{fontSize: 12}}/>
            <Tooltip />
            <Line type="monotone" dataKey="uv" stroke={COLORS[0]} strokeWidth={3} fill={COLORS[0]} />
            <Line type="monotone" dataKey="pv" stroke={COLORS[1]} strokeWidth={3} fill={COLORS[1]} />
            <Line type="monotone" dataKey="amt" stroke={COLORS[2]} strokeWidth={3} fill={COLORS[2]} />
          </LineChart>
        </ResponsiveContainer>
      );
}

const renderMarketShareLegend = () => {

    const MarketShareLegend = styled.div`
        text-align: center;
        margin-top: 20px;
    `
    return (
        <MarketShareLegend>
        {data.map((entry, index) => (
            <PieChartLegend color={COLORS[index % COLORS.length]}>{entry.name}</PieChartLegend>
            ))}
        </MarketShareLegend>
    )
}

const MarketShareCard = () => {
    return (
        <DashboardItem cardTitle= 'Marketshare'>
            <MarketContent>
            <div>{renderPieChart()}
            

            </div>
            <div>
                {renderLineChart()}
            </div>
            </MarketContent>
            {renderMarketShareLegend()}
        </DashboardItem>
    )
}

export default MarketShareCard