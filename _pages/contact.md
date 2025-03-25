<!-- ---
layout: contact
title: Contact
permalink: /contact/
description: Contact Us
nav: true
nav_order: 6
---


<script>
  // 邮箱地址的编码版本
  const email1 = "bWVuZ3h0QHNoYW5naGFpdGVjaC5lZHUuY24=";
  const email1_2 = "YXJub3h0bWFubkBnbWFpbC5jb20=";
  const email2 = "eWFuZ2pxMTIwMjJAc2hhbmdoYWl0ZWNoLmVkdS5jbg==";
  
  // 解码并显示邮箱地址
  document.getElementById('email1').innerHTML = atob(email1);
  document.getElementById('email1_2').innerHTML = atob(email1_2);
  document.getElementById('email2').innerHTML = atob(email2);
</script>

<style>
  .contact-section {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    gap: 2rem;
    margin-top: 5rem;
    margin-bottom: 3rem;
    overflow-x: auto;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }
  
  .contact-card {
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    padding: 2rem;
    width: 320px;
    min-width: 300px;
    text-align: center;
    flex-shrink: 0;
  }
  
  .avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 1rem;
    border: 3px solid #f0f0f0;
  }
  
  h3 {
    font-size: 1.5rem;
    margin: 0.5rem 0;
    color: #333;
  }
  
  .title {
    font-size: 1.1rem;
    color: #666;
    margin: 0.5rem 0;
    line-height: 1.4;
    min-height: 3rem;
  }
  
  .bio {
    font-size: 1rem;
    color: #777;
    margin: 1rem 0;
    line-height: 1.4;
    min-height: 3rem;
  }
  
  .links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    margin: 1rem 0;
    min-height: 3rem;
  }
  
  .links a {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: #f8f9fa;
    border-radius: 5px;
    color: #333;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  
  .links a:hover {
    background: #e9ecef;
    transform: translateY(-2px);
  }
  
  .links i {
    margin-right: 0.5rem;
  }
  
  .email {
    font-size: 1rem;
    color: #666;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid #eee;
  }
</style>

<script>
// 强制卡片水平排列
document.addEventListener('DOMContentLoaded', function() {
  // 覆盖可能存在的布局限制
  const pageContainer = document.querySelector('.contact-section').parentElement;
  if (pageContainer) {
    pageContainer.style.maxWidth = '100%';
    pageContainer.style.width = '100%';
    pageContainer.style.padding = '0';
    pageContainer.style.margin = '0 auto';
    pageContainer.style.overflow = 'visible';
  }
});
</script> -->