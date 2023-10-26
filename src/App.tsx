import {useState} from 'react'
import './App.css'
import crypto from 'crypto-js';
import {Button} from './ayongUI'
// import { Button } from 'antd';
const Common = () => {

    return (
        <div>
            <h1>Common</h1>
        </div>
    )
}

function App() {
    const [src, setStc] = useState('');


    const down_img = async () => {
        const res = await fetch('/api/weekend/steam-down').then(res => res.arrayBuffer())
        /** 读取二进制流 通过blob **/
        const blob = new Blob([res])
        const blobUrl = URL.createObjectURL(blob)

        const link = document.createElement('a')
        /** a 签链接地址 **/
        link.href = blobUrl

        /** 设置文件名 **/
        link.download = +new Date()
        /**调用A标签点击方法 进行下载 **/
        link.click()
    }
    //加密 post请求
    const requesPost = () => {
        // 要发送给后端的明文数据
        const dataToEncrypt = {
            username: 'exampleUser',
            password: 'secretpassword',
        };
        // 选择一个加密密钥（需要保密存储，不能明文写在代码中）
        const encryptionKey = 'MySuperSecretKey';

        // 将明文数据转换为字符串
        const dataString = JSON.stringify(dataToEncrypt);

        // 使用AES加密算法加密数据
        const encryptedData = crypto.AES.encrypt(dataString, encryptionKey).toString();



        fetch('/api/ayong/encrypt', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include', // 允许携带 Cookie
            body: JSON.stringify({data: encryptedData})
        })
    }

    const setnum = () => {
    }
    return (
        <>
            <Button text={'ceshi'}/>
            <img src={src}/>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={requesPost}>
                    加密网路登陆请求
                </button>
                <button onClick={setnum}>
                    全局Num设置
                </button>
            </div>

        </>
    )
}

export default App
