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
          <b-navbar toggleable="sm" class="navbar-toggler">
            <!-- <b-navbar-brand href="#">NavBar</b-navbar-brand> -->

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
 
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
                <b-nav-item to="/">首頁</b-nav-item>
                <b-nav-item to="/news">最新消息</b-nav-item>
                <b-nav-item to="/about">關於我們</b-nav-item>
                <b-nav-item-dropdown text="彩種" right>
                    <b-dropdown-item to="/lotto/亚洲赛车-A1-75">亚洲赛车 - 75s</b-dropdown-item>
                    <b-dropdown-item to="/lotto/亚洲赛车-A2-120">亚洲赛车 - 120s</b-dropdown-item>
                    <b-dropdown-item to="/lotto/亚洲赛车-A3-300">亚洲赛车 - 300s</b-dropdown-item>
                    <b-dropdown-item to="/lotto/亚洲飞艇-B1-75">亚洲飞艇 - 75s</b-dropdown-item>
                    <b-dropdown-item to="/lotto/亚洲飞艇-B2-120">亚洲飞艇 - 120s</b-dropdown-item>
                    <b-dropdown-item to="/lotto/亚洲飞艇-B3-300">亚洲飞艇 - 300s</b-dropdown-item>
                    <b-dropdown-item to="/lotto/亚洲快3-C1-75">亚洲快3 - 75s</b-dropdown-item>
                    <b-dropdown-item to="/lotto/亚洲快3-C2-120">亚洲快3 - 120s</b-dropdown-item>
                    <b-dropdown-item to="/lotto/亚洲快3-C3-300">亚洲快3 - 300s</b-dropdown-item>
                    <b-dropdown-item to="/lotto/亚洲快3-C1-75">亚洲快3 - 75s</b-dropdown-item>
                    <b-dropdown-item to="/lotto/亚洲快3-C2-120">亚洲快3 - 120s</b-dropdown-item>
                    <b-dropdown-item to="/lotto/亚洲快3-C3-300">亚洲快3 - 300s</b-dropdown-item>
                    <b-dropdown-item to="/lotto/亚洲时时彩-D1-75">亚洲时时彩 - 75s</b-dropdown-item>
                    <b-dropdown-item to="/lotto/亚洲时时彩-D2-120">亚洲时时彩 - 120s</b-dropdown-item>
                    <b-dropdown-item to="/lotto/亚洲时时彩-D3-300">亚洲时时彩 - 300s</b-dropdown-item>
                    <!-- <li class="dropdown-submenu">
                        <a tabindex="-1" href="#" @click="tt">More options</a>
<b-dropdown id="111" dropright text="Dropdown Button" class=" m-md-2">
                        <b-dropdown-item>First Action</b-dropdown-item>
                        <b-dropdown-item>Second Action</b-dropdown-item>
                        <b-dropdown-item>Third Action</b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item active>Active action</b-dropdown-item>
                        <b-dropdown-item disabled>Disabled action</b-dropdown-item>
                    </b-dropdown>
                    </li>
                    

                    <li class="dropdown-submenu">
                        <a tabindex="-1" href="#">More options</a>
                        <ul class="dropdown-menu">
                            <li><a tabindex="-1" href="#">Second level</a></li>
                            <li><a href="#">Second level</a></li>
                            <li><a href="#">Second level</a></li>
                        </ul>
                    </li>
                    <b-dropdown-item class="dropdown-submenu">
                        <b-nav-item-dropdown to="#" text="1111" right>
                            <b-dropdown-item href="#">2222</b-dropdown-item>
                            <b-dropdown-item href="#">2222</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-dropdown-item>
                    <b-dropdown-item href="#">ES</b-dropdown-item>
                    <b-dropdown-item href="#">RU</b-dropdown-item>
                    <b-nav-item class="dropdown-submenu">
                        <b-nav-item-dropdown text="賽車" right>
                            <b-dropdown-item href="#">EN</b-dropdown-item>
                            <b-dropdown-item href="#">ES</b-dropdown-item>
                            <b-dropdown-item href="#">RU</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-nav-item> -->
                    

                    <!-- <b-nav-item-dropdown text="賽車" right>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">ES</b-dropdown-item>
                        <b-dropdown-item href="#">RU</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown text="賽車" right>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">ES</b-dropdown-item>
                        <b-dropdown-item href="#">RU</b-dropdown-item>
                    </b-nav-item-dropdown> -->
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
<script>
export default {
    mounted() {
        $('ul.navbar-nav .b-nav-dropdown .dropdown-submenu #111__BV_toggle_').on('click', function(event) {
            console.log(event)
            // Avoid following the href location when clicking
            event.preventDefault(); 
            // Avoid having the menu to close when clicking
            event.stopPropagation(); 
            // Re-add .open to parent sub-menu item
            $(this).parent().addClass('show');
            $(this).parent().find("ul").parent().find("li.dropdown").addClass('open');
        });
    },
    methods: {
        tt: function ($e) {
            console.log($e);
        }
    }
}
</script>
<style lang="scss"> 
#main-nav {
    .dropdown-item {
        text-align: left;
        font-size: 1.2rem;
    }
    .nav-item {
        padding: 0 .5rem;
    }
    .navbar-light .navbar-nav .nav-link {
        cursor: point;
        color: white;
        letter-spacing: .2em;
        &:hover, &:focus{
            color: #ffd709;
        }
    }
    .navbar-toggler {
        justify-content: center;
    }
    .dropdown-submenu {
        nav a {
            color: #525252; 
        }
    }
    @media(max-width: 768px) {
        nav ul {
            padding-top: 1rem;

        }
        .nav-item {
            padding: .5rem .5rem;
        }
    }
}

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