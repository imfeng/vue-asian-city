<template>
<!--<div id="main-nav">
    <nuxt-link to="./" class="button--green">首頁</nuxt-link>
    <nuxt-link to="./about" class="button--green">關於我們</nuxt-link>
    <nuxt-link to="./news" class="button--green">最新消息</nuxt-link>
    <nuxt-link to="./lotto" class="button--green">彩期號碼</nuxt-link>
    
    <a href="./" class="button--grey">首頁</a>
    <a href="./about" class="button--grey">關於我們</a>
    <a href="./news" class="button--grey">最新消息</a>
    <a href="./lotto" class="button--grey">彩種</a>
</div>-->
<!-- header -->
<!-- navigation -->
<div class="main-top">
    <header>
    <div class="container-fluid px-lg-5 ">
        <nav class="mnu mx-auto">
                    <label for="drop" class="toggle">Menu</label>
                    <input type="checkbox" id="drop">
                    <ul class="menu">
                        <li class="mr-lg-4 mr-3 active"><a href="/">首頁</a></li>
                        <li class="mr-lg-4 mr-3"><a href="/about" class="scroll">關於我們</a></li>
                        <li class="mr-lg-4 mr-3"><a href="/news" class="scroll">最新消息</a></li>
                            <li class="mr-lg-4 mr-3"><a href="/lotto" class="scroll">彩種</a></li>
                        <li><a href="#contact" class="scroll">語言</a></li>
                    </ul>
                </nav>
    </div>
</header>
</div>
<!-- //navigation-->
</template>

<style>
    #main-nav {
        text-align: center;
    }
</style>