---
date: 2019-07-07
title: 建站案例
vssue: true
vssue-title: 建站案例
---

## &#160;&#160;&#160;&#160;&#160;&#160;个人搭建的网站案例

<div class="container">
    <el-card class="box-card t-hover-shadow" >
    <div slot="header" class="clearfix">
        <span class=" a-style"  @click='linkDownload("http://www.ksjh-auto.com")' title="点击浏览">昆山君荟自动化科技有限公司</span>
    </div>
    <el-image
      style="width: 100%; height: 100%"
      :src="url"
      ></el-image>
    </el-card>
    <el-card class="box-card t-hover-shadow">
    <div slot="header" class="clearfix">
        <span class=" a-style"  @click='linkDownload("http://www.sutouseal.com/")' title="点击浏览">苏投赛尔信息科技有限公司</span>
    </div>
    <el-image
      style="width: 100%; height: 100%"
      :src="url1"
      ></el-image>
    </el-card>
    <el-card class="box-card t-hover-shadow">
    <div slot="header" class="clearfix">
        <span class=" a-style"  @click='linkDownload("https://www.mingmo-tech.com/")' title="点击浏览">苏州明晶科技有限公司</span>
    </div>
    <el-image
      style="width: 100%; height: 100%"
      :src="url2"
      ></el-image>
    </el-card>
</div>


###### &#160;&#160;&#160;&#160;&#160;&#160;有需要建站的朋友请留言,邮箱右侧👉👉👉👉👉👉👉👉


<script>
  export default {
    data() {
      return {
        // fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'img/website/ksjh-auto.jpg',
        url1: 'img/website/sutouseal.jpg',
        url2: 'img/website/mingmo-tech.png'
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

  .t-hover-shadow {
    transition: transform .3s ease-in-out, box-shadow .3s cubic-bezier(.47, 0, .745, .715), border .3s linear .1s;
  }

  .t-hover-shadow:hover {
      box-shadow: 0 10px 50px rgba(51, 51, 51, .25);
      -webkit-transform: translateY(-10px);
      -moz-transform: translateY(-10px);
      transform: translateY(-10px)
  }

</style>