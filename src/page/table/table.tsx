import React, {useState, useEffect} from 'react';
import {Table} from "dist";
// import {Table} from '@/ayongUI/index.ts';
import './index.less';
import ConditionalRender from '../../components/conditional-render/conditional-render.tsx';
import OmsSyntaxHighlight from '../../components/oms-syntax-high-light/oms-syntax-high-light.tsx';
import codeDemo from './code-demo.ts';
import TitleCom from '../../components/title-com/title-com.tsx';
import {useGlobalState} from '../../data-store/index.ts';

import {MinusCircleOutlined, PlusCircleOutlined} from '@ant-design/icons';

const Column = Table.Column;
const ColumnGroup = Table.ColumnGroup;

console.log('Table', Table);
console.log('ColumnGroup', ColumnGroup);

interface Item {
    key: string;
    age: number;
    firstName: string;
    lastName: string;
    name: string;
    address: string;
    tags: string[];
}

const data: Item[] = [
    {
        key: '1',
        age: 32,
        firstName: 'John',
        lastName: 'Brown',
        name: 'John Brown',
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        age: 42,
        firstName: 'Jim',
        lastName: 'Green',
        name: 'Jim Green',
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        age: 58,
        firstName: 'Joe',
        lastName: 'Black',
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
        defaultSortOrder: 'ascend',
        sorter: (a, b) => a.age - b.age,
    },
    {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
    },
];

/**
 * React 组件封装设计思想
 * 1.父组件可以通过 className 自定义样式
 * 2.父组件的多参数形式 兼容 数据提前整合
 * 3.父组件多参数设置 冲突处理
 * 4.父组件默认值 处理
 * @constructor
 */
function TablePage() {
    const [unfold, setUnfold] = useState(false);

    /** 展开/折叠示例 **/
    const onUnfold = () => {
        setUnfold(!unfold);
    };
    /** 动态设置 年龄58岁的行样式 **/
    const cellActiveClassName = (record: Item) => {
        if (record.age === 58) return 'active'
    }

    return (
        <div>
            <TitleCom title='Table' onUnfold={onUnfold}/>
            <fieldset>
                <legend>指定 data 和 columns数据基本写法</legend>
                <Table className='diy-table' cellActiveClassName={cellActiveClassName} columns={columns} data={data}/>

                <ConditionalRender show={unfold}>
                    <OmsSyntaxHighlight textContent={codeDemo.essential}/>
                </ConditionalRender>
            </fieldset>

            <fieldset>
                <legend>JSX风格写法</legend>
                <Table data={data} >
                    <Column title='Age' dataIndex='age' key={1}/>
                    <Column title='Address' dataIndex='address' key={2}/>
                    <Column
                        key={3}
                        title='Tags'
                        dataIndex='tags'
                        render={(tags: string[]) => (
                            <>
                                {tags.map((tag: string) => (
                                    <span style={{color: 'blue'}} key={tag}>
										{tag}
									</span>
                                ))}
                            </>
                        )}
                    />
                </Table>

                <ConditionalRender show={unfold}>
                    <OmsSyntaxHighlight textContent={codeDemo.jsxType}/>
                </ConditionalRender>
            </fieldset>

            <fieldset>
                <legend>表头分组</legend>
                <Table data={data}>
                    <Column title='First Name' dataIndex='firstName' key={10}/>
                    <ColumnGroup title='Name' key={666}>
                        <Column title='Last Name' dataIndex='lastName' key={11}/>
                        <Column title='Age' dataIndex='age' key={1}/>
                    </ColumnGroup>
                    <Column title='Address' dataIndex='address' key={200}/>
                    <Column
                        key={3}
                        title='Tags'
                        dataIndex='tags'
                        render={(tags: string[]) => (
                            <>
                                {tags.map((tag: string) => (
                                    <span style={{color: 'blue'}} key={tag}>
										{tag}
									</span>
                                ))}
                            </>
                        )}
                    />
                </Table>

                <ConditionalRender show={unfold}>
                    <OmsSyntaxHighlight textContent={codeDemo.tableGroup}/>
                </ConditionalRender>
            </fieldset>

            <fieldset>
                <legend>可拖拽表格</legend>
                <Table className='diy-table' draggable columns={columns} data={data}/>

                <ConditionalRender show={unfold}>
                    <OmsSyntaxHighlight textContent={codeDemo.draggable}/>
                </ConditionalRender>
            </fieldset>

            <fieldset>
                <legend>展开折叠 行</legend>
                <Table
                    className='diy-table'
                    test='test'
                    expandable={{
                        expandedRowRender: (record: Item) => (
                            <p>{record.name} 为你展示展开折叠行功能</p>
                        ),
                        onExpandChange: (index: number, state: boolean) => {
                            console.log(`点击了折叠按钮---当前第${index + 1}按钮状态`, state);
                        },
                        expandedRowKeys: [0, 2],
                    }}
                    columns={columns}
                    data={data}
                />

                <ConditionalRender show={unfold}>
                    <OmsSyntaxHighlight textContent={codeDemo.unfold}/>
                </ConditionalRender>
            </fieldset>

            <fieldset>
                <legend>自定义 展开/折叠按钮</legend>
                <Table
                    className='diy-table'
                    test='test'
                    expandable={{
                        expandedRowRender: (record) => (
                            <p>{record.name} 为你展示展开折叠行功能</p>
                        ),
                        expandIcon: ({
                                         onExpand,
                                         record,
                                         expanded,
                                     }: {
                            record: number;
                            expanded: boolean;
                            onExpand: (record: number) => void;
                        }) => {
                            return (
                                <span onClick={() => onExpand(record)}>
									{expanded ? <MinusCircleOutlined/> : <PlusCircleOutlined/>}
								</span>
                            );
                        },
                        expandedRowKeys: [0, 2],
                    }}
                    columns={columns}
                    data={data}
                />

                <ConditionalRender show={unfold}>
                    <OmsSyntaxHighlight textContent={codeDemo.diyUnfold}/>
                </ConditionalRender>
            </fieldset>
        </div>
    );
}

export default TablePage;
