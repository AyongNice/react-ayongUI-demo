import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': './src', // 将@src映射到实际的源代码目录
		},
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					// 配置需要合并的模块
					// 例如：将 lodash 合并到一个文件
					lodash: ['lodash']
				}
			}
		}
	}
});
