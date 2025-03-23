---
layout: test
title: "图片展示测试页面"
description: "展示各种图片布局和展示方式"
permalink: /test/
nav: true

banner_image: "/assets/img/2.jpg"

gallery_grid:
  - url: "/assets/img/2.jpg"
    caption: "网格图片1"
  - url: "/assets/img/2.jpg"
    caption: "网格图片2"
  - url: "/assets/img/2.jpg"
    caption: "网格图片3"
  - url: "/assets/img/2.jpg"
    caption: "网格图片4"
  - url: "/assets/img/2.jpg"
    caption: "网格图片5"
  - url: "/assets/img/2.jpg"
    caption: "网格图片6"

gallery_masonry:
  - url: "/assets/img/2.jpg"
    caption: "瀑布流图片1"
  - url: "/assets/img/2.jpg"
    caption: "瀑布流图片2"
  - url: "/assets/img/2.jpg"
    caption: "瀑布流图片3"
  - url: "/assets/img/2.jpg"
    caption: "瀑布流图片4"
  - url: "/assets/img/2.jpg"
    caption: "瀑布流图片5"
  - url: "/assets/img/2.jpg"
    caption: "瀑布流图片6"

gallery_slider:
  - url: "/assets/img/1.jpg"
    caption: "图片 1"
  - url: "/assets/img/2.jpg"
    caption: "图片 2"
  - url: "/assets/img/3.jpg"
    caption: "图片 3"
  - url: "/assets/img/4.jpg"
    caption: "图片 4"
  - url: "/assets/img/5.jpg"
    caption: "图片 5"
  - url: "/assets/img/6.jpg"
    caption: "图片 6"

gallery_comparison:
  - before:
      url: "/assets/img/1.jpg"
      caption: "对比前1"
    after:
      url: "/assets/img/2.jpg"
      caption: "对比后1"
  - before:
      url: "/assets/img/1.jpg"
      caption: "对比前2"
    after:
      url: "/assets/img/2.jpg"
      caption: "对比后2"

pointcloud: true
---

## 图片展示说明
book antiqua
这个页面展示了多种图片布局方式：

1. **横幅图片**：页面顶部的大图展示
2. **网格布局**：整齐的网格形式展示多张图片
3. **瀑布流布局**：不规则网格，适合展示不同高度的图片
4. **滑动展示**：可以左右滑动查看的图片轮播
5. **对比展示**：并排展示两张图片进行对比
6. **点云展示**：三维点云数据的交互式展示

每种布局都有其特点：

- 网格布局适合展示同等重要性的图片
- 瀑布流适合展示不同尺寸的图片
- 滑动展示适合一次展示多张相关图片
- 对比展示适合展示前后对比或者不同版本的图片
- 点云展示支持完整的三维交互：
  - 鼠标左键：旋转视角
  - 鼠标右键：平移视角
  - 鼠标滚轮：缩放视角

所有展示模块都进行了响应式设计，在不同设备上都能获得良好的展示效果。

## 滑动展示说明

这个滑动展示模块一次展示3张图片，可以：
- 点击左右箭头切换图片组
- 使用圆点指示器直接跳转
- 等待自动轮播
- 鼠标悬停时暂停自动轮播

在移动设备上会自动调整为：
- 平板：一次显示2张图片
- 手机：一次显示1张图片 