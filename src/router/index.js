import Vue from 'vue'
import VueRouter from 'vue-router'
import ListArticle from '../views/ListArticle'
import CreateArticle from '../views/CreateArticle'
import EditArticle from '../views/EditArticle'
import ShowArticle from '../views/ShowArticle.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/articles/index'
  },
  {
    path: '/articles/create',
    name: 'create-article',
    component: CreateArticle
  },
  {
    path: '/articles/index',
    name: 'list-article',
    component: ListArticle
  },
  {
    path: '/articles/:id/edit',
    name: 'edit-article',
    component: EditArticle
  },
  {
    path: '/article/:id/show',
    name: 'show',
    component: ShowArticle
  }
]

const router = new VueRouter({
  routes
})

export default router
