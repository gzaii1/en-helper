
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

