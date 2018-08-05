import Service from '~/plugins/axios'
import UaParse from '~/utils/ua-parse'
import axios from 'axios'

export const strict = false
export const actions = {
  nuxtServerInit(store, { params, route, req }) {
    console.log("nuxtServerInit")
    if (req.session && req.session.authUser) {
      store.commit('option/SET_USER', req.session.authUser)
    }
    const userAgent = process.server ? req.headers['user-agent'] : navigator.userAgent
    const { isMobile, isIE, isSafari, isEdge, isFF, isBB, isMaxthon, isIos } = UaParse(userAgent)
    const mustJpg = (isIos || isFF || isMaxthon || isSafari || isBB || isIE || isEdge)
    let start = {
      'num': 20
    }
    let startheme = {
      'num': 100
    }
    let initAppData = []
    initAppData = [
  		store.dispatch('loadListInfo', start),
  		store.dispatch('loadListTheme', startheme), //加载主题配置
  		store.dispatch('loadTag'),
  		store.dispatch('loadFocusInfo'),
  		//store.dispatch('loadHotInfo', start), //加载热门
  		store.dispatch('loadSideList'),
  		store.dispatch('loadDouguoIndex',startheme),
  		store.dispatch('loadDouguoListIndex',route),
      store.dispatch('loadNewsListIndex')
    ]

    store.commit('option/SET_IMG_EXT', mustJpg ? 'jpeg' : 'webp')
    store.commit('option/SET_MOBILE_LAYOUT', isMobile)
    store.commit('option/SET_USER_AGENT', userAgent)

    return Promise.all(initAppData)
  },
  async loadNewsListIndex({ commit }, params = {}) {
    return Service.get(`https://way.jd.com/jisuapi/get?channel=头条&num=10&start=0&appkey=d1996bbdff69f778701ce586869e8e30`)
      .then(res => {
        commit('news/SET_NEWSLIST', res.data)
        return Promise.resolve(res.data)
      }, err => {
        commit('news/SET_NEWSLIST', err)
        return Promise.reject(err)
      })
  },
  async loadDouguoListIndex({ commit }, params = {}) {
    return Service.get(`/api/douguoIndexListApi?start=${params.params.id}`)
      .then(res => {
        commit('option/SET_DOUGUO_INDEX_LIST_INFO', res.data)
        return Promise.resolve(res.data)
      }, err => {
        commit('article/SET_SIDELIST', err)
        return Promise.reject(err)
      })
  },
  async loadDouguoIndex({ commit }, params = {}) {
    return Service.get(`/api/douguoIndexApi?start=${params.num}`)
		.then(res => {
			commit('option/SET_DOUGUO_INDEX_INFO', res.data)
			return Promise.resolve(res.data)
		}, err => {
			commit('article/SET_SIDELIST', err)
			return Promise.reject(err)
		})
  },
  // 加载主页侧边栏文章
  async loadSideList({ commit }, params = {}) {
    return Service.get(`/api/mainSide?start=1`)
      .then(res => {
        commit('option/SET_SIDELIST', res.data)
        return Promise.resolve(res.data)
      }, err => {
        commit('article/SET_SIDELIST', err)
        return Promise.reject(err)
      })
  },
  // 加载主页的推荐新闻数据
  async loadListInfo({ commit }, params = {}) {
    return Service.get(`/api/list?start=${params.num}`)
      .then(res => {
        res.data.forEach((currentValue, index, array) => {
          res.data[index].img_x = '-' + (12 + parseInt(Math.random() * 4) * 71) + 'px'
          res.data[index].img_y = '-' + (31 + parseInt(Math.random() * 4) * 79) + 'px'
          res.data[index].content = res.data[index].content === null ? res.data[index].content : res.data[index].content.replace(/<.*?>/ig, '')
          if (parseInt(res.data[index].showType) === 2) {
            res.data[index].imgArr = []
            let imgList = res.data[index].img.split(',')
            imgList = cleanArray(imgList)
            res.data[index].imgArr = imgList
          }
        })
        commit('option/SET_LISTINFO', res.data)
        return Promise.resolve(res.data)
      }, err => {
        commit('article/SET_LISTINFO', err)
        return Promise.reject(err)
      })
  },
  // 加载主页的关注新闻数据
  async loadFocusInfo({ commit }, params = {}) {
    return Service.get(`/news/focus?start=${params.num}`)
      .then(res => {

        res.data.forEach((currentValue, index, array) => {
          res.data[index].img_x = '-' + (12 + parseInt(Math.random() * 4) * 71) + 'px'
          res.data[index].img_y = '-' + (31 + parseInt(Math.random() * 4) * 79) + 'px'
          res.data[index].content = res.data[index].content === null ? res.data[index].content : res.data[index].content.replace(/<.*?>/ig, '')
        })
        commit('option/SET_FOCUSINFO', res.data)
      })
  },
  // 加载主页的热门新闻数据
  async loadHotInfo({ commit }, params = {}) {
    return Service.get(`/news/hot?start=${params.num}`)
      .then(res => {
        res.data.forEach((currentValue, index, array) => {
          res.data[index].img_x = '-' + (12 + parseInt(Math.random() * 4) * 71) + 'px'
          res.data[index].img_y = '-' + (31 + parseInt(Math.random() * 4) * 79) + 'px'
          res.data[index].content = res.data[index].content === null ? res.data[index].content : res.data[index].content.replace(/<.*?>/ig, '')
          if (parseInt(res.data[index].showType) === 2) {
            res.data[index].imgArr = []
            let imgList = res.data[index].img.split(',')
            imgList = cleanArray(imgList)
            res.data[index].imgArr = imgList
          }
        })
        commit('option/SET_HOTINFO', res.data)
      })
  },
  // 加载主页主题图片和数据
  async loadListTheme({ commit }, params = {}) {
    return Service.get(`/api/getTheme?num=${params.num}`)
      .then(res => {
        commit('option/SET_THEME', res.data)
      })
  },
  //  加载主页标签数据
  loadTag({ commit }) {
    return Service.get(`/api/oftenTag?num=1`)
      .then(res => {
        commit('option/SET_CELLS', res.data)
      })
  },
  async loadArticleDetail({ commit }, params = {}) {
    return Service.get(`/api/recommend?uid=${params.detail_id} `)
      .then(res => {
        // res.data[0].img =  res.data[0].img
        let pathname = (res.data[0].img).split('/')
        if (pathname[pathname.length - 1] === '') {
          res.data[0].img = pathname[pathname.length - 1]
        }
        commit('article/SET_DETAILLIST', res.data)
        return Promise.resolve(res.data)
      }, err => {
        commit('article/SET_DETAILLIST', err)
        return Promise.reject(err)
      })
  },
  // 加载主题信息
  async loadThemeDetail({ commit }, params = {}) {
    return Service.get(`/api/theme?uid= ${params.theme_id} `)
      .then(res => {
        commit('option/SET_THEMELIST', res.data[0])
        return Promise.resolve(res.data)
      })
  },
  async loadThemeDetail2({ commit }, params = {}) {
    return Service.get(`/api/theme2?uid= ${params.theme_id}&&limit=${params.limit} `)
      .then(res => {
        commit('option/SET_THEMELIST', res.data[0])
        return Promise.resolve(res.data)
      })
  },
  loadLoginState({ commit }, params) {
    commit('option/SET_LOGINSTATE', params)
  },
  loadUsername({ commit }, username) {
    commit('option/SET_USERNAME', username)
  },
  loadAvator({ commit }, avator) {
    commit('option/SET_AVATOR', avator)
  },
  loadUserData({ commit }, userData) {
    commit('option/SET_USERDATA', userData)
  },
  async logining({ commit }, data) {
    commit('option/SET_USER', data)
  },
  // 登陆 //退出
  async login({ commit }, { username, password }) {
    try {
      axios.get(`/api/login?username=${username}&password=${password}`)
        .then((res) => {
          commit('option/SET_USER', res.data)
        })
      // const {data} = axios.post(`http://data.maopingshou.com/login`, {username, password})
      // commit('option/SET_USER', data)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },
  async logout({ commit }) {
    axios.post(`/api/logout`)
    commit('option/SET_USER', null)
  }
}

// 清除数组中的空元素
function cleanArray (actual) {
	let newArray = []
	for (let i = 0; i < actual.length; i++) {
		if (actual[i]) {
		  	newArray.push(actual[i])
		}
	}
  	return newArray
}
