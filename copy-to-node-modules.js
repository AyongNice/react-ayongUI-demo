const ncp = require("ncp")
const path = require("path")
const fs = require("fs")
const {execSync, exec} = require('child_process');
const sourcePath = path.resolve(__dirname, 'src/ayongUI/dist');
const destinationPath = path.resolve(__dirname, 'node_modules/dist');
const viteCachePath = path.resolve(__dirname, 'node_modules/.vite');
const ps1 = path.resolve(__dirname, 'src/setTopMost.ps1');
// 如果目标文件夹不存在，创建它
if (!fs.existsSync(destinationPath)) {
   fs.mkdirSync(destinationPath, {recursive: true});
}
console.log(fs.existsSync(destinationPath))
//// 删除 .vite 缓存 文件夹
if (fs.existsSync(viteCachePath)) {
   if (process.platform === 'darwin') {
      execSync(`rm -rf ${viteCachePath}`);
   } else {
      execSync(`rmdir /s /q  ${viteCachePath}`);
   }
   
}


// 显示通知
// 1. 执行ayongUI组件打包构建命令
const ayongUIPath = path.resolve(__dirname, 'src/ayongUI');
const demo = path.resolve(__dirname, './package.json');
execSync('npm run build', {cwd: ayongUIPath, stdio: 'inherit'});
// execSync('npm run dev', {cwd: demo, stdio: 'inherit'});

function showNotification(message) {
   if (process.platform === 'darwin') {
      // macOS
      execSync(`osascript -e 'display notification "${message}" with title "Copy Completed"'`);
   } else {
      const command = `Add-Type -AssemblyName PresentationFramework; [System.Windows.MessageBox]::Show('${message}', 'Copy Completed', 'OK', 'Information')`;
      
      exec(`powershell.exe -Command "${command}"`, (error, stdout, stderr) => {
         if (error) {
            console.error(`Error: ${error.message}`);
            return;
         }
         if (stderr) {
            console.error(`Error: ${stderr}`);
            return;
         }
         console.log(`Command executed successfully: ${stdout}`);
      });
      
   }
   
}

// 复制dist到node_modules文件
ncp(sourcePath, destinationPath, function (err) {
   if (err) {
      return console.error(err);
   }
   showNotification('组件库模拟真实发布场景完成-----请将demo页面中引入组件路径更改为 dist  mian.ts引入组件库样式文件. 然后重启demo开始测试！');
});
