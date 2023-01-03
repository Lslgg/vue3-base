#!/usr/bin/expect
#set timeout 20 #设置超时时间
#上传文件到服务器
spawn scp  ./dist.tar root@xxxx.xxx.xxx:/data/
expect "password:"
send "password\r"
interact