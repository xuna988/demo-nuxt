export default function ({ store, error }) {
	console.log("我被执行啦一次")
  	if (!store.state.option.authUser) {
	    error({
			message: 'You are not connected',
			statusCode: 403
	    })
  	}
}
