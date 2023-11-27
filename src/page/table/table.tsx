import React, { useEffect, useState, useMemo } from 'react';
// import {Table,CodeDisplay} from "dist";
import { Table, CodeDisplay } from "@/ayongUI/index.ts";
import './index.less';
import ConditionalRender from '../../components/conditional-render/conditional-render.tsx';
import OmsSyntaxHighlight from '../../components/oms-syntax-high-light/oms-syntax-high-light.tsx';
import codeDemo from './code-demo.ts';
import TitleCom from '../../components/title-com/title-com.tsx';
import { useGlobalState } from '../../data-store/index.ts';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import global from '@/config/index.ts';
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
	const [unfold, setUnfold] = useState(false);

	/** 展开折叠状态对象 **/
	const map = {
		deft: false,
		jsx: false,
		sort: false,
		group: false,
		drag: false,
		unfold: false,
		diyUnfold: false,
	};
	const [codeUnfoldMap, setCodeUnfoldMap] = useState<{
		[key: string]: boolean;
	}>(map);
	const [show, setShow] = useState(false);
	/** 展开/折叠示例 **/
	const onUnfold = () => {
		setUnfold(!unfold);
		console.log('展开/折叠示例', codeUnfoldMap);
	};
	useEffect(() => {
		setCodeUnfoldMap({});
	}, [unfold]);
	//展开单个代码示例
	const onUnfoldCode = (key: string) => {
		setCodeUnfoldMap((prevState) => {
			console.log('111', prevState);
			if (!prevState) prevState = map;
			console.log('展开/折叠示例--prevState', prevState[key]);
			return { ...prevState, [key]: !prevState[key] };
		});
	};
	// 展开函数 codeUnfoldMap[key] 可以设置单个开关, unfold 设置全部开关 代码示例

	const unfoldCode = () => {
		if (codeUnfoldMap['jsx'] === undefined) return unfold;
		return !codeUnfoldMap['jsx'];
	};

	//计算属性

	return (
		<div>
			{Object.values(codeUnfoldMap).map((item, index) => (
				<p key={index}>{JSON.parse(item)}</p>
			))}
			<TitleCom title='Table' onUnfold={onUnfold} />
			<fieldset>
				<legend>指定 data 和 columns数据基本写法</legend>

				<Table
					data={data}
					columns={columns}
					className={`table-theme-${theme}`}
					cellActiveClassName={cellActiveClassName}
				/>

				<ConditionalRender show={unfoldCode('def')}>
					<OmsSyntaxHighlight textContent={codeDemo.essential} />
				</ConditionalRender>
				<CodeDisplay
					onClick={() => onUnfoldCode('def')}
					style={{ width: '20px' }}
				/>
			</fieldset>

			<fieldset>
				<legend>JSX风格写法</legend>
				<Table data={data} className={`table-theme-${theme}`}>
					<Column title='Age' dataIndex='age' key={1} />
					<Column title='Address' dataIndex='address' key={2} />
					<Column
						key={3}
						title='Tags'
						dataIndex='tags'
						render={(tags: string[]) => (
							<>
								{tags.map((tag: string) => (
									<span style={{ color: 'blue' }} key={tag}>
										{tag}
									</span>
								))}
							</>
						)}
					/>
				</Table>

				<ConditionalRender show={unfoldCode('jsx')}>
					<OmsSyntaxHighlight textContent={codeDemo.jsxType} />
				</ConditionalRender>
				<CodeDisplay
					onClick={() => onUnfoldCode('jsx')}
					style={{ width: '20px' }}
				/>
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

				<ConditionalRender show={unfoldCode('sort')}>
					<OmsSyntaxHighlight textContent={codeDemo.sotre} />
				</ConditionalRender>
				<CodeDisplay
					onClick={() => onUnfoldCode('sort')}
					style={{ width: '20px' }}
				/>
			</fieldset>
			<fieldset>
				<legend>表头分组</legend>
				<Table  data={data} className={`table-theme-${theme}`}>
					<Column title='First Name' dataIndex='firstName' key={10} />
					<ColumnGroup  title='Name' key={666}>
						<Column title='Last Name' dataIndex='lastName' key={11} />
						<Column title='Age' dataIndex='age' key={1} />
					</ColumnGroup>
					<Column title='Address' dataIndex='address' key={200} />
					<Column
						key={3}
						title='Tags'
						dataIndex='tags'
						render={(tags: string[]) => (
							<>
								{tags.map((tag: string) => (
									<span style={{ color: 'blue' }} key={tag}>
										{tag}
									</span>
								))}
							</>
						)}
					/>
				</Table>

				<ConditionalRender show={unfoldCode('group')}>
					<OmsSyntaxHighlight textContent={codeDemo.tableGroup} />
				</ConditionalRender>

				<CodeDisplay
					onClick={() => onUnfoldCode('group')}
					style={{ width: '20px' }}
				/>
			</fieldset>

			<fieldset>
				<legend>可拖拽表格</legend>
				<Table
					data={data}
					draggable
					columns={columns}
					className={`table-theme-${theme}`}
				/>

				<ConditionalRender show={unfoldCode('drag')}>
					<OmsSyntaxHighlight textContent={codeDemo.draggable} />
				</ConditionalRender>
				<CodeDisplay
					onClick={() => onUnfoldCode('drag')}
					style={{ width: '20px' }}
				/>
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

				<ConditionalRender show={unfoldCode('unfold')}>
					<OmsSyntaxHighlight textContent={codeDemo.unfold} />
				</ConditionalRender>
				<CodeDisplay
					onClick={() => onUnfoldCode('unfold')}
					style={{ width: '20px' }}
				/>
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
									{expanded ? <MinusCircleOutlined /> : <PlusCircleOutlined />}
								</span>
							);
						},
						expandedRowKeys: [0, 2],
					}}
					columns={columns}
					data={data}
				/>

				<ConditionalRender show={unfoldCode('diyUnfold')}>
					<OmsSyntaxHighlight textContent={codeDemo.diyUnfold} />
				</ConditionalRender>
				<CodeDisplay
					onClick={() => onUnfoldCode('diyUnfold')}
					style={{ width: '20px' }}
				/>
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
