import Vue from 'vue'
import VueRouter from 'vue-router'

const index = () => import('../publish/index.vue')

const macro = () => import('../publish/macro.vue')
const jx3dat = () => import('../publish/jx3dat.vue')
const fb = () => import('../publish/fb.vue')
const bps = () => import('../publish/bps.vue')
const tool = () => import('../publish/tool.vue')
const collection = () => import('../publish/collection.vue')

const achievement = () => import('../publish/achievement.vue')
const item = () => import('../publish/item.vue')
const item_plan = () => import('../publish/item_plan.vue')
const house = () => import('../publish/house.vue')
const share = () => import('../publish/share.vue')

const bbs = () => import('../publish/bbs.vue')
const knowledge = () => import('../publish/knowledge.vue')

const exam = () => import('../publish/exam.vue')
const exam_question = () => import('../publish/exam_question.vue')
const exam_paper = () => import('../publish/exam_paper.vue')

const namespace = () => import('../publish/namespace.vue')


Vue.use(VueRouter)

const routes = [
  // 发布索引
  { path: '/', component: index },

  // 成就攻略发布
  {
    path: '/achievement/:achievement_id(\\d+)?',
    component: achievement,
  },
  // todo:准备弃用路由
  {
    path: '/cj/:achievement_id(\\d+)?',
    component: achievement,
  },

  // 物品攻略发布
  {
    path: '/item/:source_id([_\\d]+)?',
    component: item,
  },
  // 物品清单发布
  {
    name: 'item_plan',
    path: '/item/plan/:plan_id(\\d+)?',
    component: item_plan,
  },

  // 通识百科发布
  {
    path: '/knowledge/:source_id?',
    component: knowledge,
  },

  // 剑三小册发布
  {
    name: 'collection',
    path: '/collection/:collection_id(\\d+)?',
    component: collection,
  },

  // 副本发布
  {
    path: '/fb/:id?',
    component: fb,
  },

  // 插件数据发布
  {
    path: '/jx3dat/:id?',
    component: jx3dat,
  },

  // 家园发布
  {
    path: '/house/:id?',
    component: house,
  },

  // 宏发布
  {
    path: '/macro/:id?',
    component: macro,
  },

  // 职业发布
  {
    path: '/bps/:id?',
    component: bps,
  },

  // 工具发布
  {
    path: '/tool/:id?',
    component: tool,
  },

  // 茶馆闲聊
  {
    path: '/bbs/:id?',
    component: bbs,
  },
  {
    path: '/post/:id?',
    component: bbs,
  },

  // 捏脸分享
  {
    path: '/share/:id?',
    component: share,
  },

  // 趣味题库
  {
    path: '/exam/',
    component: exam,
  },
  {
    path: '/exam/question/:id?',
    component: exam_question,
  },
  {
    path: '/exam/paper/:id?',
    component: exam_paper,
  },
  // 铭牌
  {
    path: '/namespace/:id?',
    component: namespace,
  },
]

const router = new VueRouter({
  routes,
})

export default router
