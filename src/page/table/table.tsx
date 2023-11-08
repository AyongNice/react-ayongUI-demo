import React, {useState} from "react";
import {Table} from "../../ayongUI/index.ts";
import './index.less'
import ConditionalRender from "../../components/conditional-render/conditional-render.tsx";
import OmsSyntaxHighlight from "../../components/oms-syntax-high-light/oms-syntax-high-light.tsx";
import codeDemo from "./code-demo.ts";
import TitleCom from "../../components/title-com/title-com.tsx";

console.log(codeDemo)
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

        </div>
    );
}

export default TablePage;
