import path from 'node:path';
import { Interval } from '@interval/sdk';

const interval = new Interval({
  apiKey: process.env.INTERVAL_KEY ?? '',
  endpoint: 'http://localhost:3000/websocket',
  routesDirectory: path.resolve(import.meta.dirname, 'routes'),
  //   logLevel: 'debug',
});

interval.listen();
