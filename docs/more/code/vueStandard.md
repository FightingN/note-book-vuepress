## vue 项目的代码规范

[vue 风格指南](https://vue3js.cn/docs/zh/style-guide/#%E8%A7%84%E5%88%99%E7%B1%BB%E5%88%AB)

### 文件组件命名

- **[单文件组件](https://vue3js.cn/docs/zh/guide/single-file-component.html)的文件名应该要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)。**

```js
components/
|- MyComponent.vue
或者
components/
|- my-component.vue

```

### 组件引入书写规范

```js
<!-- 在所有地方 -->
<my-component></my-component>
或者
<!-- 在单文件组件和字符串模板中 -->
<MyComponent/>

```

### props 命名

- 在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板和 [JSX](https://vue3js.cn/docs/zh/guide/render-function.html#jsx) 中应该始终使用 kebab-case。

- 我们单纯的遵循每个语言的约定。在 JavaScript 中更自然的是 camelCase。而在 HTML 中则是 kebab-case。

```js
props: {
  greetingText: String
}
组件使用时: <WelcomeMessage greeting-text="hi" />
```
