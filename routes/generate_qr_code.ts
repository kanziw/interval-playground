import { Action, io } from '@interval/sdk';
import QRCode from 'qrcode';

export default new Action({
  name: 'Generate QR Code',
  handler: async () => {
    const url = await io.input.url('URL for the QR code to link to', {
      placeholder: 'https://github.com',
    });

    const buffer = await QRCode.toBuffer(url.toString());

    await io.display.image('Generated QR code', { buffer });
  },
});
