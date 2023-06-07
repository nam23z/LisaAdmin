import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';
import { styled } from 'styled-components';

const data = [
  {
    name: 'Jan',
    uv: 4000,

  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398,
  },
  {
    name: 'Mar',
    uv: 2000,
    pv: 9800,
  },
  {
    name: 'Apr',
    uv: 2780,
    pv: 3908,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
  },
  {
    name: 'Jun',
    uv: 2390,
    pv: 3800,
  },
  {
    name: 'Jul',
    uv: 3490,
    pv: 4300,
  },
  {
    name: 'Aug',
    uv: 3490,
    pv: 4300,
  },
  {
    name: 'Sep',
    uv: 3490,
    pv: 4300,
  },
  {
    name: 'Oct',
    uv: 3490,
    pv: 4300,
  },
  {
    name: 'Nov',
    uv: 3490,
    pv: 4300,
  },
  {
    name: 'Dec',
    uv: 3490,
    pv: 4300,
  }
];

const StyledBarChart = styled.div`

    width: 70%;
    .topBarChart{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left{
        }
        h4{
            font-family: 'Roboto';
            color: #A7A7A7;
        }
    }
`
const FirstBarChart = () => {
    return(
        <StyledBarChart>
            <div className="topBarChart">
                <div className="Left">
                    <h4>Total Revenue</h4>
                    <p>$980,273.00</p>
                </div>
                <div className="right">
                    <div className="menuRight">THIS YEAR</div>
                </div>
            </div>
            <ResponsiveContainer width="100%" height="100%" minWidth="500px" minHeight="400px">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <XAxis dataKey="name" />
            <Bar radius={[13 ,13 ,0 ,0]} dataKey="pv" fill="#AEAEAE" />
            <Bar radius={[13 ,13 ,0 ,0]} dataKey="uv" fill="#FF6F61" />
            </BarChart>
        </ResponsiveContainer>
        </StyledBarChart>
    )
}
export default FirstBarChart;