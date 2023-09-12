import shared from './shared';
import modules from './modules';

export default {
  locale: 'en',
  messages: {
    ...shared,
    ...modules
  }
};
