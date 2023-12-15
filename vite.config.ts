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
	//vite 开启network
	server: {
		// host: '192.168.33.52',
		proxy: {
			'/api': {
				target: 'http://localhost:3000',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ''),


			}
		}


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
