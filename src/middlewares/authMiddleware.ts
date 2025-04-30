// 定义 authMiddleware 函数
const authMiddleware = async () => {
  // 中间件逻辑
  const verifyToken = () => {
    // 内部的 verifyToken 函数逻辑
  };
  // 调用内部的 verifyToken 函数
  verifyToken();
};

// 导出 authMiddleware 函数
export default authMiddleware;

// 如果需要，也可以导出内部的 verifyToken 函数
export const verifyToken = () => {
  // 验证令牌的逻辑
};
