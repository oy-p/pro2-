import React, { Component, createRef } from 'react'
import {
  Card,
  Row,
  Col
} from 'antd'

import echarts from 'echarts'

import { getTable } from '../../api/tableList'

// import './dashboard.less'


export default class Dashboard extends Component {
  constructor() {
    super()
    this.articleAmount = createRef()
  }
  initArticleChart = () => {
    this.articleChart = echarts.init(this.articleAmount.current)
    getTable()
      .then(resp => {
        console.log(resp.list[0]);
        
        const option = {
          grid: {  
            left: '10',  
            right: '10',  
            bottom: '10',
            top: '10',
            containLabel: true  
          },        
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: resp.list.map(item => item.author)
          },
          yAxis: {
              type: 'value'
          },
          series: [{
              data: resp.list.map(item => item.amout),
              type: 'line',
              areaStyle: {}
          }]
        }
        this.articleChart.setOption(option)
      })
  }
  componentDidMount() {
    this.initArticleChart()
  }
  render() {
    return (
      <>
        <Card
          title="概览"
          bordered={false}
        >
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <div className="qf-gutter-box" style={{backgroundColor: '#29B6F6'}}>col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="qf-gutter-box" style={{backgroundColor: '#AB47BC'}}>col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="qf-gutter-box" style={{backgroundColor: '#FF7043'}}>col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="qf-gutter-box" style={{backgroundColor: '#43A047'}}>col-6</div>
            </Col>
          </Row>
        </Card>
        <Card
          title="最近浏览量"
          bordered={false}
        >
          <div ref={this.articleAmount} style={{height: '400px'}} />
        </Card>
      </>
    )
  }
}