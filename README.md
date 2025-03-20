这是一个使用 [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) 引导创建的 [Next.js](https://nextjs.org) 项目。

## 开始使用

首先，运行开发服务器：

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
# 或
bun dev
```

使用浏览器打开 [http://localhost:3000](http://localhost:3000) 查看结果。

## 自定义工具类

本项目使用 Tailwind CSS 来管理样式。为了提高代码复用性和可维护性，我们可以在 `app/globals.css` 文件中创建自定义工具类。

### 如何创建工具类

1. 在 `globals.css` 中使用 `@layer utilities` 来定义工具类：

```css
@layer utilities {
  /* 在这里定义你的工具类 */
  /* 水平垂直居中 */
  .center {
    @apply flex items-center justify-center;
  }
}
```

2. 使用方法示例：

```jsx
// 使用自定义工具类
<div className="center">
  <p>这个内容会水平垂直居中</p>
</div>

// 可以与其他 Tailwind 类组合使用
<div className="center min-h-screen">
  <p>这个内容会在整个屏幕高度中居中</p>
</div>
```

### 最佳实践

1. 为工具类添加清晰的注释，说明其用途
2. 使用语义化的类名，让类名能够表达其功能
3. 将常用的类组合封装成工具类，提高代码复用性
4. 在 `@layer utilities` 中定义，以确保正确的样式优先级

### 示例工具类

```css
@layer utilities {
  /* 水平垂直居中 */
  .center {
    @apply flex items-center justify-center;
  }

  /* 可以继续添加其他工具类 */
}
```

## 自定义主题

本项目使用 shadcn/ui 组件库，您可以通过修改 CSS 变量来自定义组件的主题色。

### 修改主题色

在 `app/globals.css` 文件中，找到 `:root` 和 `.dark` 部分，修改相应的 CSS 变量：

```css
:root {
  /* 其他变量 */
  --primary: #8263fc; /* 主题色 */
  --primary-foreground: #ffffff; /* 主题色上的文字颜色 */
}

.dark {
  /* 其他变量 */
  --primary: #8263fc; /* 暗色模式的主题色 */
  --primary-foreground: #ffffff; /* 暗色模式主题色上的文字颜色 */
}
```

这样设置后，所有使用主题色的组件（如 Button、Switch 等）都会自动应用新的颜色。

### 可自定义的颜色变量

主要的颜色变量包括：

- `--primary`: 主要颜色
- `--secondary`: 次要颜色
- `--accent`: 强调色
- `--background`: 背景色
- `--foreground`: 前景色
- `--muted`: 柔和色
- `--destructive`: 危险操作颜色

每个颜色变量都有对应的 `-foreground` 变量，用于设置该背景上的文字颜色。
