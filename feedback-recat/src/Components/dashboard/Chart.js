import React, { Component } from 'react'
import { useTheme } from '@material-ui/core/styles';
// import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import Title from './Title';
import { getAllFeedbacks } from '../../Services/apiService'
import { Feedback } from '@material-ui/icons';

export default class Barchart extends Component {
    state={
        feedbacks:null,
        data:[],
    }

    createData(time, amount) {
        return { time, amount };
    }

    async componentDidMount(){
       await getAllFeedbacks().then(result=>{
            this.setState({feedbacks:result.data})
            
           
          }).catch();
          
          var {feedbacks}=this.state;
          var num1=feedbacks.filter((item) => item.userType == "driver").length;
          console.log(num1)
          const temp=[];
          temp.push(this.createData('Drivers',feedbacks.filter((item) => item.userType == "driver").length))
          temp.push(this.createData('Passenger',feedbacks.filter((item) => item.userType == "passengers").length))
          temp.push(this.createData('Bracke working',feedbacks.filter((item) => item.brakeWorks === true).length))
          temp.push(this.createData('Seat belt ',feedbacks.filter((item) => item.seatbeltWorks === true).length))
          temp.push(this.createData('Horn apply',feedbacks.filter((item) => item.hornWorks === true).length))
          this.setState({data:temp})
    }
    render() {
        return (
            <React.Fragment>
                <Title>Today</Title>
                <ResponsiveContainer>
                    {this.state.data && <BarChart
                        width={500}
                        height={300}
                        data={this.state.data}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="amount" fill="#8884d8" />

                    </BarChart>}
                    {/* <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
              }}
            >
              Sales ($)
            </Label>
          </YAxis>
          <Line
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart> */}
                </ResponsiveContainer>
            </React.Fragment>
        )
    }
}
