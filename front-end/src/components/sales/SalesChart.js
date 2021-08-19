import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const data = [
    {
      name: 'Jan',
      uv: 1000,
    },
    {
      name: 'Feb',
      uv: 2000,
    },
    {
      name: 'Mar',
      uv: 3000,
    },
    {
      name: 'Apr',
      uv: 4000,
    },
    {
      name: 'May',
      uv: 5000,
    },
    {
      name: 'Jun',
      uv: 6000,
    },
    {
      name: 'Jul',
      uv: 7000,
    },
    {
      name: 'Aug',
      uv: 8000,
    },
    {
      name: 'Sep',
      uv: 9000,
    },
    {
      name: 'Oct',
      uv: 10000,
    },
    {
      name: 'Nov',
      uv: 11000,
    },
    {
      name: 'Dec',
      uv: 12000,
    },
  ];

const SalesChart = () => {
    return (
        <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="uv"  />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        </LineChart>
    )
}

export default SalesChart

// import React, { PureComponent } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// export default class Example extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

//   render() {
//     return (
//       <ResponsiveContainer width="100%" height="100%">
//         <LineChart
//           width={500}
//           height={300}
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
//           <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//         </LineChart>
//       </ResponsiveContainer>
//     );
//   }
// }
