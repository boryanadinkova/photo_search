import { mount } from '@vue/test-utils';
import SearchBar from '../../src/components/SearchBar.vue';

describe('Searchbar.vue', () => {
  it('Input is "" by default', () => {
    const wrapper = mount(SearchBar);
    expect(wrapper.vm.input).toBe('');
  });

  it('emits click', async () => {
    const wrapper = mount(SearchBar);
    wrapper.vm.$emit('click');
    wrapper.vm.$emit('click', 'testInput');
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().click).toBeTruthy();
    expect(wrapper.emitted().click.length).toBe(2);
    expect(wrapper.emitted().click[1]).toEqual(['testInput']);
  });

  it('Click on button calls click method with argument "input"', async () => {
    const wrapper = mount(SearchBar);
    await wrapper.setData({ input: 'test' });
    await wrapper.find('button').trigger('click');
    expect(wrapper.vm.input).toBe('test');
  });

  it('Enter key updates input value', async () => {
    const wrapper = mount(SearchBar);
    await wrapper.setData({ input: 'test' });
    await wrapper.trigger('keyup.enter', { input: 'test' });
    expect(wrapper.vm.input).toBe('test');
  });
});
