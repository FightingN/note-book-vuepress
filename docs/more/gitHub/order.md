## git 常用命令

### 列出所有本地分支

```js
git branch
```

### 列出所有远程分支

```js
git branch -r
```

### 列出所有本地分支和远程分支

```js
git branch -a
```

### 更新远程分支列表

```js
git remote update origin -p
```

### 合并分支

```js
git merge 分支名
```

### 推送远程分支

```js
git push origin master
```

### 忽略代码风格检查

```js
解决 git commit -m “提交页面备注” --no-verify 忽略代码风格检查
```

### 放弃所有文件的修改

```js
git checkout .
```

Git stash  
Git stash pop
