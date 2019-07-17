---
category: Vaddin10
tags:
  - Vaddin10
date: 2019-07-16
title: Vaadin10 教程之关键概念(一)
vssue-title: Vaadin10 教程之概念(一)
---

#### 本文来源

本文来自[官网vaadin-key-concepts](https://vaadin.com/tutorials/vaadin-key-concepts)

本文旨在给Vaadin新人快速熟悉，让新手对基本概念及一些相关链接深入了解有一个快速的预览，在开发vaadin应用的时候也是一个快速的参考。
如果你还没有vaadin应用，可以从该地方配置下载[starter page.](https://vaadin.com/start)

#### 基本概念 Core concepts

* 任何对象都是组件 Everything is a component

    应用内需要一个按钮那么就编写```new Button()```需要一个文本输入框?那就编写```new TextField()```通过使用已经存在的组件和布局构建自己的组件和视图。使用注解```@Route("path") ```来进行导航跳转

* 事件监听让有APP交互性 Listen to events to make your app interactive

    使用```addClickListener()```来给一个按钮添加监听事件，使用```addValueChangeListener()```获取select组建的变化事件，任何的组建都可以通过绑定事件监听来完成交互。

#### Hello world

   这里有一个很小的但是完整的vaddin应用，代码如下MainView.java
   ```java
   @Route("")
   public class MainView extends VerticalLayout {
    public MainView() {
      add(new H1("Hello World!"));
    }
   }
   ```
   Vaadin使用基于组建的编程模式，在这个例子中，我们的应用是基于布局VerticalLayout继承后拓展的，在构造方法里面我们新增H1组件(等同于HTML页面中的H1标签)去显示Hello Word
   信息。
   
   最终我们使用```@Route("")```来映射应用到根路径来访问该视图

#### 组件 Components

   Vaadin是基于组件的编程，它有大量的组建和布局来拓展和构建我们自己的组件，你可以在[这里](https://vaadin.com/components)找到这些组件

* 使用组件 Using components

    让我们来实例化一个新组件
    ```java
    Button button = new Button("Click me");
    button.setIcon(VaadinIcon.VAADIN_V.create());
    ```
    在vaadin中每个组件都代表一个JAVA对象，想使用一个组件创建一个新实例然后配置它，最方便有效的方式去探索组件的完整功能最方便从IDE里面提示去获取


#### 布局 Layouts
* HorizontalLayout & VerticalLayout
* Div
* SplitLayout
* AppLayout
* FormLayout
* Declarative layouts 在HTML中申明式布局        
#### 事件监听 Listening to events   

#### 创建组件 Creating components
* 通过排版布局创建组件 Creating components through composition
* 通过官方的设计器Vaadin Designer创建组件 Creating components with Vaadin Designer

#### 与JavaScript事件和DOM节点交互 Interacting with JavaScript events and DOM nodes

#### 创建自定义JS组件 Creating custom JavaScript components  

#### 表单和数据绑定 Forms and data binding  
* 设置数据绑定 Setting up data binding
* 验证表单字段 Validating input fields
* 输入值与模型数据转换 Converting between presentation and model values
* 表格验证跨域验证 Validating forms (cross-field validation)
* 保存 Saving
    * 双向数据绑定 Two-way data binding
    * 单向数据绑定 One-way data binding
    
#### 显示和延迟加载数据列表 Displaying and lazy loading lists of data  
* 内存列表 In-memory list
* 使用DataProvider进行延迟加载 Lazy-loading with DataProvider

#### 视图和导航 Views and navigation 
* 定义路线 Defining routes
* 在视图之间导航 Navigating between views
* 嵌套路由，参数，错误页面 Nested routes, parameters, error pages

#### 测试 Testing    
* 单元和集成测试 Unit and integration testing
* 端到端测试（浏览器内测试） End-to-end testing (in-browser testing)

#### 使用CSS设计样式 Styling with CSS 

#### 生产 Production   

#### 下一步 Next steps
    
    
          
    