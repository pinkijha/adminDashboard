import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const AnalyticsChart = () => {
  const data = [
    {
      name: 'Jan',
      Expense: 4000,
      Income: 2400
    },
    {
      name: 'Feb',
      Expense: 3000,
      Income: 1398
    },
    {
      name: 'Mar',
      Expense: 2000,
      Income: 9800
    },
    {
      name: 'Apr',
      Expense: 2780,
      Income: 3908
    },
    {
      name: 'May',
      Expense: 1890,
      Income: 4800
    },
    {
      name: 'Jun',
      Expense: 2390,
      Income: 3800
    },
    {
      name: 'July',
      Expense: 3490,
      Income: 4300
    },
    {
      name: 'Aug',
      Expense: 2000,
      Income: 9800
    },
    {
      name: 'Sep',
      Expense: 2780,
      Income: 3908
    },
    {
      name: 'Oct',
      Expense: 1890,
      Income: 4800
    },
    {
      name: 'Nov',
      Expense: 2390,
      Income: 3800
    },
    {
      name: 'Dec',
      Expense: 3490,
      Income: 4300
    }
  ]
  
  return (
    <div className="md:h-[25rem] h-72 w-[300px] md:w-[53rem] md:m-4 md:p-4 m-2  bg-dark-navy p-2 rounded  flex flex-col flex-1">
			<strong className="text-white font-medium">Transactions</strong>
			<div className="mt-3 flex-1 text-xs">
				<ResponsiveContainer >
					<BarChart
						width={500}
						height={300}
						data={data}
						margin={{
							top: 0,
							right: 10,
							left: -10,
							bottom: 0
						}}
					>
						<CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="Income" fill="#0ea5e9" />
						<Bar dataKey="Expense" fill="#ea580c" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>

  )
}

export default AnalyticsChart
