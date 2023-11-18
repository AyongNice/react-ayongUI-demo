const ncp = require("ncp")
const path = require("path")
const fs = require("fs")
const {execSync} = require('child_process');
const sourcePath = path.resolve(__dirname, 'src/ayongUI/dist');
const destinationPath = path.resolve(__dirname, 'node_modules/dist');
const viteCachePath = path.resolve(__dirname, 'node_modules/.vite');
// 如果目标文件夹不存在，创建它
if (!fs.existsSync(destinationPath)) {
   fs.mkdirSync(destinationPath, {recursive: true});
}

// 删除 .vite 缓存 文件夹
if (fs.existsSync(viteCachePath)) {
   execSync(`rm -rf ${viteCachePath}`);
}

// 显示通知
// 1. 执行ayongUI组件打包构建命令
const ayongUIPath = path.resolve(__dirname, 'src/ayongUI');
execSync('npm run build', {cwd: ayongUIPath, stdio: 'inherit'});

function showNotification(message) {
   if (process.platform === 'darwin') {
      // macOS
      execSync(`osascript -e 'display notification "${message}" with title "Copy Completed"'`);
   } else if (process.platform === 'win32') {
      // Windows
      console.log('Notification: ' + message);
   } else {
      console.log('Notification: ' + message);
   }
}

// 复制dist到node_modules文件
ncp(sourcePath, destinationPath, function (err) {
   if (err) {
      return console.error(err);
   }
   showNotification('组件库模拟真实发布场景完成-----请将demo页面中引入组件路径更改为 dist  ,mian.ts引入组件库样式文件. /n然后重启demo开始测试！');
});
