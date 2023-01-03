### 样式
使用styled component

### next一些特性小记
#### next/link
link标签, 用于路由跳转
可以使用`prefetch`属性来进行预加载

客户端路由行为与浏览器很类似:
1. 组件获取
2. 如果组件定义了`getInitialProps`, 数据获取了. 如果有错误, 将会渲染`_error.js`
3. 1.2都完成, `pushState`执行, 新组件被渲染

如果需要注入`pathname` `query` `asPath`到组件中, 可以使用`next/router`下的`withRouter`

#### next/router
除了`link`标签, 还可以使用命令式切换:
`next/router.push('/about')`

#### next/dynamic
动态加载, 配合`import()`使用

#### next/head
即`<head />`标签

#### next/app
创建用于布局的`_app.tsx`文件, 即react应用的根组件, 通过重写_app.js可以对App组件进行重构.
一般可以用来:
1. 添加全局的样式
2. 给页面传递自定义数据
3. 使用`componentDidCatch`自定义处理错误
4. 注入额外数据到页面中(如graphQL)

#### next/document
仅在服务器渲染时会调用, 主要用来修改服务器渲染的文档内容

`next/document`中提供的并不仅仅是Document组件, 还有跟HTML标签对应的组件, 在重写的时候要记得都要写上

#### 路由文件
默认情况下, `next`会把`/pages`下的所有文件匹配路由, 如果项目使用自定义路由, 需要在`next.config.js`中禁止默认行为. (关注useFileSystemPublicRoutes属性)

#### 服务端组件和客户端组件
- 在Nextjs12中
部分函数在服务端执行, 如`getServerSideProps` `getStaticPaths` `getStaticProps`

而在客户端执行, 可以使用`useEffect` `onChange`回调函数

- 在nextjs13中
在app目录下, 如要使用`useState`等状态管理的hook, 那么都是只在客户端执行, 需要在首行加入`use client`

- 使用场景
  - 服务端组件: fetch请求数据 访问后端资源 在服务器上保留敏感信息 减少客户端js
  - 客户端组件: 事件监听器(onClick等) useState/useReducer/useEffect 浏览器API 有状态的自定义hook React类组件

#### next做koa的中间件
通过next函数
```js
const app = next(opt)
const handle = app.getRequestHandler()
// ...
```
其中`opt`具有以下属性:
- dev: 是否为开发环境, 默认为`false`
- dir: Next项目路径, 默认为`.`
- quiet: 是否隐藏错误信息(包括服务端), 默认为`false`
- conf: 同`next.config.js`返回的对象, 默认为`{}`

### DB相关
本DEMO使用sqlite3数据库, 由于通过orm操作数据库, 所以后续可以很方便的替换成其他数据库

#### sql操作
使用`sequelize`作为ORM映射库(原本采用orm.js, 但由于orm.js没有对用的`@types`, 且封装相对原始, 所以改为`sequelize`)

#### Sequelize使用
- 安装orm映射库
```bash
pnpm add sequelize
pnpm add @types/sequelize -D
```

- 安装对应的数据库

```bash
pnpm add sqlite3
```
#### 连接至数据库

