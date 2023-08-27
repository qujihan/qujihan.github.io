# 如何下载dev分支
`git clone --branch dev git@github.com:qujihan/qujihan.github.io.git`


# 如何继续开发
```shell
# 安装 npm
scoop install nodejs
brew install nodejs

# 安装 tailwindcss

# 运行 tailwindcss
# 这个通过main.css 生成 style.css 且不断查看更改
npx tailwindcss -i ./assets/css/main.css -o ./assets/css/style.css  --jit --watch
# 这个通过main.css 生成 style.css 且最小化styls.css
npx tailwindcss -i ./assets/css/main.css -o ./assets/css/style.css  --jit --minify
```