<template>
  <div class="container">
    
    <div v-if="!authUser">
        <h1>登录页面(默认用户名密码：许娜 111111)</h1>
   <div class="register-view">
    <div class="register-title">登陆</div>
    <div class="register-username">
      <input type="text" placeholder="请输入用户名" v-model="formUsername" name="username" >
    </div>
    <div class="register-password">
      <input type="password" placeholder="请填入密码" v-model="formPassword" name="password"></div>
      <div class="register-btn" @click.prevent="login">登陆</div>
    <div class="register-ed"><span><a>没有账号? </a><a href="/register" class="blue">注册</a></span><span><a class="blue">忘记密码?</a></span></div><div class="alert-show"><ul></ul></div><div class="clear"></div></div>
  </div>
  <div v-else>
      Hello {{ authUser.username }}!
      <h2>您已经登陆成功</h2>
      <button @click="logout">退出登录</button>
  </div>





 <!--    <form v-if="!authUser" @submit.prevent="login">
      <p class="error" v-if="formError">{{ formError }}</p>
      <h1>登录页面(默认用户名密码：许娜 111111)</h1>
      <p>Username: <input type="text" v-model="formUsername" name="username" /></p>
      <p>Password: <input type="password" v-model="formPassword" name="password" /></p>
      <button type="submit">Login</button>
    </form>
    <div v-else>
      Hello {{ authUser.username }}!
      <p><i>您已经登陆成功</i></p>
      <button @click="logout">退出登录</button>
    </div>
    <p><nuxt-link to="/user/secret">前往个人中心</nuxt-link></p>

 -->

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      formError: null,
      formUsername: '',
      formPassword: ''
    }
  },
  computed: mapGetters({
      authUser: 'option/getauthUser'
  }),
  methods: {
    async login() {
      try {
        await this.$store.dispatch('login', {
          username: this.formUsername,
          password: this.formPassword
        })
        this.formUsername = ''
        this.formPassword = ''
        this.formError = null
      } catch (e) {
        this.formError = e.message
      }
    },
    async logout() {
      try {
        await this.$store.dispatch('logout')
      } catch (e) {
        this.formError = e.message
      }
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

.alert-show
  position absolute
  height 100%
  width 100%
  top 80%
  left 50%
  transform translate(-50%, 0)
  z-index 1
  ul
    margin-top 3/rem
    width 100%
    li.active
      background-color #e6f3ff
      color #007fff
      padding 1.5rem
      display flex
      align-items center
      justify-content center
      box-shadow 0 1px 1px 0 hsla(0, 0%, 80%, .5)
      margin-bottom 10px
    li:after,
    li:before
      content ' '
      display table
    li:after
      clear both

.blue
  color #007fff

input
  padding 17px
  font-size 14px
  width 100%
  border 1px solid #e9e9e9
  border-radius 2px
  outline none
  box-sizing border-box
  margin-bottom 1rem

.register-view
  position relative
  background-color #fff
  margin 0 auto
  margin-top 3rem
  padding 1rem
  max-width 20rem

.register-title
  color #000
  font-size 1.5rem
  margin-bottom 1rem
  text-align center

.register-btn
  display inline-block
  cursor pointer
  display flex
  align-items center
  justify-content center
  color #fff
  background-color #007fff
  padding 17px
  font-size 14px

.register-ed
  margin 1rem 0
  color #007fff
  text-align center
  font-weight 800
  font-size .8rem
  display flex
  justify-content space-between


.container {
  padding: 100px;
  font-size: 20px;
}
.error {
  color: red;
}
p{
  padding:20px;
}
</style>