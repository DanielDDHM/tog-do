import { WebSocketServer } from 'ws';
export const wss = (server) => {
  // eslint-disable-next-line no-unused-vars
  const onConect = (ws, req) => {
    console.log('On Connect', ws);
  };

  const wsi = new WebSocketServer({
    server,
  });

  wsi.on('connection', onConect);

  return wsi;
};
