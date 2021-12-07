import { mount } from '@vue/test-utils'

import  router from "./router/index";


import App from './App.vue'





test('uses mounts', async () => {
    router.push('/')

  // After this line, router is ready
  await router.isReady()

  const wrapper = mount(App,{
    global: {
      plugins: [router]
    }
  })
  expect(wrapper.html()).toContain('Seja bem vindo ao sistema Intellect')
})
