import {useState, useEffect} from 'react';

export const useTheme = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme"));
    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);
    return [theme, setTheme]

};
// 创建一个全局状态对象
const globalState = new Proxy({callbacks: []}, // Initialize callbacks as an array
    {
        set: (target, key, value) => {
            target[key] = value;
            // 直接调用回调函数，通知所有订阅者
            target.callbacks.forEach(callback => callback(key, value));
            return true;
        },
    });

// 订阅全局状态的 Hook
export const useGlobalState = (key) => {
    const [state, setState] = useState(globalState[key]);

    useEffect(() => {
        debugger
        // 在组件挂载时添加回调函数
        globalState.callbacks.push((changedKey, changedValue) => {
            if (changedKey === key) {
                setState(changedValue);
            }
        });

        // 组件卸载时移除回调函数
        return () => {
            globalState.callbacks = globalState.callbacks.filter(callback => callback !== setState);
        };
    }, [key]);

    return [state, (value) => globalState[key] = value];
};