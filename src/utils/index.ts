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

