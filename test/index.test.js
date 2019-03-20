const { macacaHelper } = window;
const { domEvent } = window._macaca_simulate;
const { assert } = macacaHelper;

describe('base', () => {
  let container;
  beforeEach(() => {
    container = document.querySelector('#mocha');
  });
  after(() => {});

  it('click', async () => {
    testElm = document.getElementById('testClick');
    domEvent(testElm, 'click', {});
    valueElm = document.getElementById('testClickValue');
    macacaHelper.assert(
      valueElm.innerHTML === '1',
      'click should be triggered'
    );
    await macacaHelper.sleep(100);
  });

  it('click when target is array', async () => {
    testElm = document.getElementById('testClick');
    domEvent([testElm], 'click', {});
    valueElm = document.getElementById('testClickValue');
    macacaHelper.assert(
      valueElm.innerHTML === '2',
      'click should be triggered'
    );
    await macacaHelper.sleep(100);
  });

  it('click when target is null', async () => {
    container = document.querySelector('body');
    try {
      domEvent(null, 'click', {});
    } catch (e) {
      valueElm = document.getElementById('testClickValue');
      macacaHelper.assert(
        valueElm.innerHTML === '2',
        'click should not be triggered'
      );
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

  it('touchstart', async () => {
    container = document.querySelector('body');
    domEvent(container, 'touchstart', {
    });
    await macacaHelper.sleep(1000);
  });

  it('mock input type file', async () => {
    const element = document.querySelector('#test-input');
    element.addEventListener('change', e => {
      assert.equal(e.target.files.length, 2);
    }, false);

    domEvent(element, 'change', {
      data: {
        target: {
          files: [
            {
              file: 'file1.png',
            },
            {
              file: 'file2.jpg',
            }
          ],
        },
      }
    });
  });
});
