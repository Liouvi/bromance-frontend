// WebSocket singleton — implemented in Sprint 4
export const ws = {
  connect: (_token: string) => {},
  disconnect: () => {},
  send: (_event: string, _payload: unknown) => {},
  on: (_event: string, _handler: (data: unknown) => void) => () => {},
};
