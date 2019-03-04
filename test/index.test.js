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
    await macacaHelper.sleep(100);
  });

  it('click', async () => {
    container = document.querySelector('body');
    domEvent(container, 'click', {});
    await macacaHelper.sleep(100);
  });

  it('click when target is array', async () => {
    container = document.querySelector('body');
    domEvent([container], 'click', {});
    await macacaHelper.sleep(100);
  });

  it('click when target is null', async () => {
    container = document.querySelector('body');
    try {
      domEvent(null, 'click', {});
    } catch (e) {
      // do nothing
    }
    await macacaHelper.sleep(100);
  });

  it('random', async () => {
    container = document.querySelector('body');
    try {
      domEvent(container, 'random', {});
    } catch (e) {
      // do nothing
    }
    await macacaHelper.sleep(100);
  });

  it('mouseout', async () => {
    container = document.querySelector('body');
    testElm = document.getElementById('test');
    domEvent(container, 'mouseout', {
      relatedTarget: testElm
    });
    await macacaHelper.sleep(100);
  });

  it('mouseover', async () => {
    container = document.querySelector('body');
    testElm = document.getElementById('test');
    domEvent(container, 'mouseover', {
      relatedTarget: testElm
    });
    await macacaHelper.sleep(100);
  });
});
