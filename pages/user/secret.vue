<template>
  <div class="ucenter">
    <h1>个人中心</h1>
    <nuxt-link to="/">返回首页</nuxt-link>
  </div>
</template>

<script>
export default {
  middleware: 'auth'
}
</script>
<style type="text/css" scoped>
	.ucenter{
		font-size: 20px;
		text-align: center;
	}
</style>