import {useDebounce} from "../../ayongUI/utils";
import {Table} from "../../ayongUI";
import React from "react";

const essential: string = `
import React from 'react';
import { Table} from 'ayongUI';
const data = [
    {
        key: '1',
        age: 32,
        name: 'John Brown',
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        age: 42,
        name: 'Jim Green',
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        age: 32,
        name: 'Joe Black',
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];
const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
    },
];
const App = () => (
 <Table className='diy-table' columns={columns} data={data}/>
);
export default App;
`

const jsxType: string = `
import React from 'react';
import { Table} from 'ayongUI';
const Column = Table.Column;
const data = [
    {
        key: '1',
        age: 32,
        name: 'John Brown',
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        age: 42,
        name: 'Jim Green',
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        age: 32,
        name: 'Joe Black',
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];
const App = () => (
                <Table data={data}>
                    <Column title="Age" dataIndex="age" key={1}/>
                    <Column title="Address" dataIndex="address" key={2}/>
                    <Column
                        key={3}
                        title="Tags"
                        dataIndex="tags"
                        render={(tags: string[]) => (
                            <>
                                {tags.map((tag: string) => (
                                    <span style={{color: 'blue'}} key={tag}>{tag}</span>
                                ))}
                            </>
                        )}
                    />
                </Table>
);
export default App;                
`
const data = [
    {
        key: '1',
        name: 'type',
        illustrate: '按钮类型 \'primary\' | \'default\' | \'dashed\' ',
        defaultValue: 'default',
        type: 'string',
        version: '1.0'
    },
    {
        key: '2',
        name: 'time',
        illustrate: '防抖时间设置 0 为不防抖 ',
        defaultValue: '-',
        type: 'number',
        version: '1.0'
    },
    {
        key: '3',
        name: 'size',
        illustrate: '按钮大小 \'large\' | \'default\' | \'small\' ',
        defaultValue: 'default',
        type: 'string',
        version: '1.0'
    },
    {
        key: '4',
        name: 'shape',
        illustrate: '按钮形状 \'circle\' | \'default\' | \'round\' ',
        defaultValue: 'default',
        type: 'string',
        version: '1.0'
    },
    {
        key: '5',
        name: 'htmlType',
        illustrate: '原生button类型 ',
        defaultValue: 'button',
        type: 'string',
        version: '1.0'
    },

];


export default {
    data,
    essential,
    jsxType
}
