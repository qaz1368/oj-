import { onMounted, onBeforeUnmount } from 'vue';
import message from "@arco-design/web-vue/es/message";
import { UserControllerService } from "../../generated";

// 监听 beforeunload 事件
const handleBeforeUnload = (event: BeforeUnloadEvent) => {
    console.log('beforeunload 事件触发'); // 调试信息
    // 调用 logPageClose 方法
    logPageClose().then(r => {
        console.log('用户已退出');
    });

    // 不设置 event.returnValue 以取消默认弹窗
    // event.preventDefault();
    // event.returnValue = ''; // 兼容某些浏览器
};

// 示例后端接口
const logPageClose = async () => {
    try {
        const response = await UserControllerService.userLogoutUsingPost();
        console.log('Page close logged:', response);
        return response; // 返回响应以便在 then 中处理
    } catch (error) {
        console.error('Error logging page close:', error);
        throw error; // 重新抛出错误以便在 catch 中处理
    }
};

export const initPageCloseLogger = () => {
    console.log('初始化页面关闭日志记录'); // 调试信息
    onMounted(() => {
        console.log('添加 beforeunload 事件监听器'); // 调试信息
        window.addEventListener('beforeunload', handleBeforeUnload);
    });

    onBeforeUnmount(() => {
        console.log('移除 beforeunload 事件监听器'); // 调试信息
        window.removeEventListener('beforeunload', handleBeforeUnload);
    });
};
