/*
 * @Author       : heyongfeng
 * @Date         : 2021-09-17 10:52:13
 * @Description  :
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-17 14:12:34
 */
import React, { Component } from 'react'
import {
  Button,
  Table,
  Tag,
  Space,
  Input,
  Form,
  DatePicker,
  Radio,
  Checkbox
} from 'antd'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: any) => <a>{text}</a>
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags: any[]) => (
      <>
        {tags.map((tag: any) => {
          let color = tag.length > 5 ? 'geekblue' : 'green'
          if (tag === 'loser') {
            color = 'volcano'
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          )
        })}
      </>
    )
  },
  {
    title: 'Action',
    key: 'action',
    render: (text: any, record: any) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    )
  }
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
]

export default class Hello extends Component {
  render() {
    return (
      <>
        <h3>Hello React!</h3>
        <Button type="primary">我是一个antd按钮</Button>
        <Button>我是一个antd按钮</Button>
        <br />
        <Table columns={columns} dataSource={data} />
        <Form
          autoComplete="off"
          wrapperCol={{ span: 12 }}
          labelCol={{ span: 4 }}
          labelAlign="right"
        >
          <Form.Item label="姓名">
            <Input placeholder="请输入姓名" />
          </Form.Item>
          <Form.Item label="出生日期">
            <DatePicker />
          </Form.Item>
          <Form.Item label="性别">
            <Radio.Group defaultValue={1}>
              <Radio value={1}>男</Radio>
              <Radio value={2}>女</Radio>
              <Radio value={3}>保密</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="爱好">
            <Checkbox.Group
              defaultValue={[0,1]}
              options={[
                {
                  label: '苹果',
                  value: 0
                },
                {
                  label: '橘子',
                  value: 1
                },
                {
                  label: '橙子',
                  value: 2
                },
                {
                  label: '梨',
                  value: 3
                }
              ]}
            ></Checkbox.Group>
          </Form.Item>
          <Form.Item label="就读时间">
            <DatePicker.RangePicker />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 4 }}>
            <Button type="primary">提交</Button>
            <Button>取消</Button>
          </Form.Item>
        </Form>
      </>
    )
  }
}
