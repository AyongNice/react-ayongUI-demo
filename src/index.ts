import RelationalIndexDB from "relational-indexdb";
import {Vue, isVue2, isVue3, reactive, UnwrapNestedRefs} from 'vue-demi';
import {useState, useEffect} from 'react';


class MessageService {
    params = {
        snapshot: false
    };
    dataStore!
    indexDB
    subscribers = {};
    modules
    setDataStore
    static instance


    constructor(params: { snapshot: boolean }) {
        if (!MessageService.instance) {
            const tableModule = [
                {name: 'id', keyPath: 'id', unique: true},
                {name: 'data', keyPath: 'data', unique: false}
            ];
            const tableData = [
                {name: 'id', keyPath: 'id', unique: true},
                {name: 'data', keyPath: 'data', unique: false}
            ];
            const createTableConfig = [
                {
                    tableName: 'tableModule',
                    keyPath: 'id',
                    autoIncrement: true,
                    keyConfig: tableModule
                },
                {
                    tableName: 'tableData',
                    keyPath: 'id',
                    autoIncrement: true,
                    keyConfig: tableData
                }
            ];
            this.indexDB = RelationalIndexDB.getInstance('ayong', 1, createTableConfig);
            MessageService.instance = this;
        }

        if (params) {
            this.params = {...this.params, ...params};
            if (this.params.snapshot && this.indexDB) {
                this.indexDB.queryRecord('tableData', 1).then(res => {
                    if (res && res.data) {
                        const cacheData = JSON.parse(res.data)
                        Object.assign(this.dataStore, cacheData)
                        if (isVue2 || isVue3) {
                            if (isVue2) {
                                this.dataStore = Vue?.observable(this.dataStore);
                            } else {
                                console.log('res.data', reactive)
                                this.dataStore = reactive(initialData);
                            }

                        }

                    }
                })

            }
        }
        return MessageService.instance!;
    }

    setInitialData(initialData) {
        if (isVue2 || isVue3) {
            // 使用Vue的observable或者reactive
            this.dataStore = isVue2 ? Vue.observable(initialData) : reactive(initialData);
        } else {
            // 使用React的useState
            const res = useState(initialData);
            this.dataStore = res[0];
            this.setDataStore = res[1];

            // 使用useEffect监听数据变化
            useEffect(() => {
                // 这里可以执行一些React特定的操作，例如处理副作用
            }, [data]);
        }
    }

    get(key) {
        return this.dataStore[key];
    }

    set(props) {
        // console.log('set',props, isVue2, isVue3)
        for (let key in props) {
            if (isVue2 || isVue3) {
                if (isVue2) {
                    Vue.set(this.dataStore, key, props[key]);

                } else {
                    this.dataStore[key] = props[key];

                }
            } else {
                // 使用React的useState
                this.setDataStore(() => {
                    return {
                        ...this.dataStore,
                        ...props
                    }
                })
            }
        }
        if (this.params.snapshot) {
            this.takeSnapshot();
        }
    }

    async takeSnapshot() {
        const dataStore = JSON.stringify(this.dataStore);
        const moduleStore = JSON.stringify(this.modules);

        const res = await this.indexDB.queryRecord('tableModule', 1)
        if (res) {
            this.indexDB.updateRecord('tableData', 1, {id: 1, data: dataStore});
            this.indexDB.updateRecord('tableModule', 1, {id: 1, data: moduleStore});
        } else {
            this.indexDB.addRecord('tableData', {id: 1, data: moduleStore});
            this.indexDB.addRecord('tableModule', {id: 1, data: dataStore});
        }
    }

    callFunction(key, ...args) {
        if (typeof this.dataStore[key] === "function") {
            return this.dataStore[key](...args);
        } else {
            throw new Error(`${key} is not a function`);
        }
    }

    register(eventName, callback) {
        if (!this.subscribers[eventName]) {
            this.subscribers[eventName] = [];
        }
        this.subscribers[eventName].push(callback);
    }

    publish(eventName, data) {
        if (this.subscribers[eventName]) {
            this.subscribers[eventName].forEach(callback => {
                callback(data);
            });
        }
    }
}

console.log(MessageService)
export default MessageService;