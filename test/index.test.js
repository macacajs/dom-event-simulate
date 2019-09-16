const { macacaHelper } = window;
const { domEvent } = window._macaca_simulate;
const { assert } = macacaHelper;

describe('base', () => {
  let container;
  let valueToChange;
  beforeEach(() => {
    valueToChange = null;
    container = document.querySelector('#mocha');
  });
  after(() => {});

  it('click', async () => {
    container.onclick = () => {
      valueToChange = 'click';
    };
    domEvent(container, 'click', {});
    macacaHelper.assert(valueToChange === 'click', 'click should be triggered');
    await macacaHelper.sleep(100);
  });

  it('click when target is array', async () => {
    container.onclick = () => {
      valueToChange = 'click array';
    };
    domEvent([container], 'click', {});
    macacaHelper.assert(
      valueToChange === 'click array',
      'click should be triggered',
    );
    await macacaHelper.sleep(100);
  });

  it('click when target is null', async () => {
    container.onclick = () => {
      valueToChange = 'click null';
    };
    try {
      domEvent(null, 'click', {});
    } catch (e) {
      macacaHelper.assert(
        valueToChange === null,
        'click should not be triggered',
      );
    }
    await macacaHelper.sleep(100);
  });

  it('random', async () => {
    try {
      domEvent(container, 'random', {});
    } catch (e) {
      // do nothing
    }
    await macacaHelper.sleep(100);
  });

  it('touchstart', async () => {
    container.ontouchstart = () => {
      valueToChange = 'touchstart';
    };
    domEvent(container, 'touchstart', {});
    // https://github.com/electron/electron/issues/8725
    // macacaHelper.assert(
    //   valueToChange === 'touchstart',
    //   'touchstart should be triggered'
    // );
    await macacaHelper.sleep(100);
  });

  const keyTests = [
    {
      event: 'keyup',
      eventHandler: 'onkeyup',
    },
    {
      event: 'keydown',
      eventHandler: 'onkeydown',
    },
    {
      event: 'keypress',
      eventHandler: 'onkeypress',
    },
  ];

  keyTests.forEach(test => {
    const { event, eventHandler } = test;
    it(`handles ${event} event`, async () => {
      container[eventHandler] = () => {
        valueToChange = event;
      };
      domEvent(container, event, {});
      macacaHelper.assert(
        valueToChange === event,
        `${event} should be triggered`,
      );
      await macacaHelper.sleep(100);
    });
  });

  it('mock wheel scroll on element', async () => {
    const element = document.createElement('div');
    element.style.width = '100px';
    element.style.height = '200px';
    element.style.overflow = 'auto';
    const childNode = document.createElement('div');
    childNode.style.width = '100px';
    childNode.style.height = '400px';
    element.appendChild(childNode);
    container.appendChild(element);
    domEvent(element, 'wheel', { deltaX: 0, deltaY: 200 });
    assert.equal(element.scrollTop, 200);
  });

  it('mock input type file', async () => {
    const element = document.querySelector('#test-input');
    element.addEventListener(
      'change',
      e => {
        assert.equal(e.target.files.length, 2);
      },
      false,
    );

    domEvent(element, 'change', {
      data: {
        target: {
          files: [
            {
              file: 'file1.png',
            },
            {
              file: 'file2.jpg',
            },
          ],
        },
      },
    });
  });
});
