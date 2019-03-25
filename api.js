const PREFIX = process.env.baseUrl == 'test-' ? '//test-api.xxx.com' : (process.env.baseUrl == 'beta-' ? '//beta-api.xxx.com' : '//api.xxx.com');
const API = {
  getInfo: PREFIX + '/aaa/bbccc/ddd/' , //测试接口
  
};
export default API