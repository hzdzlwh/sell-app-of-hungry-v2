import App from '../App'
import home from '../page/home/home'
import city from '../page/city/city'
import msite from '../page/msite/msite'
import shop from '../page/shop/shop'

export default [{
	path: '/',
	component: App,
	children: [
		{
			path: '',
			redirect: '/home'
		},
		{
			path: '/home',
			component: home
		},
    //当前选择城市页
    {
      path: '/city/:cityid',
      component: city
    },
    //所有商铺列表页
    {
      path: '/msite',
      component: msite
    },
    {
      path: '/shop',
      component: shop,
      children: [

      ]
    }


	]
}]
