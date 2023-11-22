import Tooltip from '../../ayongUI/components/tooltip';

const Popup = () => (
	<div
		style={{
			height: 30,
			border: '1px solid #ddd',
			background: 'black',
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
				<Tooltip popup={<Popup />}>
					<button style={{ marginRight: '0px', height: '20px' }}>
						{'hover1'}
					</button>
				</Tooltip>
			</fieldset>
			<fieldset>
				<legend>基本2</legend>
				<Tooltip placement='right' popup={<Popup />}>
					<button style={{ marginRight: '0px', height: '20px' }}>
						{'hover2'}
					</button>
				</Tooltip>
			</fieldset>
			<fieldset>
				<legend>基本3</legend>
				<Tooltip popup={<Popup />} placement='bottom'>
					<button style={{ marginRight: '0px', height: '20px' }}>
						{'hover3'}
					</button>
				</Tooltip>
			</fieldset>
			<fieldset>
				<legend>基本3</legend>
				<Tooltip popup={<Popup />} placement='left'>
					<button style={{ marginRight: '0px', height: '20px' }}>
						{'hover3'}
					</button>
				</Tooltip>
			</fieldset>
		</div>
	);
};

export default TooltipPage;
