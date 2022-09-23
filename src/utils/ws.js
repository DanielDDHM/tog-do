import { WebSocketServer } from 'ws';

export const wss = (server) => {
  // eslint-disable-next-line no-unused-vars
  const onConect = (ws, req) => {
    ws.on('message', (data) => {
      ws.send(data);
    });
    ws.on('error', (e) => {
      throw new Error(ws, e);
    });
    console.log('On Connect');
  };

  const wsi = new WebSocketServer({
    server,
  });

  wsi.on('connection', onConect);

  return wsi;
};
