<template>
	<div>
		<ul class="feed-recipe">
			<li class="menu-content" v-for="(item,index) in douguoIndexInfo">
				<a :href="item.hot_cook_url" class="cooka">
					<div class="menu-name text-lips" v-html="item.menu_name"></div>
					<div class="flex mb10 mt8">
						<p class="text-lips flex-1 text-14" v-html="item.text_lips"></p>
					</div>
					<div class="cook-pic br4 hot-cook-pic" :style="'background-image:url('+item.hot_cook_pic+')'">  

					</div>
				</a>
		</li>
		</ul>
	</div>
</template>

<script type="text/ecmascript-6">
	import { mapGetters } from 'vuex'
	export default{
		head:{
			link:[{src:'https://i1.douguo.com/static/wap/css/m.basic.css?v=18062'}]
		},
		data () {
			return {

			}
	    },
	   	computed: mapGetters({
      		douguoIndexInfo: 'option/getdouguoIndexInfo'
    	})
	}
</script>

<style type="text/css">
html, body, menu, ul, ol, li, p, div, form, h1, h2, h3, h4, h5, h6, img, a img, input, textarea, fieldset {padding: 0;margin: 0;border: 0;}
h1,h2, h3, h4, h5{font-weight:normal;}
ul li{list-style: none;}
a {color:#333;text-decoration:none;} 
a:hover {text-decoration:none;}
a,img,i,span,li {-webkit-touch-callout: none;-webkit-tap-highlight-color: transparent;-webkit-user-select: none;}
div{-webkit-tap-highlight-color: transparent;}
input[type=button], input[type=text], input[type=password], input[type=search]{-webkit-appearance:none;outline:none;box-shadow:none;}
.clearfix:after{clear:both;content:".";display:block;font-size:0;height:0;line-height:0;visibility:hidden}
.clearfix{zoom:1}
body{max-width: 600px;margin: 0 auto;background: #fff;font-size: 14px;font-family:"Microsoft YaHei",Arial,Helvetica,sans-serif;}
.p10 { padding: 10px; }
.m10 { margin: 10px; }
.plr10 { padding-left: 10px; padding-right: 10px; }
.ptb10 { padding-top: 10px; padding-bottom: 10px; }
.plr5 { padding-left: 5px; padding-right: 5px; }
.mlr10 { margin-left: 10px; margin-right: 10px; }
.mtb10 { margin-top: 10px; margin-bottom: 10px; }
.mtb8 { margin-top: 8px; margin-bottom: 8px; }
.plr15 { padding-left: 15px; padding-right: 15px; }
.mb10 { margin-bottom: 10px; }
.mt10 { margin-top: 10px; }
.mb5 { margin-bottom: 5px; }
.mt8{margin-top: 6px;}
.mb15{margin-bottom: 15px;}
.p15 { padding: 15px; }
.pt20 { padding-top: 20px; }
.br4 { border-radius: 4px;-webkit-border-radius: 4px;-moz-border-radius: 4px }
.br3 { border-radius: 3px;-webkit-border-radius: 3px;-moz-border-radius: 3px }
.br-cirle { border-radius: 100%; }
.brt4 { border-top-left-radius: 4px; border-top-right-radius: 4px; -webkit-border-top-left-radius: 4px; -moz-border-top-right-radius: 4px;}
.btb4 { border-bottom-left-radius: 4px; border-top-left-radius: 4px; -webkit-border-bottom-left-radius: 4px; -moz-border-top-left-radius: 4px;}
.npic { width: 100%; display: block; }
.relative { position: relative; }
.absolute { position: absolute; }
.left { float: left; }
.right { float: right; }
.mar-25 { margin: 25px; }
.mt20{margin-top: 20px;}
.mlr-25 { margin-left: 25px;margin-right: 25px; }
.mt40{margin-top: 40px;}
.mb20{margin-bottom: 20px;}
.mb30{margin-bottom: 30px}
.mlf { margin-left: 25px; margin-right: 25px; }
.mtb { margin-bottom: 15px; margin-top: 15px; }
.header { margin: 20px 25px 20px; }
.flex { display: -webkit-box; display: -moz-box; display: -webkit-flexbox; display: -ms-flexbox; display: -webkit-flex; display: flex; -webkit-box-pack: justify; -moz-box-pack: justify; -webkit-flex-pack: justify; -ms-flex-pack: justify; -webkit-justify-content: space-between; justify-content: space-between }
.flex-1 { -webkit-box-flex: 1; -moz-box-flex: 1; width: -webkit-flex(1); -webkit-flex: 1; -ms-flex: 1; flex: 1 }
.text-lips { text-overflow: ellipsis; white-space: nowrap; overflow: hidden; }
.text-clamp { word-break: break-all; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.search { background: #F5F5F5; box-sizing: border-box; padding: 10px 10px 10px 34px; width: 100%;  line-height:25px;font-size: 15px; text-align: center; color: #666; }
.search-icon { display: inline-block; width: 16px; height: 16px; position: absolute; top: 50%; left: 50%; margin-top: -8px; margin-left: -38px;  }
.search-on .search-icon { left: 48px; }
.search-on .search { text-align: left; }
.dg-title { font-size: 23px; line-height: 23px; color: #333;font-weight: bold; }
.hot-btn { line-height: 15px; margin: 4px; font-size: 15px; color: #9292AF; display: inline-block; padding: 10px 10px 8px; border: 1px solid #9292AF; border-radius: 48px; }
.search-hot .hot-icon { width: 50%; display: inline-block;float: left; margin-bottom: 10px;box-sizing: border-box}
.search-hot .hot-icon:nth-child(even) { border-left: 5px solid transparent; }
.search-hot .hot-icon:nth-child(odd) { border-right: 5px solid transparent; }
.feed-recipe li { padding-top: 20px; padding-bottom: 20px; border-bottom: 1px solid #f3f3f3;overflow: hidden }
.feed-recipe li:last-child { border-bottom: none; }
.feed-pic { width: 140px; height: 100px; margin-right: 10px; }
.recipe-name { font-size: 18px; line-height: 26px; color: #333; font-weight: bold; }
.recipe-wrap { height: 52px; overflow: hidden }
.recipe-cai { font-size: 12px; line-height: 26px; color: #9293AE; }
.recipe-auth, .view, .collect { font-size: 12px; line-height: 14px; color: #9293AE; height: 14px; display: inline-block; vertical-align: middle }
.view { margin-right: 6px; }
.recipe-auth{font-size:13px;height: 15px;line-height: 15px;}
.view::before, .collect::before { content: ''; width: 12px; height: 12px; display: inline-block; vertical-align: top; background-size: 12px 12px !important; margin-right: 2px; }
.view::before { background: url('https://i1.douguo.com/upload/banner/1521438995.png'); }
.collect::before { background: url('https://i1.douguo.com/upload/banner/1521438821.png'); }
.auth-pic { width: 22px; height: 22px; display: inline-block; margin-right: 6px; }
.article-auth { font-size: 16px; line-height: 22px; color: #666; }
.article-name { font-size: 18px; line-height: 22px; font-weight: bold; }
.cate-content { width: 100%; border: 1px solid #eee; }
.cate-pic { width: 65px; height: 65px; border-right: 1px solid #eee; }
.intro { vertical-align: middle; line-height: 65px; padding-left: 10px; font-size: 15px; color: #333; }

.menu-name { font-size: 18px; color: #333; line-height: 20px; font-weight: bold; }
.text-12 { font-size: 12px; line-height: 20px; color: #9293AE; word-wrap: break-word; }
.text-14{font-size: 14px; line-height: 20px; color: #9293AE; word-wrap: break-word; }
.pic-35 { width: 35px; height: 35px; display: inline-block; margin-right: 10px; }
.text-17 { font-size: 17px; line-height: 35px; color: #333; word-wrap: break-word; }
.text-17d { font-size: 17px; line-height: 28px; color: #333; word-wrap: break-word; }
.text-18b { font-size: 18px; line-height: 28px; color: #333; font-weight: bold; word-wrap: break-word; }
.dg-collect { margin: 20px auto; font-weight: bold; background: #FFB31A; width: 84.6%; line-height: 40px; color: #fff; text-align: center; border-radius: 50px; font-size: 15px;}
.dg-collect-menu{margin:20px auto 40px;}
.dg-next { margin: 20px auto; font-weight: bold; background: #FFB31A; width: 100%; line-height: 42px; color: #fff; text-align: center; border-radius: 50px; }
.menu-count { font-size: 19px; line-height: 20px; color: #9292AF; text-align: center;font-weight: bold}
.menu-count span { position: relative }
.menu-count span::before, .menu-count span::after { position: absolute; content: ''; display: inline-block; width: 10px; height: 2px; background: #9292AF; top: 50%; margin-top: -1px; }
.menu-count span::before { left: -14px; }
.menu-count span::after { right: -14px; }
.menu-list { position: relative; display: block; color: #fff; text-align: center; }
.list-info { position: absolute; top: 0; left: 0; bottom: 0; right: 0; background: rgba(0, 0, 0, .1); display: flex; flex-direction: column; justify-content: center; }
.list-name { font-size: 21px; line-height: 32px; font-weight: bold; }
.text-14f { font-size: 14px; line-height: 22px; word-wrap: break-word; }
.text-14e{font-size: 14px; line-height: 22px; color: #999;word-wrap: break-word; }
.text-14c { font-size: 14px; line-height: 22px; color: #999; text-align: center; word-wrap: break-word; }
.detail-name { font-size: 23px; line-height: 34px; font-weight: bold; text-align: center; color: #333; margin-bottom: 20px; }
.cate-link { display: block; overflow: hidden; line-height: 47px; border-bottom: 1px solid #f3f3f3;font-size: 17px; }
.dg-mtitle { font-size: 19px; line-height: 20px; color: #333; font-weight: bold; }
.cate-name { width: 58%; float: left; display: inline-block }
.cate-num { width: 32%; float: left; display: inline-block }
.detail-step li { margin-bottom: 20px; }
.line-26 { line-height: 26px; }
.dg-app { width: 100%; background: #F7F7F7; height: 60px; position: relative; }
.dg-icon { width: 37px; height: 37px; position: absolute; top: 11px; left: 18px; }
.get-app { font-weight:bold;width: 84px; height: 35px; position: absolute; top: 13px; right: 18px; color: #fff; font-size: 14px; text-align: center; line-height: 35px; display: block; background: #ffb31a; }
.get-title { padding-left: 64px; padding-right: 106px; font-size: 14px; color: #333; line-height: 60px }
.cook-pic { position: relative; }

.load { width: 6.4%; margin: 20px auto; }
.hided { display: none !important }
.detail-video { position: relative; width: 100%; padding-top: 56%; }
.detail-video-info { position: absolute; top: 0; left: 0; right: 0; bottom: 0; }
.level { display: block; font-size: 15px; line-height: 15px; padding: 6px 0; color: #666 }

.level-hard::before { background-position: 0 0; }
.level-time::before { background-position: 0 -13px; }
.dg-three { width: 100%; }
.dg-three li { width: 33.3%; float: left; }
.dg-three li a { display: block; }
.dg-three li:first-child a { padding-right: 4px; }
.dg-three li:nth-child(2) a { padding-left: 2px; padding-right: 2px; }
.dg-three li:last-child a { padding-left: 4px; }
.text-12h { font-size: 12px; color: #333; line-height: 22px; text-align: center }
.text-14h { font-size: 14px; color: #333; line-height: 22px; text-align: center }
.th-in-pic { width: 100%; padding-top: 68%; }
.feed-pic, .th-in-pic, .menu-list, .hot-cook-pic { background-size: cover !important; background-repeat: no-repeat !important; }
.dg-three li { margin-bottom: 6px; }
.menu-list { padding-top: 64.4% }
.hot-cook-pic { padding-top: 56.3%; }
.hot-heit { max-height: 86px; overflow: hidden; }
.text-af{color: #9292af}
.text-line34{line-height: 34px;}
.feed-content{overflow: hidden}
.cook-a{display: block;position: relative;text-align: center;color: #fff}
.open-app-btn{ display:none; position: fixed; top: 75%; left: 50%; z-index: 10000; width: 105px; font-size: 13px; font-weight: 500; line-height: 36px; color: #fff; text-align: center; background: #ffb31a; border-radius: 18px; -webkit-transform: translate(-50%,200%); transform: translate(-50%,200%); -webkit-box-shadow: 0 2px 5px rgba(0,0,0,.25); box-shadow: 0 2px 5px rgba(0,0,0,.25); -webkit-transition: -webkit-transform .3s .3s; transition: -webkit-transform .3s .3s; transition: transform .3s .3s; transition: transform .3s .3s,-webkit-transform .3s .3s; border: none; outline: none; -webkit-appearance: none; -moz-appearance: none; appearance: none;font-weight: bold}
/*页面头部*/
.top{height: 60px;line-height:35px;padding:12.5px 20px;box-sizing: border-box;border-bottom: 1px solid #eee;}
.top .back{display:inline-block;width:12px;vertical-align: middle;}
.top .top_logo{width:90px;vertical-align: middle;margin-left: 5px;}
.top .getapp{display:inline-block;width:84px;height:35px;line-height:35px;color:#fff;background: #ffb31a;text-align:center;font-size:13px;float:right;font-weight:bold;}
.top-fix { position: fixed; top: 0; left: 0; width: 100%; background: #fff; z-index: 999 }
.top-steps { width: 100%; height: 60px; }
.foot .wx,.foot .other{display: none;vertical-align: bottom;}
.other .logo{width:25%;left:37.5%;top:6.9%;}
.other .downapp{width:58%;left:21%;top:33.7%;}
footer{width: 100%;text-align: center;padding: 15px 0;}
footer span {font-size: 16px;color: #333;}
footer p {font-size: 12px;margin: 10px 0 0px 0;}
/*菜谱列表*/
.recipe-item{display:block;padding:20px 0;border-bottom:1px solid #f3f3f3;}
.recipe-item:last-child{border:0;}
.recipe-item .recipeName{font-size: 18px;color: #333;font-weight:bold;}
.recipe-item>div{font-size: 12px;color: #9292AF;margin: 6px 0 10px;}

.getmore{width:100%;height:40px;line-height:40px;background: #FFB31A;border-radius: 50px;margin:0 auto;text-align:center;color:#fff;font-size:15px;font-weight:bold;}
.section{padding:20px 25px;}
.headtitle{font-size: 23px;color: #333;font-weight:bold;line-height:28px;}
/*个人中心*/
.home-head{height:5.87rem;text-align:center;color:#fff;position: relative;overflow: hidden;background: #ccc;}
.home-head .bg{float:left;width:100%;height:100%;}
.home-head .info{position:absolute;width:100%;height:100%;font-size:14px; background-image: linear-gradient(0deg, rgba(125,125,125,0.3) 10%, rgba(125,125,125,0.1) 35%, rgba(125,125,125,0.0) 45%);}
.home-head .headicon{border-radius: 50%; width:70px;height:70px;margin:1.2rem auto 15px;}
.home-head .nickname{font-size:19px;color:#fff;font-weight:bold;margin-bottom: 5px;height:26px;line-height:26px;}
.home-head .lv{background: #333;padding:1px 3px;font-size:12px;position: relative;top:-1px;}
.home-section{margin:20px 25px;}
.home-section .care{width:170px;height:40px;line-height:40px;background: #FFB31A;border-radius: 100px;margin:0 auto;text-align:center;color:#fff;font-size:15px;font-weight:bold;}
.home-section .home-sect{margin-top:40px;}
.sect-title span{font-size: 23px;color: #333;line-height: 26px;font-weight:bold;} 
.home-sect .more{font-size: 17px;color: #9292AF;float: right;line-height: 26px;font-weight:normal;}

.recipe .care{width:275px;margin-top:5px;max-width: 100%;}
.dish .sect-title{margin-bottom:20px;}
.dish .dish-item{display: inline-block;width:31%;float:left;margin-bottom:10px;}

.dish-section{padding:0.53rem 0.66rem;}
#dishlist{margin:0.53rem 0;}
#dishlist .dish-item{display: inline-block;width:2.75rem;height:2.75rem;float:left;margin-bottom:0.215rem;}
/*生活号文章列表*/
.article-item{display:block;padding:20px 0;border-bottom:1px solid #f3f3f3;}
.article-item:last-child{border:0;}
.art-pic{width:140px;height:100px;float:left;}
.art-info{height:110px;margin-left:145px;}
.art-info .title{padding-top:5px;font-size: 18px;color: #333;line-height: 26px;height:52px;font-weight:bold;overflow: hidden; text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;white-space:normal;  }
.art-info .nickname{font-size: 12px;color: #9292AF;margin-top:32px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
/*作品详情*/
.author{margin:20px 0;}
.author .care{width:70px;height:30px;line-height:30px;border-radius:50px;background: #FFB31A;font-size:14px;color:#fff;text-align:center;position: absolute;top:5px;right:0;font-weight:bold;}

.linkrecipe{display:block;width:100%;background: #F7F7F7;border-radius: 3px;height:43px;line-height:43px;padding:0 15px;box-sizing: border-box;}
.linkrecipe .dishname{color: #333;font-weight:bold;display:inline-block;max-width:60%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.linkrecipe .link{float:right;color: #9292AF;font-size:14px;}

.dish_desc{line-height:26px;margin:15px 0 20px;color:#666;font-size:16px;}
.dish_desc a{color:#256dc6;margin-right: 10px;}
.dish_desc img{height:15px;vertical-align: middle;    position: relative;top: -1px;}
.marklike{height:40px;line-height:40px;border:1px solid rgba(255,76,68,0.46);border-radius: 50px;text-align:center;color:#FF4C44;font-size:15px;}

.marklike i.zan{background-position: -37px -4px;}

.likers{height:28px;line-height:28px;margin-top:20px;}
.likers .liker_list{display:inline-block;width:70%;height:28px;overflow: hidden;}
.liker_list img{width:28px;height:28px;border-radius: 50%;vertical-align: bottom;}
.likers span{float: right;color: #9292AF;font-size:16px;}

.comment{margin:40px 25px 25px;}
.comment>p{font-size: 19px;color: #333;font-weight:bold;}
.comItem{padding:20px 0;border-bottom:1px solid #f3f3f3;}
.comItem:last-child{border:0;}
.user{height: 35px;position: relative;}
.user .headicon{display:block;width:35px;height:35px;position: absolute;top:1px;left:0;}
.user .headicon img{border-radius: 50%;}
.user .userinfo{height:37px;margin-left:40px;}
.user .username {display:block;color: #333;font-size:15px;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;height:21px}
.user .authorname{width:65%;}
.user .createtime{color:#999;font-size: 12px;}
.comItem>p{font-size: 15px;color: #333;line-height: 23px;margin-left:40px;}

.classrate{margin-top:8px;height:24px;}
.classrate span{position: relative;top:2px;font-size:14px;color:#333;}
.classrate i{display: inline-block;width:16px;height:16px;background: url("https://i1.douguo.com//upload/banner/1529561466.png") no-repeat -2px -1px;background-size: 20px;vertical-align: middle;}
.classrate i.light{background: url("https://i1.douguo.com//upload/banner/1529561459.png") no-repeat -2px -1px;background-size: 20px;}


@keyframes roll {
	0% { transform: rotate(0deg); transform-origin: 50% 100% 0; }
	10.6% { transform: rotate(8deg); transform-origin: 50% 100% 0; }
	48.9% { transform: rotate(-8deg); transform-origin: 50% 100% 0; }
	82.2% { transform: rotate(8deg); transform-origin: 50% 100% 0; }
	100% { transform: rotate(0deg); transform-origin: 50% 100% 0; }
}
@-moz-keyframes roll {
	0% { -moz-transform: rotate(0deg); -moz-transform-origin: 50% 100% 0; }
	15.6% { -moz-transform: rotate(8deg); -moz-transform-origin: 50% 100% 0; }
	48.9% { -moz-transform: rotate(-8deg); -moz-transform-origin: 50% 100% 0; }
	82.2% { -moz-transform: rotate(8deg); -moz-transform-origin: 50% 100% 0; }
	100% { -moz-transform: rotate(0deg); -moz-transform-origin: 50% 100% 0; }
}
@-webkit-keyframes roll {
	0% { -webkit-transform: rotate(0deg); -webkit-transform-origin: 50% 100% 0; }
	15.6% { -webkit-transform: rotate(8deg); -webkit-transform-origin: 50% 100% 0; }
	48.9% { -webkit-transform: rotate(-8deg); -webkit-transform-origin: 50% 100% 0; }
	82.2% { -webkit-transform: rotate(8deg); -webkit-transform-origin: 50% 100% 0; }
	100% { -webkit-transform: rotate(0deg); -webkit-transform-origin: 50% 100% 0; }
}
@-o-keyframes roll {
	0% { -o-transform: rotate(0deg); -o-transform-origin: 50% 100% 0; }
	15.6% { -o-transform: rotate(8deg); -o-transform-origin: 50% 100% 0; }
	48.9% { -o-transform: rotate(-8deg); -o-transform-origin: 50% 100% 0; }
	82.2% { -o-transform: rotate(8deg); -o-transform-origin: 50% 100% 0; }
	100% { -o-transform: rotate(0deg); -o-transform-origin: 50% 100% 0; }
}
</style>
