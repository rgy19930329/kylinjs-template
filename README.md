# {{projectName}}

{{projectName}} depends on [kylinjs](https://github.com/rgy19930329/kylinjs)

# Description

{{projectDescription}}

# 目录结构

```
workspace
    ├── app
         ├── addons
         ├── routes
         ├── schema
         ├── webroot
         ├── config.json
         ├── filter.js
    ├── node_modules
    ├── package.json
    ├── ua.json
    ├── www
```

package.json中只需要安装2个依赖

```
"dependencies": {
  "kylinjs": "git+https://github.com/rgy19930329/kylinjs.git",
  "kys": "git+https://github.com/rgy19930329/kys.git"
}
```

# 依赖安装及启动

```
npm install // 依赖安装

npm run static // 静态资源编译

npm run start // 启动服务

npm run boot // 如果安装了supervisor可以用这条命令启动服务

pm2 start ua.json // 线上使用pm2进行管理，启动服务

```
