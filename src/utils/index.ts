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
        'diy':color
    }
    document.documentElement.style.setProperty('--theme-background-color', mode[theme].background);
    document.documentElement.style.setProperty('--theme-font-color', mode[theme].color);
}
export const calculateComplementaryColor = (hexColor:string) => {
    // 将十六进制颜色转换为RGB
    let r = parseInt(hexColor.substring(1, 3), 16);
    let g = parseInt(hexColor.substring(3, 5), 16);
    let b = parseInt(hexColor.substring(5, 7), 16);

    // 将RGB转换为HSV
    let hslColor = rgbToHsl(r, g, b);

    // 计算反差色的色相值
    let complementaryHue = (hslColor[0] + 0.5) % 1; // 添加或减去0.5（180度）并确保在0到1之间

    // 将HSV转换回RGB
    let complementaryRgb = hslToRgb(complementaryHue, hslColor[1], hslColor[2]);

    // 将RGB转换为十六进制格式
    let complementaryHex = rgbToHex(complementaryRgb[0], complementaryRgb[1], complementaryRgb[2]);

    return complementaryHex;
}

function rgbToHsl(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0; // achromatic
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }

    return [h, s, l];
}

function hslToRgb(h, s, l) {
    let r, g, b;

    if (s === 0) {
        r = g = b = l; // achromatic
    } else {
        let hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };

        let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        let p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function rgbToHex(r, g, b) {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}





