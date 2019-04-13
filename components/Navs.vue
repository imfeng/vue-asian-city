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
                <b-nav-item to="/">{{$t('首页')}}</b-nav-item>
                <b-nav-item to="/news">{{$t('最新消息')}}</b-nav-item>
                <b-nav-item to="/about">{{$t('关于我们')}}</b-nav-item>
                <b-nav-item-dropdown :text="$t('彩种')" right>
                    
                    <li class="dropdown-submenu">
                      <a class="dropdown-item dropdown-toggle">{{$t('亚洲赛车')}}</a>
                      <ul class="dropdown-menu submenu">
                        <b-dropdown-item to="/lotto/亚洲赛车-A1-75">{{$t('亚洲赛车')}} - 75s</b-dropdown-item>
                        <b-dropdown-item to="/lotto/亚洲赛车-A2-120">{{$t('亚洲赛车')}} - 120s</b-dropdown-item>
                        <b-dropdown-item to="/lotto/亚洲赛车-A3-300">{{$t('亚洲赛车')}} - 300s</b-dropdown-item>
                      </ul>
                    </li>
                    </li>
                    
                    <li class="dropdown-submenu">
                      <a class="dropdown-item dropdown-toggle">{{$t('亚洲飞艇')}}</a>
                      <ul class="dropdown-menu submenu">
                        <b-dropdown-item to="/lotto/亚洲飞艇-B1-75">{{$t('亚洲飞艇')}} - 75s</b-dropdown-item>
                        <b-dropdown-item to="/lotto/亚洲飞艇-B2-120">{{$t('亚洲飞艇')}} - 120s</b-dropdown-item>
                        <b-dropdown-item to="/lotto/亚洲飞艇-B3-300">{{$t('亚洲飞艇')}} - 300s</b-dropdown-item>
                      </ul>
                    </li>
                    </li>
                    
                    <li class="dropdown-submenu">
                      <a class="dropdown-item dropdown-toggle">{{$t('亚洲快3')}}</a>
                      <ul class="dropdown-menu submenu">
                        <b-dropdown-item to="/lotto/亚洲快3-C1-75">{{$t('亚洲快3')}} - 75s</b-dropdown-item>
                    <b-dropdown-item to="/lotto/亚洲快3-C2-120">{{$t('亚洲快3')}} - 120s</b-dropdown-item>
                    <b-dropdown-item to="/lotto/亚洲快3-C3-300">{{$t('亚洲快3')}} - 300s</b-dropdown-item>
                      </ul>
                    </li>
                    </li>
                    
                    <li class="dropdown-submenu">
                      <a class="dropdown-item dropdown-toggle">{{$t('亚洲时时彩')}}</a>
                      <ul class="dropdown-menu submenu">
                        <b-dropdown-item to="/lotto/亚洲时时彩-D1-75">{{$t('亚洲时时彩')}} - 75s</b-dropdown-item>
                    <b-dropdown-item to="/lotto/亚洲时时彩-D2-120">{{$t('亚洲时时彩')}} - 120s</b-dropdown-item>
                    <b-dropdown-item to="/lotto/亚洲时时彩-D3-300">{{$t('亚洲时时彩')}} - 300s</b-dropdown-item>
                      </ul>
                    </li>
                    </li>
                    
                    <li class="dropdown-submenu">
                      <a class="dropdown-item dropdown-toggle">{{$t('亚洲11选5')}}</a>
                      <ul class="dropdown-menu submenu">
                        <b-dropdown-item to="/lotto/亚洲11选5-E1-75">{{$t('亚洲11选5')}} - 75s</b-dropdown-item>
                    <b-dropdown-item to="/lotto/亚洲11选5-E2-120">{{$t('亚洲11选5')}} - 120s</b-dropdown-item>
                    <b-dropdown-item to="/lotto/亚洲11选5-E3-300">{{$t('亚洲11选5')}} - 300s</b-dropdown-item>
                      </ul>
                    </li>
                    </li>
                    



            </ul>
          </li>
        </ul>
      </li>
                </b-nav-item-dropdown>
                <b-nav-item-dropdown :text="$t('語言')" right>
                  <b-dropdown-item :to="localePath('index', 'cn')">CN</b-dropdown-item>
                  <b-dropdown-item :to="localePath('index', 'en')">EN</b-dropdown-item>
                  <b-dropdown-item :to="localePath('index', 'jp')">JP</b-dropdown-item>
                </b-nav-item-dropdown>

              </b-navbar-nav>
            </b-collapse>
          </b-navbar>


      </div>
    </header>
  </div>
  <!-- //navigation-->
</template>
<script>
import Vue from 'vue';
export default {
    mounted() {
        $('.dropdown-submenu').each(function(event) {
            let that = $(this);
            that.on('click', function(event) {
                // console.log(that)
                
                let menu = that.children('.dropdown-menu.submenu');
                menu.toggle();
                event.preventDefault(); 
                event.stopPropagation();
            });
        })
        // $('.dropdown-submenu').on('click', function(event) {
        //     event.preventDefault(); 
        //     event.stopPropagation();
        //     let menu = $(this).children('.dropdown-menu.submenu');
        //     menu.toggle();
        // });
        
        
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
    @media (max-width: 768px) {
        .dropdown-submenu {
            .dropdown-menu.submenu {
                padding: 0.8rem 0rem;
                
                .dropdown-item {
                    display: list-item;
                    list-style-type: disc;
                    margin-left: 1rem;
                    list-style-position: inside;

                }
            }
            
        }
    }
    .dropdown-submenu {
        width: 100%;
        position: relative;
        .dropdown-item {
            padding: 0.55rem 1.5rem;
        }
    }
    .dropdown-item.dropdown-toggle {
        cursor: pointer;

    }

    .dropdown-submenu a::after {
        transform: rotate(-90deg);
        position: absolute;
        top: .8em;
        transform: rotate(-90deg);
        right: .7rem;
    }

    .dropdown-submenu .dropdown-menu {
        top: 0;
        left: 99%;
        margin-left: 0;
        margin-right: .1rem;
    }
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