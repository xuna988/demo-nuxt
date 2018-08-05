<template>
	<div class="mar-25">
		{{newsListInfo}}
	</div>
</template>

<script type="text/ecmascript-6">
	import Service from '~/plugins/axios'
	import douguoIndex  from '~/components/douguo/index'
	import { mapGetters } from 'vuex'
	export default{
		asyncData ({ params, error }) {
		},
		fetch (context) {
			console.log("fetch")
		    // The fetch method is used to fill the store before rendering the page
		},
		data () {
		    return { name: 'bar' }
		},
		head: {
	    	titleTemplate: '新闻首页',
	      	meta: [
	        	{charset: 'utf-8'},
	        	{name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'}
	      	]
	    },
	    beforeCreate(){
	    	console.log("beforeCreate")
	    	// console.log(this.$options.data()["name"])
	    	// console.log(789)
	    	// console.log("bg")
	    	// console.log("beforeCreated")
	    },
	    created () {
	    	console.log("created12222")
	    },
	    mounted () {
	    	console.log("mounted")
	    },
	    components:{
	    	douguoIndex
	    },
	    computed: mapGetters({
      		newsListInfo: 'news/getNewsListInfo'
    	})
	}
</script>

<style type="text/css">
body{
	background: url(~assets/img/50logo.png) no-repeat;
}
</style>

