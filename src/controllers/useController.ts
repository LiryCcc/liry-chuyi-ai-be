// 定义 authMiddleware 函数
const useController = async () => {
  // 中间件逻辑
  const register = () => {
    // 内部的 verifyToken 函数逻辑
  };
  const login = () => {
    // 内部的 verifyToken 函数逻辑
  };
  const protectedRoute = () => {};
  // 调用内部的 verifyToken 函数
;
  return {
    register,
    login,
    protectedRoute
  }
};

// 导出 authMiddleware 函数
export default useController;
