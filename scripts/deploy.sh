#!/usr/bin/expect
#set timeout 20 #设置超时时间
#部署项目
spawn ssh root@111.222.333.444
expect "password:"
send "\r"
expect "Last login:"
send "cd /data\r"
send "tar -xvf dist.tar -C ./\r"
send "rm -rf aht-admin\r"
send "mv dist aht-admin \r"
send "rm -rf dist.tar\r"
send "exit\r"
interact