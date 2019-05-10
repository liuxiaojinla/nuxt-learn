export function getList(data = {}, options = {}) {
	return request(Object.assign(options, {
		url: '/api/category/get',
		data: data
	}));
}
