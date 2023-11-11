import React, {useState, Context} from "react";
import {Table} from "../../ayongUI/index.ts";
import './index.less'
import ConditionalRender from "../../components/conditional-render/conditional-render.tsx";
import OmsSyntaxHighlight from "../../components/oms-syntax-high-light/oms-syntax-high-light.tsx";
import codeDemo from "./code-demo.ts";
import TitleCom from "../../components/title-com/title-com.tsx";
import * as Icons from '@ant-design/icons';

const Column = Table.Column;
const ColumnGroup = Table.ColumnGroup;

const data = [
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
    const [unfold, setUnfold] = useState(true);

    /** 展开/折叠示例 **/
    const onUnfold = () => {
        setUnfold(!unfold)
    }

    return (
        <div>
            <TitleCom title='button' onUnfold={onUnfold}/>
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
                <Table data={data}>
                    <ColumnGroup title="Name5">
                        <Column title="First Name" dataIndex="firstName" key={10}/>
                        <Column title="Last Name" dataIndex="lastName" key={11}/>
                    </ColumnGroup>
                    <Column title="Age" dataIndex="age" key={1}/>
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
        </div>
    );
}

export default TablePage;
