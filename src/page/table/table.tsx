import React, {useState, Context, useEffect} from "react";
import {Table} from "../../ayongUI/index.ts";
import './index.less'
import ConditionalRender from "../../components/conditional-render/conditional-render.tsx";
import OmsSyntaxHighlight from "../../components/oms-syntax-high-light/oms-syntax-high-light.tsx";
import codeDemo from "./code-demo.ts";
import TitleCom from "../../components/title-com/title-com.tsx";
import * as Icons from '@ant-design/icons';

const Column = Table.Column;
const ColumnGroup = Table.ColumnGroup;
import {useGlobalState} from '../../data-store/index.ts'


interface Item {
    key: string,
    age: number,
    firstName: string,
    lastName: string,
    name: string,
    address: string,
    tags: string[]
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
        age: 32,
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
    },
    {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
    },
];

function TablePage() {
    const [unfold, setUnfold] = useState(false);
    useEffect(() => {

    }, [])
    const [theme, setTheme] = useGlobalState('theme');

    /** 展开/折叠示例 **/
    const onUnfold = () => {
        setUnfold(!unfold)
    }

    return (
        <div>
            <TitleCom title='Table' onUnfold={onUnfold}/>
            <fieldset>
                <legend>指定 data 和 columns数据基本写法</legend>
                <Table className='diy-table' columns={columns} data={data}/>

                <ConditionalRender show={unfold}>
                    <OmsSyntaxHighlight textContent={codeDemo.essential}/>
                </ConditionalRender>

            </fieldset>

            <fieldset>
                <legend>JSX风格写法</legend>
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

                <ConditionalRender show={unfold}>
                    <OmsSyntaxHighlight textContent={codeDemo.jsxType}/>
                </ConditionalRender>

            </fieldset>
            <fieldset>
                <legend>可拖拽表格</legend>
                <Table className='diy-table' draggable columns={columns} data={data}/>

                <ConditionalRender show={unfold}>
                    <OmsSyntaxHighlight textContent={codeDemo.essential}/>
                </ConditionalRender>

            </fieldset>
            <fieldset>
                <legend>表头分组</legend>
                <Table data={data}

                >
                    <Column title="First Name" dataIndex="firstName" key={10}/>
                    <ColumnGroup title="Name">
                        <Column title="Last Name" dataIndex="lastName" key={11}/>
                        <Column title="Age" dataIndex="age" key={1}/>

                    </ColumnGroup>
                    <Column title="Address" dataIndex="address" key={200}/>
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

                <ConditionalRender show={unfold}>
                    <OmsSyntaxHighlight textContent={codeDemo.essential}/>
                </ConditionalRender>

            </fieldset>

            <fieldset>
                <legend>展开折叠 行</legend>
                <Table className='diy-table'
                       test='test'
                       expandable={{
                           expandedRowRender: (record: Item) => {
                               return <p>ayongUI
                                   为你展示展开折叠行功能</p>
                           },
                           onExpand: (e) => {
                               console.log(11, e)
                           },
                           expandedRowKeys: [0,2]
                       }} columns={columns} data={data}/>

                <ConditionalRender show={unfold}>
                    <OmsSyntaxHighlight textContent={codeDemo.essential}/>
                </ConditionalRender>

            </fieldset>
        </div>
    );
}

export default TablePage;
