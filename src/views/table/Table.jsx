import React, { Component } from 'react';
import { getTable } from '../../api/tableList'
import { Table, Button, Tag } from 'antd'

class Test extends Component {
    constructor () {
        super()
        this.state = {
          name: {
            id: 'id',
            title: '标题',
            author: '作者',
            amout: '阅读量',
            createAt: '时间'
          },
            dataSource : [],
            columns : [],
              total: 0
        }
    }
    render() {
        return (
            <div>
                <Button onClick={this.getList.bind(this)}>获取文章列表</Button>
                <Table 
                  columns={this.state.columns}
                  dataSource={this.state.dataSource}                  
                  pagination={{
                    total: this.state.total
                  }}
                  ></Table>
            </div>
        );
    }
    getList () {
      getTable().then(resp => {
        const columns = Object.keys(resp.list[0]).map(item => {
          console.log(resp);

          if (item === 'amout') {
            return {
              title: this.state.name[item],              
              key: item,
              render: (atext, record) => {
                return <Tag color={ record.amout >200 ? 'red' : 'green' }>{record.amout}</Tag>
              }
            }
          }
          return {
            title: this.state.name[item],
            key: item,
            dataIndex: item
          }
        })

        this.setState({
          total: resp.total,
          columns,
          dataSource: resp.list
        })
        
      })
    }
}

export default Test;