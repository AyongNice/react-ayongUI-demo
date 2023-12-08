import React, {useEffect, useState} from 'react';
// import {Table,CodeDisplay} from "dist";
import {Table} from "@/ayongUI/index.ts";
import './index.less';
import codeDemo from './code-demo.ts';
import TitleCom from '../../components/title-com/title-com.tsx';
import {useGlobalState} from '../../data-store/index.ts';
import {MinusCircleOutlined, PlusCircleOutlined} from '@ant-design/icons';
import global from '@/config/index.ts';
import useExpandableList from "@/components/code-display/index.ts";
import CodeDisplayCom from "@/components/code-display/code-display.tsx";

const Column = Table.Column;
const ColumnGroup = Table.ColumnGroup;

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
    },
    {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
    },
];
const columnsStore = [
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
/** 动态设置 年龄58岁的行样式 **/
const cellActiveClassName = (record: Item) => {
    if (record.age === 58) return 'active';
};

/**
 * React 组件封装设计思想
 * 1.父组件可以通过 className 自定义样式
 * 2.父组件的多参数形式 兼容 数据提前整合
 * 3.父组件多参数设置 冲突处理
 * 4.父组件默认值 处理
 * @constructor
 */
function TablePage() {
    const [theme] = useGlobalState('theme');
    const [ceshi] = useGlobalState('ceshi');
    const {expandedItems, handleExpandItem, handleExpandAll} = useExpandableList([1, 2, 3, 4]);

    //计算属性
    useEffect(()=>{
        console.log('theme---TablePage',theme);
        console.log('ceshi---TablePage',ceshi)
    },[theme,ceshi])

    return (
        <div>
            <TitleCom title='Table' onUnfold={handleExpandAll}/>
            <fieldset>
                <legend>指定 data 和 columns数据基本写法</legend>
                <Table
                    data={data}
                    columns={columns}
                    className={`table-theme-${theme}`}
                    cellActiveClassName={cellActiveClassName}
                />
                <CodeDisplayCom textContent={codeDemo.essential} keyIndex={1} list={expandedItems}/>

            </fieldset>

            <fieldset>
                <legend>JSX风格写法</legend>
                <Table data={data} className={`table-theme-${theme}`}>
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
                <CodeDisplayCom textContent={codeDemo.jsxType} keyIndex={2} list={expandedItems}/>

            </fieldset>
            <fieldset>
                <legend>指定排序</legend>
                <p className='illustrate'>
                    排序功能需要在 columns 列数据中传入 指定用的 指定排序规则
                    defaultSortOrder 非必传字段 为指定 默认排序 升/降序 'ascend' 'descend'
                    两种形式 false 为默认值. 默认不排序
                </p>
                <Table
                    className={`table-theme-${theme}`}
                    columns={columnsStore}
                    data={data}
                />
                <CodeDisplayCom textContent={codeDemo.sotre} keyIndex={3} list={expandedItems}/>

            </fieldset>
            <fieldset>
                <legend>表头分组</legend>
                <Table data={data} className={`table-theme-${theme}`}>
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
                <CodeDisplayCom textContent={codeDemo.tableGroup} keyIndex={4} list={expandedItems}/>

            </fieldset>

            <fieldset>
                <legend>可拖拽表格</legend>
                <Table
                    data={data}
                    draggable
                    columns={columns}
                    className={`table-theme-${theme}`}
                />
                <CodeDisplayCom textContent={codeDemo.draggable} keyIndex={5} list={expandedItems}/>


            </fieldset>

            <fieldset>
                <legend>展开折叠 行</legend>
                <Table
                    className={`table-theme-${theme}`}
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
                <CodeDisplayCom textContent={codeDemo.unfold} keyIndex={5} list={expandedItems}/>

            </fieldset>

            <fieldset>
                <legend>自定义 展开/折叠按钮</legend>
                <Table
                    className={`table-theme-${theme}`}
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
                <CodeDisplayCom textContent={codeDemo.diyUnfold} keyIndex={6} list={expandedItems}/>

            </fieldset>

            <h3>Porps 介绍</h3>
            <Table
                className={`table-theme-${theme}`}
                columns={global.columns}
                data={codeDemo.data}
            />
            <h4>expandable 展开功能参数 介绍</h4>
            <Table
                className={`table-theme-${theme}`}
                columns={global.columns}
                data={codeDemo.expandableData}
            />
            <h4>expandIconProps 自定义展开icon参数 介绍</h4>
            <Table
                className={`table-theme-${theme}`}
                columns={global.columns}
                data={codeDemo.expandIconPropsData}
            />
        </div>
    );
}

export default TablePage;
