import {useDebounce} from "../../ayongUI/utils";
import {Table} from "../../ayongUI";
import React from "react";
import ConditionalRender from "@/components/conditional-render/conditional-render.tsx";
import OmsSyntaxHighlight from "@/components/oms-syntax-high-light/oms-syntax-high-light.tsx";
import {DataItem} from "@/ayongUI/components/table/table.tsx";

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

const JSXType: string = `
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
   );
export default App;   
`
const tableGroup: string = `
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
const App = () =>(
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
    </fieldset>
);
export default App; 
`
const draggable: string = `
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
const App = () =>(
  <fieldset>
       <legend>可拖拽表格</legend>
       <Table className='diy-table' draggable columns={columns} data={data}/>
   </fieldset>
)
export default App; 
`

const unfold: string = `
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
const App = () =>(
     <fieldset>
             <legend>展开折叠 行</legend>
             <Table className='diy-table'
                    test='test'
                    expandable={{
                       expandedRowRender: (record: Item) => (<p>{record.name} 为你展示展开折叠行功能</p>),
                        onExpandChange: (index: number, state: boolean) => {
                          console.log(\点击了折叠按钮---当前第\{index + 1}按钮状态\, state)
                        },
                        expandedRowKeys: [0, 2]
                    }} columns={columns} data={data}/>
     </fieldset>
)
export default App; 
`


const diyUnfold: string = `
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
const App = () =>(
   <fieldset>
           <legend>自定义 展开/折叠按钮</legend>
           <Table className='diy-table'
                  test='test'
                  expandable={{
                     expandedRowRender: (record) => (<p>{record.name} 为你展示展开折叠行功能</p>),
                      expandIcon: ({onExpand, record, expanded}: {
                         record: number,
                          expanded: boolean,
                          onExpand: (record: number) => void
                      }) => {
                        return (
                           <span onClick={() => onExpand(record)}>
                                   {expanded ? <MinusCircleOutlined/> : <PlusCircleOutlined/>}
                           </span>)

                      },
                      expandedRowKeys: [0, 2]
           }} columns={columns} data={data}/>
    </fieldset>
)
export default App; 
`
const sotre=`
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
const columns =  [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',

    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        defaultSortOrder: 'ascend',//指定默认排序方式分为  ascend descend 两种方式
        sorter: (a, b) => a.age - b.age,//指定排序规则
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

const cellActiveClassName = `
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
  /** 动态设置 年龄58岁的行样式 **/
    const cellActiveClassName = (record: Item) => {
        if (record.age === 58) return 'active'
    }
const App = () =>(
            <fieldset>
                <legend>动态设置 行样式cellActiveClassName</legend>
                <Table columns={columns} cellActiveClassName={cellActiveClassName} data={data}/>
            </fieldset>
)
export default App; 
    
/** css样式 **/
 .active {
    background: #8aabec;
    color: #fff;
}
`

const data = [
    {
        key: '1',
        name: 'data',
        illustrate: '数据类型参照示例代码',
        defaultValue: '-',
        type: 'DataItem[]',
        version: '1.0'
    },
    {
        key: '2',
        name: 'columns',
        illustrate: '列数据 数据类型参照示例代码',
        defaultValue: '-',
        type: 'Column[]',
        version: '1.0'
    },
    {
        key: '3',
        name: 'className',
        illustrate: '样式类名',
        defaultValue: '-',
        type: 'string',
        version: '1.0'
    },
    {
        key: '4',
        name: 'draggable',
        illustrate: '是否可拖拽',
        defaultValue: 'false',
        type: 'boolean',
        version: '1.0'
    },
    {
        key: '5',
        name: 'onDdragAfter',
        illustrate: '拖拽后的回调,接受拖拽后的新行数据、列数据',
        defaultValue: '-',
        type: '(data: DataItem[], column: Column[]) => void;',
        version: '1.0'
    },
    {
        key: '6',
        name: 'expandable',
        illustrate: '扩展展开设置 ',
        defaultValue: '-',
        type: '详情见Expandable类型介绍',
        version: '1.0'
    },

];
const expandableData = [
    {
        key: '1',
        name: 'expandedRowRender',
        illustrate: '展开的行内容,可接受当前行的数据item,使用方式见代码示例',
        defaultValue: '-',
        type: '(item:DataItem) => React.FC',
        version: '1.0'
    },
    {
        key: '2',
        name: 'expandedRowKeys',
        illustrate: '具有展开的行的下标索引, 使用方式见代码示例',
        defaultValue: '-',
        type: 'string[]',
        version: '1.0'
    },
    {
        key: '3',
        name: 'onExpandChange',
        illustrate: '只有使用默认展开图标才有此参数!点击展开的回调,接受当前行数据的索引下标 与 当前展开状态',
        defaultValue: '-',
        type: '(index: number, state: boolean) => void',
        version: '1.0'
    },
    {
        key: '4',
        name: 'expandIcon',
        illustrate: '自定义展开的图标,接收 expandIconProps 参数,详见下方讲解',
        defaultValue: '-',
        type: '(props: expandIconProps) => ReactNode;',
        version: '1.0'
    },
]

const expandIconPropsData = [
    {
        key: '1',
        name: 'expanded',
        illustrate: '当前展开状态 true展开;false关闭',
        defaultValue: 'false',
        type: 'boolean',
        version: '1.0'
    },
    {
        key: '2',
        name: 'record',
        illustrate: '当前展开下标',
        defaultValue: '-',
        type: 'number',
        version: '1.0'
    },
    {
        key: '3',
        name: 'onExpand',
        illustrate: '自定义展开icon! 必传字段用于动态改变icon状态',
        defaultValue: '-',
        type: '(record: number) => void',
        version: '1.0'
    },
]

export default {
    data,
    sotre,
    essential,
    jsxType,
    tableGroup,
    JSXType,
    draggable,
    unfold,
    diyUnfold,
    cellActiveClassName,
    expandIconPropsData,
    expandableData
}
