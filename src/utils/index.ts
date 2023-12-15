import {Mode, ModeAttribute} from ".././app.d";

/**
 *
 * @description: copy text 到粘贴板
 * @param {string} text
 * @return {*}
 * 2023/11/08
 */
export const copyText = (text: string): void => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    // 检查浏览器是否支持 Clipboard API
    if (navigator.clipboard) {
        // 通过 Clipboard API 复制文本
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log('文本已成功复制到剪贴板');
            })
            .catch(err => {
                console.error('复制文本失败:', err);
            });
    } else {
        // 如果浏览器不支持 Clipboard API，可以提供备用方法
        document.execCommand('copy');
    }

    document.body.removeChild(textarea);
}

/**
 * @description: 设置主题颜色
 * @param theme
 * @param color
 */
export const setThemeColor = (theme: keyof Mode,color:ModeAttribute) => {
    const mode = {
        'night': {
            background: '#181823',
            color: ' #e8e6e3e0'
        },
        'light': {
            background: '#e8e6e3e0',
            color: '#181823'
        },

        // 自定义
        'diy':color
    }
    document.documentElement.style.setProperty('--theme-background-color', mode[theme].background);
    document.documentElement.style.setProperty('--theme-font-color', mode[theme].color);
}
export const calculateComplementaryColor = (hexColor: string) => {
    // 将十六进制颜色转换为RGB
    let r = parseInt(hexColor.substring(1, 3), 16);
    let g = parseInt(hexColor.substring(3, 5), 16);
    let b = parseInt(hexColor.substring(5, 7), 16);

    // 计算亮度级别
    let brightness = calculateBrightness(r, g, b);

    // 确定互补亮度
    let complementaryBrightness = 255 - brightness;

    // 确保互补亮度在有效的RGB范围内（0-255）
    complementaryBrightness = Math.min(255, Math.max(0, Math.round(complementaryBrightness)));

    // 将互补亮度转换回RGB并去除小数部分
    let complementaryColor = `#${complementaryBrightness.toString(16).padStart(2, '0').repeat(3)}`;

    return complementaryColor;
}

const  calculateBrightness=(r, g, b)=> {
    // 使用公式计算亮度（0.299*R + 0.587*G + 0.114*B）
    return 0.299 * r + 0.587 * g + 0.114 * b;
}





