<template>

  <!-- header -->
  <!-- navigation -->
  <div id="main-nav" class="main-top">

    
    <!-- <a href="./" class="button--grey">首頁</a>
    <a href="./about" class="button--grey">關於我們</a>
    <a href="./news" class="button--grey">最新消息</a>
    <a href="./lotto" class="button--grey">彩種</a> -->
    <header>
      <div class="container">
          <b-navbar toggleable="lg">
            <!-- <b-navbar-brand href="#">NavBar</b-navbar-brand> -->

            <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->

            <b-collapse id="nav-collapse" is-nav>
              <!-- <b-navbar-nav>
                <b-nav-item href="#">Link</b-nav-item>
                <b-nav-item href="#" disabled>Disabled</b-nav-item>
              </b-navbar-nav> -->

              <!-- Right aligned nav items -->
              <b-navbar-nav class="">
                <!-- <b-nav-form>
                  <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                  <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form> -->
                <b-nav-item >首頁</b-nav-item>
                <b-nav-item>最新消息</b-nav-item>
                <b-nav-item>關於我們</b-nav-item>
                <b-nav-item-dropdown text="彩種" right>
                  <b-dropdown-item href="#">EN</b-dropdown-item>
                  <b-dropdown-item href="#">ES</b-dropdown-item>
                  <b-dropdown-item href="#">RU</b-dropdown-item>
                  <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item-dropdown text="語言" right>
                  <b-dropdown-item href="#">CN</b-dropdown-item>
                  <b-dropdown-item href="#">EN</b-dropdown-item>
                  <b-dropdown-item href="#">JP</b-dropdown-item>
                </b-nav-item-dropdown>

              </b-navbar-nav>
            </b-collapse>
          </b-navbar>

        <!-- <nav class="mnu mx-auto">
            <label for="drop" class="toggle">Menu</label>
            <input type="checkbox" id="drop">
            <ul class="menu">
                <li class="mr-lg-4 mr-3 active"><a href="/">首頁</a></li>
                <li class="mr-lg-4 mr-3"><a href="/about" class="scroll">關於我們</a></li>
                <li class="mr-lg-4 mr-3"><a href="/news" class="scroll">最新消息</a></li>
                <li class="mr-lg-4 mr-3"><a href="/lotto-single" class="scroll">彩種</a></li>
                <li class="mr-lg-4 mr-3 nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    彩種
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li><a href="#contact" class="scroll">語言</a></li>
            </ul>
        </nav> -->
      </div>
    </header>
  </div>
  <!-- //navigation-->
</template>

<style > 

header {
    /* position: absolute; */
    z-index: 9;
    width: 100%;
    padding: .5rem 0;
}
nav a {
    font-size: 1rem;
}
.navbar-nav {
    width: 100%;
    justify-content: center;
}
    #main-nav {
        text-align: center;
    }
</style>