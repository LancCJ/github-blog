---
date: 2019-06-27
title: 个人简介
vssue: false
---

<div v-if="isShow">

## 基本信息

* 姓名:陈健
* 英文名:LancCJ、James Chen
* 出生日期:1989-06-25
* 工龄: ≈ 8 Year
* 联系方式:
* 技能:主攻JAVA技术，其他技术雨露均沾，前端后端都行移动端也可以😸

## 工作经历

<template>
    <div class="block">
        <el-timeline>
            <el-timeline-item timestamp="2019/02/9-至今" placement="top">
            <el-card>
                <h4>苏州华冠科技有限公司</h4>
                <p>职务:技术顾问、高级开发(JAVA)</p>
                <p>工作内容:APS系统研发，为苏州汇川技术有限公司提供技术顾问及后续MES研发工作</p>
            </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/08/01-2019-01-31" placement="top">
            <el-card>
                <h4>苏州弘仑信息技术有限公司</h4>
                <p>职务:项目经理、高级开发(JAVA)</p>
                <p>工作内容:为苏州方正璞华信息技术有限公司提供项目外包服务，负责项目整体负责及技术支持和研发工作</p>
            </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2016/1/1-2018/07/31" placement="top">
            <el-card>
                <h4>苏州广立信息技术有限公司(工龄续广达的所以可以说一家公司待了7年左右)</h4>
                <p>职务:高级开发(JAVA)</p>
                <p>工作内容:新项目技术选型、研发，项目通用组件研发、帮助他人解决技术难题</p>
            </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2011/07/20-2015/12/31" placement="top">
            <el-card>
                <h4>苏州广达科技有限公司</h4>
                <p>职务:软件开发工程师(JAVA)</p>
                <p>工作内容:公司现有警务通系统维护，新项目协助研发</p>
            </el-card>
            </el-timeline-item>
        </el-timeline>
    </div>
</template>



## 参与项目列表(无特别标注均为WEB开发)
* 苏州汇川技术有限公司MES项目
* 北京绫致时装IPSII电商采购项目 
* 包头北方创业OA无纸化办公平台(Web+Android) 
* 上海卡斯柯铁路局项目
* 业务通用模块-隐患排查 
* 系统通用模块-Kafka消息队列 
* 系统通用模块-MongoDB文件存储 
* 系统通用模块-勤务排班 
* 苏州交警警务平台V4.0 
* 温州社区警务SP服务(手机后台服务) 
* 东莞警务信息系统
* 苏州群租房管理系统
* 杭州羁押人员管理系统
* 镇江Service后台服务(手机后台服务) 
* 寿力气体检测系统(苏州寿力气体设备有限公司) 
* 交警短信平台开发
* 全国部分交警移动终端WEB管理系统(社区WEB) 

<!-- ## 个人项目
* 校大大项目
    * 主打校园一体化教学信息化服务
* EasyFactory(MES项目)     -->


</div>

<div v-else>
    <el-dialog title="简历查看权限控制" :visible.sync="dialogFormVisible">
    <el-form :model="form">
        <el-form-item label="查看密码" :label-width="formLabelWidth">
        <el-input v-model="form.pwd" autocomplete="off"></el-input>
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
                   if(this.form.pwd=='123456'){
                        this.isShow = true;
                   }else{
                      this.$message({
                        type: 'info',
                        message: '密码错误'
                    });  
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