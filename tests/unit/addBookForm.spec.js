import { shallowMount } from '@vue/test-utils'
import addBookForm from '@/components/addBookForm.vue'


describe('addBookForm', () => {
    it('renders a div', () => {
      const wrapper = shallowMount(addBookForm)
      expect(wrapper.contains('div')).toBe(true)
    })
  })

  describe('addBookForm', () => {
    it('renders a div', () => {
      const wrapper = shallowMount(addBookForm)
      expect(wrapper.contains('h3')).toBe(true)
    })
  })

describe('addBookForm', () => {
    it('renders a div', () => {
      const $route = { path: 'localhost:8080/add-new' }
      const wrapper = shallowMount(addBookForm, {
        mocks: {
          $route
        }
      })
      expect(wrapper.vm.$route.path).toBe($route.path)
    })
  })
