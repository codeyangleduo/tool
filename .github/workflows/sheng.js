name: sheng
 
on:
  push:
    branches:
      - main
  schedule:   
    - cron: '*/5 * * * *'   #国际标准时间，北京时间+8，即24点钟
 
jobs:
  run-shengjs:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@main  #采用main分支下的
           
      - name: Setup Node.js
        uses: actions/setup-node@v2  #安装node.js
        with:
          node-version: '14'
          
      - name: Install Dependency       
        run: |
          npm install
          npm install parse
          npm install got
          npm install xmlhttprequest
          npm install tough-cookie         
          node ./sheng.js  #脚本存在根目录scripts文件夹下