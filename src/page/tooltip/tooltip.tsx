import Tooltip from '../../ayongUI/components/tooltip/tooltip.tsx';

const Popup = () => (
	<div
		style={{
			height: 30,
			border: '1px solid #ddd',
			background: 'black',
			whiteSpace: 'nowrap',
		}}
	>
		This is a popup
	</div>
);

const TooltipPage = () => {
	return (
		<div>
			<h1>Tooltip</h1>
			<fieldset>
				<legend>基本1</legend>
				<Tooltip popup={'123456'}>
					<div>{'hover1'}</div>
				</Tooltip>
			</fieldset>
			<fieldset>
				<legend>基本2</legend>
				<Tooltip placement='right' popup={<Popup />}>
					<div>{'hover2'}</div>
				</Tooltip>
			</fieldset>
			<fieldset>
				<legend>基本3</legend>
				<Tooltip placement='bottom' popup={<Popup />}>
					<div>{'hover3'}</div>
				</Tooltip>
			</fieldset>
			<fieldset>
				<legend>基本3</legend>
				<Tooltip placement='left' popup={<Popup />}>
					<div>{'hover3'}</div>
				</Tooltip>
			</fieldset>
		</div>
	);
};

export default TooltipPage;
