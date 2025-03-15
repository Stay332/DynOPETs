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
  - url: "/assets/img/2.jpg"
    caption: "滑动图片1"
  - url: "/assets/img/2.jpg"
    caption: "滑动图片2"
  - url: "/assets/img/2.jpg"
    caption: "滑动图片3"

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
---

## 图片展示说明

这个页面展示了多种图片布局方式：

1. **横幅图片**：页面顶部的大图展示
2. **网格布局**：整齐的网格形式展示多张图片
3. **瀑布流布局**：不规则网格，适合展示不同高度的图片
4. **滑动展示**：可以左右滑动查看的图片轮播
5. **对比展示**：并排展示两张图片进行对比

每种布局都有其特点：

- 网格布局适合展示同等重要性的图片
- 瀑布流适合展示不同尺寸的图片
- 滑动展示适合一次展示一张重要图片
- 对比展示适合展示前后对比或者不同版本的图片

所有图片都添加了悬停效果和圆角处理，使界面更加美观。在移动设备上会自动调整布局以确保最佳显示效果。 