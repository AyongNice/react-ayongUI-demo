import {useState, useEffect} from 'react';
import globle from "../config/index.ts";

const {THEME} = globle;

// 创建一个全局状态对象
const globalState: { callbacks: string[] } = new Proxy({
        callbacks: [],
        theme: localStorage.getItem("theme") || THEME[0],
        ceshi: "ceshi"
    }, // Initialize callbacks as an array
    {
        set: (target: { callback: string[] }, key: string | symbol, value): boolean => {

            target[key] = value;
            // 直接调用回调函数，通知所有订阅者
            target.callbacks.forEach((callback: Function) => {

                console.log(callback)
                return callback(key, value)
            });
            return true;
        },
    });

// 订阅全局状态的 Hook
export const useGlobalState = (key) => {
    const [state, setState] = useState<any>(globalState[key]);

    useEffect(() => {
        // 在组件挂载时添加回调函数
        globalState.callbacks.push((changedKey: string, changedValue: string): void => {
            if (changedKey === key) {
                setState(changedValue);
            }
        });

        // 组件卸载时移除回调函数
        return () => {
            globalState.callbacks = globalState.callbacks.filter((callback: string): boolean => callback !== setState);
        };
    }, [key]);
    return [state, (value) => globalState[key] = value];
};
