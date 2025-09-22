# NPM发布流程指南

本文档详细说明如何发布 `@wallet/proto-types` 包到NPM。

## 发布前准备

### 1. 检查构建状态
```bash
# 重新生成proto类型
npm run proto-build

# 编译项目
npm run build

# 检查构建结果
ls -la dist/
```

### 2. 验证包内容
```bash
# 预览将要发布的文件
npm pack --dry-run

# 验证包结构
npm publish --dry-run
```

### 3. 运行测试(如果有)
```bash
# 运行所有测试
npm test

# 检查类型定义
npm run type-check
```

## 版本管理

### 语义化版本控制
- **PATCH (1.0.x)**: Bug修复，向后兼容
- **MINOR (1.x.0)**: 新功能，向后兼容
- **MAJOR (x.0.0)**: 重大变更，可能不向后兼容

### 版本更新命令
```bash
# 修复版本 (1.0.0 -> 1.0.1)
npm version patch

# 次要版本 (1.0.0 -> 1.1.0) - 新增proto类型或功能
npm version minor

# 主要版本 (1.0.0 -> 2.0.0) - 重大变更
npm version major

# 自定义版本
npm version 1.2.3
```

## 发布步骤

### 1. 登录NPM
```bash
# 登录npm账户
npm login

# 验证登录状态
npm whoami
```

### 2. 发布包
```bash
# 发布到npm
npm publish

# 如果是scoped包且需要公开访问
npm publish --access public
```

### 3. 验证发布
```bash
# 检查包页面
# 访问: https://www.npmjs.com/package/@wallet/proto-types

# 在新环境中测试安装
mkdir test-install && cd test-install
npm init -y
npm install @wallet/proto-types
```

## 发布后任务

### 1. 创建Git标签
```bash
# 如果使用npm version命令，会自动创建标签
# 手动创建标签的方式：
git tag v1.0.0
git push origin v1.0.0
```

### 2. 更新文档
- 更新 CHANGELOG.md (如果存在)
- 更新 README.md 中的版本信息
- 创建 GitHub Release (可选)

### 3. 通知用户
- 发布 Release Notes
- 更新相关项目依赖

## 自动化发布(推荐)




## 发布检查清单

发布前确认：
- [ ] 代码已提交并推送到仓库
- [ ] 运行了 `npm run proto-build` 生成最新proto类型
- [ ] 运行了 `npm run build` 编译项目
- [ ] 检查了 `dist/` 目录包含所有必要文件
- [ ] 更新了版本号 (`npm version`)
- [ ] 运行了测试 (如果有)
- [ ] 检查了包大小 (`npm pack --dry-run`)
- [ ] 验证了TypeScript声明文件正确
- [ ] 更新了README.md文档

发布后验证：
- [ ] 检查npm包页面显示正常
- [ ] 在新项目中测试安装和导入
- [ ] 验证proto类型可以正常使用
- [ ] 检查TypeScript智能提示工作正常

## 版本回滚

如果需要撤回版本：

```bash
# 撤回特定版本 (仅在发布72小时内)
npm unpublish @wallet/proto-types@1.0.0

# 标记版本为已弃用 (推荐方式)
npm deprecate @wallet/proto-types@1.0.0 "This version has critical bugs, please upgrade to 1.0.1"

# 发布修复版本
npm version patch
npm publish
```

## 常见问题

### Q: 发布失败，提示权限错误
A: 检查是否已登录npm (`npm whoami`) 和包名是否正确

### Q: TypeScript声明文件缺失
A: 确保运行了 `npm run build` 并检查 `tsconfig.json` 配置

### Q: Proto类型导入错误
A: 确认运行了 `npm run proto-build` 并且所有proto文件都已包含

### Q: 包大小过大
A: 检查 `.npmignore` 文件，确保不必要的文件被排除 