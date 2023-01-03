import Router from '@koa/router'
import person from './person'
import overview from './overview'

const compose = (...fns: Function[]) => 
	fns.reduce((a, b) => (...args: any[]) => a(b(...args)))

export default compose(
    person,
    overview,
)(new Router)
