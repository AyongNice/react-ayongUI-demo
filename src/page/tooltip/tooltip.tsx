import Tooltip from '../../ayongUI/components/tooltip';
import {useState} from "react";
import {Button} from "@/ayongUI/index.ts";

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
const Tooltips = ({title, children, placement}) => {
    const [isVisible, setVisibility] = useState(false);

    const showTooltip = () => setVisibility(true);
    const hideTooltip = () => setVisibility(false);

    const getArrowPosition = () => {
        switch (placement) {
            case 'top':
                return {top: '100%', left: '50%', transform: 'translateX(-50%) rotateZ(180deg)'};
            case 'bottom':
                return {bottom: '100%', left: '50%', transform: 'translateX(-50%)'};
            case 'left':
                return {top: '50%', right: '-7%', transform: 'translateY(-50%) rotateZ(90deg)'};
            case 'right':
                return {top: '50%', left: '-7%', transform: 'translateY(-50%) rotateZ(-90deg)'};
            default:
                return {top: '100%', left: '50%', transform: 'translateX(-50%)'};
        }
    };

    const getTooltipPosition = () => {
        switch (placement) {
            case 'top':
                return {top: '-120%', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap'};
            case 'bottom':
                return {top: '120%', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap'};
            case 'left':
                return {top: '50%', left: '-60%', transform: 'translateY(-50%)', whiteSpace: 'nowrap'};
            case 'right':
                return {top: '50%', left: '95%', transform: 'translateY(-50%)', whiteSpace: 'nowrap'};
            default:
                return {top: '-120%', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap'};
        }
    };


    return (
        <div
            style={{position: 'relative', display: 'inline-block'}}
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
        >
            {children}
            {isVisible && (
                <div
                    style={{
                        position: 'absolute',
                        background: '#333',
                        color: '#fff',
                        padding: '5px',
                        borderRadius: '5px',
                        zIndex: 1,
                        ...getTooltipPosition(),
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            width: 0,
                            height: 0,
                            borderStyle: 'solid',
                            borderColor: `transparent transparent #333 transparent`,
                            borderWidth: '6px',
                            ...getArrowPosition(),

                        }}
                    />
                    {title}
                </div>
            )}
        </div>
    );
};

const TooltipPage = () => {
    return (
        <div>

            <h1>Tooltip</h1>
            <fieldset>
                <legend>原生JSX</legend>
                <Tooltips title='This is a Tooltip' placement='top'>
                    <Button>Hover measdasdasdasdasd</Button>
                </Tooltips>
            </fieldset>
            <fieldset>
                <legend>基本1</legend>
                <Tooltip popup={<Popup/>}>
                    <Button>
                        {'hover1'}
                    </Button>
                </Tooltip>
            </fieldset>
            <fieldset>
                <legend>基本2</legend>
                <Tooltip placement='right' popup={<Popup/>}>
                    <Button>
                        {'hover2'}
                    </Button>
                </Tooltip>
            </fieldset>
            <fieldset>
                <legend>基本3</legend>
                <Tooltip popup={<Popup/>} placement='bottom'>
                    <Button>
                        {'hover3'}
                    </Button>
                </Tooltip>
            </fieldset>
            <fieldset>
                <legend>基本3</legend>
                <Tooltip popup={<Popup/>} placement='left'>
                    <Button>
                        {'hover3'}
                    </Button>
                </Tooltip>
            </fieldset>
        </div>
    );
};

export default TooltipPage;
