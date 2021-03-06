import { shallowMount } from '@vue/test-utils'
import Alert from '@/components/Alert.vue'

describe('Alert', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(Alert)
  })
  it('open alert', () => {
    wrapper.vm.open()
    expect(wrapper.vm.isVisible).toBe.true
  })
  it('close alert', () => {
    wrapper.vm.close()
    expect(wrapper.vm.isVisible).toBe.false
  })
})
