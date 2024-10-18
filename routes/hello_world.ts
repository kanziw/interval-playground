import { Action, io } from '@interval/sdk';

export default new Action({
  name: 'Hello, World!',
  backgroundable: true,
  handler: async () => {
    const name = await io.input.text('Your name');
    return `Hello, ${name}`;
  },
});
