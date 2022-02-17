import { mount } from '@vue/test-utils';
import ImageCard from '../../src/components/ImageCard.vue';

describe('ImageCard.vue', () => {
  it('renders an image', () => {
    const wrapper = mount(ImageCard);
    expect(wrapper.find('img').exists()).toBe(true);
  });

  it('passes the url to image src attribute', () => {
    const wrapper = mount(ImageCard, {
      propsData: {
        url: 'testUrl',
      },
    });
    expect(wrapper.find('img').attributes('src')).toBe('testUrl');
  });

  it('renders [data-user] if user is available', () => {
    const wrapper = mount(ImageCard, {
      propsData: {
        user: 'testUser',
      },
    });
    expect(wrapper.find('[data-user]').exists()).toBe(true);
  });

  it('does not render [data-user] if user is not available', () => {
    const wrapper = mount(ImageCard, {
      propsData: {
        user: '',
      },
    });
    expect(wrapper.find('[data-user]').exists()).toBe(false);
  });

  it('renders the value of the user prop inside [data-user]', () => {
    const wrapper = mount(ImageCard, {
      propsData: {
        user: 'testUser',
      },
    });
    expect(wrapper.find('[data-user]').text()).toBe('By testUser');
  });

  it('renders [data-user-image] if userImage is available', () => {
    const wrapper = mount(ImageCard, {
      propsData: {
        userImage: 'testUserImage',
      },
    });
    expect(wrapper.find('[data-user-image]').exists()).toBe(true);
  });

  it('does not render [data-user-image] if userImage is not available', () => {
    const wrapper = mount(ImageCard, {
      propsData: {
        userImage: '',
      },
    });
    expect(wrapper.find('[data-user-image]').exists()).toBe(false);
  });

  it('passes the value of the userImage prop to the src attribute of [data-user-image]', () => {
    const wrapper = mount(ImageCard, {
      propsData: {
        userImage: 'testUserImage',
      },
    });
    expect(wrapper.find('[data-user-image]').attributes('src')).toBe(
      'testUserImage'
    );
  });

  it('renders the value of the tags prop inside [data-tags]', () => {
    const wrapper = mount(ImageCard, {
      propsData: {
        tags: 'tag 1, tag2, tag 3',
      },
    });
    expect(wrapper.find('[data-tags]').text()).toBe('Tags: tag 1, tag2, tag 3');
  });
});
