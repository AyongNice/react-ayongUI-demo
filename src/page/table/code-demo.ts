import {useDebounce} from "../../ayongUI/utils";
import {Table} from "../../ayongUI";
import React from "react";
import ConditionalRender from "@/components/conditional-render/conditional-render.tsx";
import OmsSyntaxHighlight from "@/components/oms-syntax-high-light/oms-syntax-high-light.tsx";

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

const  JSXType: string = `
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
    jsxType,
    tableGroup,
    JSXType,
    draggable,
    unfold,
    diyUnfold,
    cellActiveClassName
}
