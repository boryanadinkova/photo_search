import { mount } from '@vue/test-utils';
import ImagesContainer from '../../src/components/ImagesContainer.vue';
import Pagination from '../../src/components/Pagination.vue';
import ImageCard from '../../src/components/ImageCard.vue';

describe('ImagesContainer.vue', () => {
  describe('Pagination', () => {
    it('renders pagination when photos are available', () => {
      const wrapper = mount(ImagesContainer, {
        propsData: {
          photos: [{}, {}],
        },
      });
      expect(wrapper.findComponent(Pagination).exists()).toBe(true);
    });

    it('does not render pagination when photos are not available', () => {
      const wrapper = mount(ImagesContainer);
      expect(wrapper.findComponent(Pagination).exists()).toBe(false);
    });

    it('passes the the photos array to pagination items prop', () => {
      const wrapper = mount(ImagesContainer, {
        propsData: {
          photos: [{}],
        },
      });
      expect(wrapper.findComponent(Pagination).props('items')).toStrictEqual([
        {},
      ]);
    });

    it('emits onChange', async () => {
      const wrapper = mount(ImagesContainer);
      wrapper.vm.$emit('onChange');
      wrapper.vm.$emit('onChange', 1);
      await wrapper.vm.$nextTick();

      expect(wrapper.emitted().onChange).toBeTruthy();
      expect(wrapper.emitted().onChange.length).toBe(2);
      expect(wrapper.emitted().onChange[1]).toEqual([1]);
    });
  });

  describe('Image Card', () => {
    it('passes the the item.webformatURL to ImageCard url prop', async () => {
      const wrapper = mount(ImagesContainer);
      await wrapper.setData({ pageOfItems: [{ webformatURL: 'testURL' }] });
      expect(wrapper.findComponent(ImageCard).props('url')).toBe('testURL');
    });

    it('passes the the item.user to ImageCard user prop', async () => {
      const wrapper = mount(ImagesContainer);
      await wrapper.setData({ pageOfItems: [{ user: 'testUser' }] });
      expect(wrapper.findComponent(ImageCard).props('user')).toBe('testUser');
    });

    it('passes the the item.tags to ImageCard tags prop', async () => {
      const wrapper = mount(ImagesContainer);
      await wrapper.setData({ pageOfItems: [{ tags: 'tag1 tag2' }] });
      expect(wrapper.findComponent(ImageCard).props('tags')).toBe('tag1 tag2');
    });

    it('passes the the item.userImageURL to ImageCard userImage prop', async () => {
      const wrapper = mount(ImagesContainer);
      await wrapper.setData({ pageOfItems: [{ userImageURL: 'testUserURL' }] });
      expect(wrapper.findComponent(ImageCard).props('userImage')).toBe(
        'testUserURL'
      );
    });
  });
});
