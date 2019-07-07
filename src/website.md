---
date: 2019-07-07
title: 建站案例
vssue: true
vssue-title: 建站案例
---

## &#160;&#160;&#160;&#160;&#160;&#160;个人搭建的网站搭建案例

<div class="container">
    <el-card class="box-card" >
    <div slot="header" class="clearfix">
        <span class=" a-style"  @click='linkDownload("http://www.ksjh-auto.com")' title="点击浏览">昆山君荟自动化科技有限公司</span>
    </div>
    <el-image
      style="width: 100%; height: 100%"
      :src="url"
      ></el-image>
    </el-card>
    <el-card class="box-card">
    <div slot="header" class="clearfix">
        <span class=" a-style"  @click='linkDownload("http://www.sutouseal.com/")' title="点击浏览">苏投赛尔信息科技有限公司</span>
    </div>
    <el-image
      style="width: 100%; height: 100%"
      :src="url1"
      ></el-image>
    </el-card>
</div>


###### &#160;&#160;&#160;&#160;&#160;&#160;有需要建站的朋友请留言,邮箱右侧👉👉👉👉👉👉👉👉


<script>
  export default {
    data() {
      return {
        // fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'img/website/sutouseal.jpg',
        url1: 'img/website/ksjh-auto.jpg'
      }
    },
    methods: {
        jump:function(url){
            //新网页打开地址        
        },
        linkDownload (url) {
            window.open(url,'_blank') // 新窗口打开外链接
        }
    }
  }
</script>

<style>
  .container {
    display:flex;
    flex-direction: row;
  }  

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    margin-left:10px;  
    width: 49%;
  }

  .a-style {
    cursor: pointer;
    text-decoration: none;
  }

</style>