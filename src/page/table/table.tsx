import React from "react";
import {Table} from "../../ayongUI/index.ts";
import './index.less'

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

function TablePage() {
    return (
        <div>
            <h1>Table Example</h1>
            <Table className='diy-table' columns={columns} data={data}/>

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
        </div>
    );
}

export default TablePage;
