const { macacaHelper } = window;
const { domEvent } = window._macaca_simulate; 

describe('base', () => {
  let container;
  beforeEach(() => {
    container = document.querySelector('#mocha');
  });
  after(() => {});

  it('1', async () => {
    console.log('1');
    await macacaHelper.sleep(1000);
  });

  it('2', async () => {
    container = document.querySelector('body');
    domEvent(container, 'click', {
    });
    await macacaHelper.sleep(1000);
  });
});