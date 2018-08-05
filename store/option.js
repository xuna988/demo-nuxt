export const state = () => {
  return {
    // 主页侧边栏数据
    sideList: [],
    // 打开的主题
    themelist: {},
    // 登陆状态
    authUser: null,
    // 主页推荐新闻数据
    listInfo: [],
    // 主页关注新闻数据
    focusInfo: [],
    // 主页热门数据
    hotInfo: [],
    // 主页标签数据
    celles: {},
    // 登陆状态
    loginState: 0,
    // 登陆的用户名
    username: '',
    // 登陆头像
    avator: '',
    // 存储登陆后的所有数据
    userData: {},
    // 图片格式
    imgExt: 'webp',
    // 是否为移动端
    mobileLayout: false,
    // ua
    userAgent: '',
    // 服务端博主信息
    adminInfo: {
      fetching: false,
      data: {}
    },
    // 服务端设置的全局配置
    globalOption: {
      fetching: false,
      data: {
        meta: {
          likes: 0
        }
      }
    },
    // 主页主题
    theme: {},
    douguoIndexInfo:[],
    douguoIndexListInfo:''
  }
}

export const getters = {
	mobileLayout: state => state.mobileLayout,
	getListInfo: (state) => state.listInfo,
	getCells: (state) => state.celles,
	getTheme: (state) => state.theme,
	getThemelist: (state) => state.themelist,
	getFocuslist: (state) => state.focusInfo,
	gethotlist: (state) => state.hotInfo,
	getsideList: (state) => state.sideList,
  getdouguoIndexInfo:(state)=> state.douguoIndexInfo,
  getdouguoIndexListInfo:(state)=>state.douguoIndexListInfo,
  getauthUser:(state)=>state.authUser
}

export const mutations = {
  SET_SIDELIST (state, action) {
    state.sideList = action
  },
  SET_FOCUSINFO (state, action) {
    state.focusInfo = action
  },
  SET_HOTINFO (state, action) {
    state.hotInfo = action
  },
  SET_THEME (state, action) {
    state.theme = action
  },
  SET_THEMELIST (state, action) {
    state.themelist = action
  },
  SET_USER (state, action) {
    state.authUser = action
  },
  SET_LISTINFO (state, action) {
    state.listInfo = action
  },
  SET_USERDATA (state, action) {
    state.userData = JSON.parse(JSON.stringify(action))
  },
  SET_LOGINSTATE (state, action) {
    state.loginState = action
  },
  SET_USERNAME (state, action) {
    state.username = action
  },
  SET_AVATOR (state, action) {
    state.avator = action
  },
  SET_CELLS (state, action) {
    state.celles = action
  },
  // 设置UA
  SET_USER_AGENT (state, action) {
    state.userAgent = action
  },
  // 设置图片格式
  SET_IMG_EXT (state, action) {
    state.imgExt = action
  },
  // 设置是否移动端状态
  SET_MOBILE_LAYOUT (state, action) {
    state.mobileLayout = action
  },
  // 获取服务端配置的管理员信息
  REQUEST_ADMIN_INFO (state) {
    state.adminInfo.fetching = true
  },
  REQUEST_ADMIN_INFO_SUCCESS (state, action) {
    state.adminInfo.fetching = false
    state.adminInfo.data = action.result
  },
  REQUEST_ADMIN_INFO_FAILURE (state) {
    state.adminInfo.fetching = false
    state.adminInfo.data = {}
  },
  // 获取服务端配置
  REQUEST_GLOBAL_OPTIONS (state) {
    state.globalOption.fetching = true
  },
  REQUEST_GLOBAL_OPTIONS_SUCCESS (state, action) {
    state.globalOption.fetching = false
    state.globalOption.data = action.result
  },
  REQUEST_GLOBAL_OPTIONS_FAILURE (state) {
    state.globalOption.fetching = false
  },
  SET_DOUGUO_INDEX_INFO(state,action){
    state.douguoIndexInfo = action
  },
  SET_DOUGUO_INDEX_LIST_INFO(state,action){
    state.douguoIndexListInfo = action
  }
}
