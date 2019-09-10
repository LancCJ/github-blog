---
date: 2019-09-10
title: 绿多多项目帮助文档
vssue: false
---

 

<div v-if="isShow">



## 1.软件概要

《绿多多垃圾分类项目》是服务于大众的垃圾分类项目，主要是以家庭（户籍）为基本单位，收集用户生活垃圾，并分类，环保，利国利民的项目。项目在小区小区投放用户垃圾回收的智能硬件设备，提供一个供用户开箱、投放、获取积分等操作的客户端（小程序、微信公众号等）。

| 项目   |      说明描述      | 
|----------|:-------------:|
| 硬件 |  4台Windows 2核心4G服务器、一个SQLSERVER2008实例 |
| 软件环境 |    开发工具：Microsoft Vistual Studio 2018 Community、微信小程序web开发工具；   |  
| 编程语言 | C#、Html、CSS3、微信小程序 |   
| 源程序量 | 代码行: 345925，文件数: 1470 | 
| 主要功能和技术特点 | 使用Socket协议处理智能硬件设备命令并实时与小程序用户交互；协作管理员工作人员、用户、后台数据交互为垃圾分类提供坚强的IT支持。 |  

## 2.项目架构

后台使用成熟可靠的.net技术（）架构了三大模块：智能设备命令交互处理模块、用户交互处理模块、后台管理模块。

| 模块   |      功能      |  说明 |
|----------|:-------------:|------:|
| 智能设备命令交互处理模块 |  Socket服务程序 | 管理Socket服务，转发命令给命令处理器，接收处理结果后再推送到设备 |
| 智能设备命令交互处理模块 |  命令交互处理器 | 接收设备上报或者后台下发的命令；处理命令产生数据；生成返回命令回传给设备； |
| 用户交互处理模块 |    小程序端   |   注册户籍、开箱投放、邀请新用户、积分 |
| 用户交互处理模块 |    微信公众号端   |   积分兑换 |
| 后台管理模块 | 总台 |    管理小区、工作人员、用户、设备、订单、服务监控等 |
| 后台管理模块 | 微信公众号端 |    工作人员处理事务：户籍审核人员、垃圾清运人员、垃圾督导人员、积分核销人员、设备维护人员工作平台 |


## 3.项目运行环境

| 类型   |      名称      |  数量 | 配置 |
|----------|:-------------:|------:|------:|
| 数据库 |  SQLSERVER2008或以上版本 | 1 | 2核4G |
| 服务器 |    后台管理   |   1 | 2核4G |
| 服务器 |    小程序API   |   1 | 2核4G |
| 服务器 | 设备命令交互 |   1 | 2核4G |
| 服务器 | 微信公众号端 |   1 | 2核4G |


## 4.项目资源说明

### 4.1 微信小程序HTML资源

点击下载[HTML静态资源](/files/lvduoduo/mphtml.zip)

### 4.2 微信小程序/阿里云服务器账户信息

微信小程序：   fenhaola@ewayto.com          zz19781209    wxdc667d2c03236607    acd3b20b50e0b9b08f5a0c049087fdf0

微信开放平台： janky120@sina.com            zz19781209

微信公众号：:  1220399475@qq.com            loop123456    wx39c496db19341107    429da376f0640b02c0c119fcd206909f

微信支付商户号 1496229292 

商户平台登录帐号 1496229292@1496229292 

商户平台登录密码 430273 

申请对应的公众号 Loop生态社区

公众号APPID wx39c496db19341107 

Partnerkey:eOLG7KDzBsQpA5whyG0shj1mTfQ6kd31

阿里云：ywayto@126.com  zz19781209

绿多多垃圾分类：【弃用】3402311912@qq.com    ldd123456

【启用】 jifenbao@ewayto.com   jfb123456

绿卡通：zhangzheng@ewayto.com        zz19781209  

微信小程序：   zhangzheng@ewayto.com         zz19781209     wxf3b5d5173f1d4175          73ad217dd108bce8a4c4153b7123ac3a

微信公众号：:  3402311912@qq.com                 ldd123456        wxb92872011ad940a5        abe1fe76e4e223177928aa9e121439f4

绿多多阿里云：lvduoduo                         ldd123456

绿多多小程序： jifenbao@ewayto.com    jfb123456            wxd47aca8d4474c0a5            2362905a5f3441b4730195f55624be40

绿多多公众号：3402311912@qq.com     ldd123456           wxb92872011ad940a5           abe1fe76e4e223177928aa9e121439f4

### 4.3 Web代码库

https://github.com/LancCJ/lvduoduo-web.git

### 4.4 微信小程序代码库

https://github.com/LancCJ/lvduoduo-wechat.git

## 5.项目代码结构说明

![代码目录结构](/img/lvduoduo/代码目录结构.png)

## 6.Vsual Studio项目打开问题解决

### 6.1 打开项目报错不兼容如图

![打开项目报错不兼容](/img/lvduoduo/打开项目报错不兼容.png)

原因:

缺少InstallerProjects拓展组件，Setup程序需要以此为基础进行打包输出exe


解决方案

下载安装[InstallerProjects拓展组件](/files/lvduoduo/InstallerProjects.vsix)，重新打开项目

## 7.项目开发流程说明 

### 7.1 IDE安装

我们在未来统一使用最新版本的Visual Studio2019进行开发，该版本直接从官网下载自行安装即可，安装完成后打开项目如图

![项目打开界面](/img/lvduoduo/项目打开界面.png)

### 7.9 Vs中GIT使用

我们在开发过程中使用github进行代码管理，所以需要在Visual Studio中进行配置具体如下

首先安装Git的插件[GitHub.VisualStudio.vsix](/files/lvduoduo/GitHub.VisualStudio.vsix)在关闭VS软件的情况下进行安装，安装完毕再打开VS软件

打开后我们会在团队资源管理的标签界面看到GitHub如下

![GitHub设置界面](/img/lvduoduo/GitHub设置界面.png)

接下来我们进行设置，点击界面中GitHub的 连接 会让你输入 GitHub的账户信息，没有的自己申请下再来吧。

![GitHub登录界面](/img/lvduoduo/GitHub登录界面.png)

登录完成后你的账户必须先加入到一个项目组内，由项目创建者把你拉进去，然后你再通过克隆选择项目进行代码拉取

![克隆代码拉取](/img/lvduoduo/克隆代码拉取.png)

以上步骤你就能加入项目一起开发了





</div>

<div v-else>
    <!-- <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button> -->
    <el-dialog title="查看权限控制" :visible.sync="dialogFormVisible"
    close-on-click-modal=false
    close-on-press-escape=false
    show-close=false
    width="25%"
    >
    <el-form :model="form">
        <el-form-item label="查看密码" :label-width="formLabelWidth">
        <el-input v-model="form.pwd" autocomplete="off" show-password placeholder="请输入查看密码"></el-input>
        </el-form-item>        
    </el-form>
    <div slot="footer" class="dialog-footer">
        <!-- <el-button @click="dialogFormVisible = false">取 消</el-button> -->
        <el-button type="primary" @click="look()">确 定</el-button>
    </div>
    </el-dialog>
</div>





<script>
  export default {
    data() {
        return {
            isShow : false,
            form: {
                pwd: ''
        },
        formLabelWidth: '120px',
        dialogFormVisible: true
        }
    },
    methods: {
               look:function(){
                   if(this.form.pwd=='lvduoduo123'){
                       
                        this.isShow = true;
                   }else{
                      this.$message({
                        type: 'error',
                        message: '密码错误'
                    });  
                    // this.centerDialogVisible = true
                   }
               }
    },
    mounted:function () {
        // var _that = this;
        // this.$confirm('请输入查看密码?', '提示', {
        //   confirmButtonText: '确定',
        //   cancelButtonText: '取消',
        //   type: 'warning'
        // }).then(() => {
        // //   this.$message({
        // //     type: 'success',
        // //     message: '删除成功!'
        // //   });
        //     _that.data.isShow = true;
        // }).catch(() => {
        //   this.$message({
        //     type: 'info',
        //     message: '密码错误'
        //   });          
        // });
    }
  }
</script>  