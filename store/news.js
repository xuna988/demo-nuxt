import Service from '~/plugins/axios'
import UaParse from '~/utils/ua-parse'
import axios from 'axios'

export const state = () => {
	return {
		newsList: []
	}
}

export const getters = {
	getNewsListInfo: (state) => state.newsList
}

export const mutations = {
  	SET_NEWSLIST (state, action) {
    	state.newsList = action
  	}
}