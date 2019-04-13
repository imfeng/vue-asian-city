<template>
<div class="content">
  <section class="banner-cont container-fluid">
    <img class="banner-img" src="../assets/images/banner-2.jpg" />
  </section>
  	<div class="agileits-services" id="services">
		  <div class="container">
		   <h2 class="heading text-capitalize"> 热门彩种 </h2>
		   <p class="subs mt-4">Proin ac fermentum est. Cras mi ipsum, consectetur.</p>
       <!-- <p class="centerd cat-logo"><img src="../assets/images/airship.png" alt=""></p> -->
          <div class="agileits-services-row row pt-md-5 pb-5  text-center">

            <div class="col-lg-4" v-for="item in catlist" :key="item.gameId">
              <div class="agileits-services-grids mt-lg-0 mt-md-0 mt-5">
                <p class="ltt-seris">{{item.expect}}</p>
                
                <div class="ltt-icons">
                  <i class="fa">i</i>
                  <i class="fa">S</i>
                </div>
                <h4 class="ltt-title mt-4 mb-4">{{item.title}}</h4>
                <!-- <p>{{item.opencode}}</p> -->
                 <div class="row">
	<div v-bind:id="'balls-'+item.gameId" class="small-12 medium-3 columns">
		<div class="ball blue">
			<div><span>7</span></div>
		</div>
		<div class="ball green">
			<div><span>48</span></div>
		</div>
		<div class="ball red">
			<div><span>15</span></div>
		</div>
		<div class="ball yellow">
			<div><span>22</span></div>
		</div>
		<div class="ball blue">
			<div><span>8</span></div>
		</div>
		<div class="ball yellow">
			<div><span>22</span></div>
		</div>
		<div class="ball red">
			<div><span>15</span></div>
		</div>
		<div class="ball blue">
			<div><span>7</span></div>
		</div>
		<div class="ball green">
			<div><span>48</span></div>
		</div>
		<div class="ball red">
			<div><span>15</span></div>
		</div>
		<div class="ball blue">
			<div><span>7</span></div>
		</div>
		<div class="ball yellow">
			<div><span>22</span></div>
		</div>
		<div class="ball red">
			<div><span>15</span></div>
		</div>
	</div>

</div>
                <p class="ltt-time">{{item.opentime}}</p>
                <p class="ltt-countdown">下期倒数： 00:00:22 </p>

              </div>
            </div>
          </div>
            
			<p class="subs mb-4">Proin ac fermentum est. Cras mi ipsum, consectetur?</p>
			<a @click="getd" class="banner-button btn">My recent work</a>
    </div>
	</div>
  <!-- <section class="container">
    <div>
      <logo />
      <h1 class="title">
亞洲娛樂城
      </h1>
      <h2 class="subtitle">
        20190408
      </h2>
    </div>
  </section> -->
</div>
  
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
  },  
  data: function() {
    return {
      test: '1',
      catlist: [
     
      ]
    }
  },
  methods: {
    getd: function() {
      console.log('res');
      this.$axios.$request({
          method: 'get',
          url:'http://127.0.0.1:3000/test',
          // responseType: 'json'
          })
          .then(res => {
            console.log('res');
            console.log(res)
          });
    }
  },
  mounted: function() {
    console.log('===============================');
    	// individual balls
    var $ball = $('#balls > div'),

      // standard foundation guttering
      gutter = 0,

      // width of the column they're sat in
      ballHold = $('#balls').width() + (gutter * 2),

      // width/height of ball + 10px for spacing
      diameter = ($ball.height() + 10),

      //  ratio of the circumference of a circle to its diameter
      perimeter = Math.PI * diameter,

      // how many balls
      n = $ball.length,

      // max amount of balls per line, 11 is a nice fit
      total = 5,

      // base
      i = 0,

      // interval between balls rolling in
      interval;


    // get the balls rolling
    function rotateBall(distance, depth) {

      console.log(distance + ' = ' + depth);
      var degree = distance * 360 / perimeter,

        // reusuable transition
        transition = "2s cubic-bezier(1.000, 1.450, 0.185, 0.850)",
        opacity = '1';

      // rotate the balls
      $ball.eq(i).css({
        transition: transition,
        transform: 'translateX(' + distance + 'px)',
        top: depth * diameter,
        opacity: opacity

        // rotate the inner text
      }).find('div').css({
        transition: transition,
        transform: 'rotate(' + degree + 'deg)'

        // on animation end, rotate all the balls back to their starting position
      }).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
        function () {
          $(this).css('transform', 'rotate(0)');
        }
      );
    }


    // the time between balls rolling 
    interval = setInterval(function () {

      // if we have number balls
      if (i > n) clearInterval(interval);

      // use the column var to gauage rolling width
      rotateBall(ballHold - (diameter * (i % total)), Math.floor(i / total));

      // up dee count 
      i++;
    }, 200);
  },
  created: function () {
    this.catlist = [ { "title": "极速赛车", "no":1,"expect":"2019041300084","opencode":"3,5,1,6,10,9,7,2,4,8","opentime":"2019-04-13 09:43:45","opentimestamp":1555119825,"opendate":"20190413","type":"A","gameId":"A1","startTime":"28800","endTime":"14400","interval":"75"},
      { "title": "极速赛车", "no":1,"expect":"2019041300084","opencode":"3,5,1,6,10,9,7,2,4,8","opentime":"2019-04-13 09:43:45","opentimestamp":1555119825,"opendate":"20190413","type":"A","gameId":"A1","startTime":"28800","endTime":"14400","interval":"75"},
      { "title": "极速赛车", "no":1,"expect":"2019041300084","opencode":"3,5,1,6,10,9,7,2,4,8","opentime":"2019-04-13 09:43:45","opentimestamp":1555119825,"opendate":"20190413","type":"A","gameId":"A1","startTime":"28800","endTime":"14400","interval":"75"}];
    // console.log(this.$axios);

  }
}
</script>

<style lang="scss">
.banner-img {
  width: 100%;
}
.content {
  /* background-color:  #0f1314; */
  background-color:  #1a120f;
  
}
.ltt-icons {
  /* float: right; */
  position: absolute;
  right: 1.5rem;
  top: 0;
  font-size: .7rem;
}
.ltt-seris {
  padding-bottom: 0;
  color: #3e3e3e;
  /* font-family: sans-serif; */
  font-weight: 600;
  line-height: .5;
}
.ltt-countdown {
  color: red;
  font-weight: bold;
  font-size: 1.2rem;
}
h4.ltt-title {
    font-family: 'Noto Sans SC Sliced', sans-serif;
    font-weight: 500;
    font-size: 2.5rem;
    line-height: 1;
    text-transform: CAPITALIZE;
    letter-spacing: -0.015em;
    color: #ccb520;
    text-shadow: -2px 0px 5px #f6f2d5;
}
.agileits-services-grids {
    background: rgba(255, 255, 255, 0.86);
    box-shadow: 0px 0px 9px 3px rgba(255, 255, 255, 0.57), 0px 2px 3px 0px rgba(0, 0, 0, 0.1);
    text-align: center;
    padding: 1.5rem 2rem;
    border-radius: 6px;
}
$small-space: 5px;
$medium-space: 20px;
$large-space: 40px;
$xlarge-space: 60px;
$lottoball: 40px;
[id^=balls-] {
  height: 150px;
  width: 100%;
  position: relative;
}
.ball {
    // position: relative;
    // display: inline-block;

  opacity: 0;
  left: -($lottoball * 1.25);
  position: absolute;
  // bottom: 55px;
	
	width: $lottoball;
	height: $lottoball;
	background: #004E99;
	border-radius: 50%;
	transition: all 0.7s ease-out;
	
	
	&.drop {
		bottom: 10px;
		//transition: 2s cubic-bezier(1.000, 1.450, 0.185, 0.850);
	}
	> div {
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		// the white number holder
		> span {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: ($lottoball / 1.75);
			height: ($lottoball / 1.75);
			border-radius: 50%;
			text-align: center;
			line-height: ($lottoball / 2);
			font-size: 14px;
			font-weight: bold;
			background: #ffffff;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
	&.blue {
		background: linear-gradient(to right, #536976, #292e49); 
	}
	&.red {
		background: linear-gradient(to right, #da4453, #89216b); 
	}
	&.green {
		background: linear-gradient(to right, #00b09b, #96c93d); 
	}
	&.yellow {
		background: linear-gradient(to right, #ffe259, #ffa751);
	}
}
</style>
