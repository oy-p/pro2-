import React, { Component } from 'react';
import { Table, Button, Tag  } from 'antd'

import './index.scss'

const data = [
  {
    key: '1',
    name: ['John Brown', 'Jim Green', 'John Brown', 'John Brown', 'John Brown', 'John Brown', 'John Brown', 'John Brown', 'John Brown', 'John Brown', 'John Brown'],
  },
  {
    key: '2',
    name: ['Jim Green', 'Jim Green'],
  },
  {
    key: '3',
    name:[ 'Joe Black'],
  },
  {
    key: '4',
    name: ['Jim Red'],
  },
];

class Home extends Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
  };

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'age',
      },
    });
  };

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        render: (a,b,c) => {
          
          return <span >
            {
              Object.keys(data[c]).map( item => {
                if (item === 'name') {
                  
                  const a = [...data[c][item]]
                  return a.map( (item2,i) => {
                    return <Tag key={i} className={c%2===0 ? 'red' : 'yellow'}>{item2}</Tag>
                  })
                }
                return ''
              })
            }
          </span>
        },
        rowClassName:'red1',
        filters: [
          { text: 'Joe', value: 'Joe' },
          { text: 'Jim', value: 'Jim' },
        ],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
        ellipsis: true,
      }
    ];
    return (
      <div>
        <div className="table-operations">
          <Button onClick={this.setAgeSort}>Sort age</Button>
          <Button onClick={this.clearFilters}>Clear filters</Button>
          <Button onClick={this.clearAll}>Clear filters and sorters</Button>
        </div>
        <Table 
          columns={columns} 
          dataSource={data} 
          onChange={this.handleChange}
          bordered
          // rowClassName={(index,b) => {
          //   console.log(b);
            
          //  return b%2===0 ? 'red' : 'green'
          // }}
        />
      </div>
    );
  }
}

export default Home;