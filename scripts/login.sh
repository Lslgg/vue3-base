#!/usr/bin/expect
#set timeout 20 #设置超时时间
#登录服务器
spawn ssh root@111.222.333.444
expect "password:"
send "password\r"
expect "Last login:"
send "cd /data\r"
interact