
import Vue from 'vue'
import Router from 'vue-router'

// Containers
const HomeContainer = () => import('@/containers/HomeContainer')
const DefaultContainer = () => import('@/containers/DefaultContainer')

// Views
const Administracao = () => import('@/modules/admin/Index')


// Configurações
const Configuracoes = () => import('@/modules/configuracoes/Index')

// Perfil 
const Perfil = () => import('@/modules/perfil/Index')
const PerfilConfiguracao = () => import('@/modules/perfil/Configuracao')

// Home 
const Home = () => import('@/modules/home/Index')
const Sobre = () => import('@/modules/home/Sobre')
const Ajuda = () => import('@/modules/home/Ajuda')

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/modules/login/Login')


Vue.use(Router);

import store from '../store/store';

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
 
    next();
    return
  }
  debugger;
  next('/admin')
};

const ifAuthenticated = (to, from, next) => {
  console.log(store.getters.isAuthenticated);
  if (store.getters.isAuthenticated) {
    next()

    return
  }

 debugger;
  next('/login')
};

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: 
  [
    { 
      path: '/',
      component: HomeContainer,
      redirect : {
        name: 'Home'
      },
      children: 
      [     
        {
          path: '',
          name: 'Home',
          component: Home
        }, 
        {
          path: '/ajuda',
          name: 'Ajuda',
          component: Ajuda
        }, 
        {
          path: '/sobre',
          name: 'Sobre',
          component: Sobre
        }, 
        {
          path: '/login',
          name: 'Login',
          component: Login,
          beforeEnter: ifNotAuthenticated
        }, 
      ]
    },
    {
      path: '/admin',
      name: 'Admin',
      beforeEnter: ifAuthenticated,
      redirect: {
        name: 'Painel'
      }, 
      component: DefaultContainer,      
      children: 
      [     
        {
          path: 'painel',
          name: 'Painel',
          component: Administracao
        }, 
        {
          path: 'configuracoes',
          name: 'Configurações',
          component: Configuracoes
        }, 
        {
          path: 'relatorios',
          name: 'Relatorios',
          component: Relatorios
        }, 
        {
          path: 'associados',
          redirect: 'associados/listar',
          name: 'Associados',
          component: { render(c){ return c('router-view')} }, 
          children: 
          [
            {
              path: '/admin/associados/adicionar',
              name: 'Adicionar',
              component: AssociadosForm
            },
            {
              path: '/admin/associados/:id/editar',
              component: AssociadosFormEditar,
            },
            {
              path: '/admin/associados/listar',
              name: 'Listar',
              component: Associados
            }
          ]
        },
        {
          path: 'carteirinha',
          redirect: '/admin/carteirinha/gerar',
          name: 'Carteirinha',
          component: { render(c){ return c('router-view')} }, 
          children: 
          [
            {
              path: '/admin/carteirinha/gerar',
              name: 'Gerar',
              component: CarteirinhaGerar
            },
            {
              path: '/admin/carteirinha/renovar',
              name: 'Renovar',
              component: CarteirinhaRenovar
            }
          ]
        },
        {
          path: 'perfil',
          redirect: '/admin/perfil/usuario',
          name: 'Perfil',
          component: { render(c){ return c('router-view')} }, 
          children: 
          [
            {
              path: '/admin/perfil/usuario',
              name: 'Usuario',
              component: Perfil
            },
            {
              path: '/admin/perfil/configuracao',
              name: 'Configuração',
              component: PerfilConfiguracao
            }
          ]
        },                    
      ]
    }   
  ]            
})
