---
category: Portainer
tags:
  - Portainer
date: 2019-06-28
title: Portainer单主机搭建教程
vssue-title: Portainer单主机搭建教程
---

## 简介
现在docker部署越来越流行，目前都是脚本化进行部署，很希望通过图形化界面进行管理，抛开命令行的方式，对于我这样的懒人来说就需要这么一个平台去管理，所以选Portainer来助我一臂之力

## 资源准备
* 一台洁净无瑕的服务器
    * 手头有阿里云的服务器一枚 CentOS 7.6 64位
* 聪明的头脑+勤劳的双手    

## 配置服务器
* 防火墙设置

## 安装docker
通过SSH线连接到自己的Linux服务器

安装一些必要的系统工具：
```
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
```
添加软件源信息：
```
sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```
更新 yum 缓存：
```
sudo yum makecache fast
```
安装 Docker-ce：
```
sudo yum -y install docker-ce
```
启动 Docker 后台服务
```
sudo systemctl start docker
```
测试运行 hello-world
```
docker run hello-world
```

至此安装docker完毕


下载镜像
```
docker pull docker.io/portainer/portainer
```
运行单机版，假如想汉化先看下文汉化部分
```
docker run -d -p 9000:9000 \
    --restart=always \
    -v /var/run/docker.sock:/var/run/docker.sock \
    --name prtainer-manage \
    docker.io/portainer/portainer
```

## 测试配置
运行完毕后打开服务器IP:9000访问 

首次进入设置下登录账户信息和密码

![初次登陆设置账户信息](../../.vuepress/public/img/portainer/1.png)

然后选择local我是本地的所以选择这个，remote的可以自行研究，应该就是管理其他服务器docker的意思了

![设置docker管理配置](../../.vuepress/public/img/portainer/2.png)

配置完后的平台首页

![平台首页](../../.vuepress/public/img/portainer/3.png)

从首页可以看到我们刚才配置本地docker的一些具体情况，例如container 容易数量、volumns 本地映射、images 镜像，原先我们需要到目标服务器执行docker命令才能了解的信息现在一幕了然非常适合我这样的懒人精。

## 汉化

平台已经搭建完毕非常简单，简单的几条命令执行就OK，但是界面是英文的，对于我们这样的人来说中文怎么可以没有呢，说干就干，查看下portainer版本号,上图平台首页右下角1.21.0

先下载[汉化包](https://github.com/LancCJ/github-file/blob/master/portainer/Portainer-CN.zip)

然后解压缩到文件名为public中，使用sftp命令或者工具上传到linux 路径为 /public

先停止portainer容器

再把之前的容器删除掉docker rm -f containerid

然后在上文中提及的docker run命令里面添加 

```
-v /public:/public
```

最后的执行命令为

```
docker run -d -p 9000:9000 \
    --restart=always \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v /public:/public \
    --name prtainer-manage \
    docker.io/portainer/portainer
```

重新进入管理地址即可，再和第一次设置一样配置进入

![汉化界面](../../.vuepress/public/img/portainer/4.png)





