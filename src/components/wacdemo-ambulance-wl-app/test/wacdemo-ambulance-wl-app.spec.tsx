import { newSpecPage } from '@stencil/core/testing';
import { WacdemoAmbulanceWlApp } from '../wacdemo-ambulance-wl-app';

describe('wacdemo-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [WacdemoAmbulanceWlApp],
      html: `<wacdemo-ambulance-wl-app base-path="/"></wacdemo-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("wacdemo-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [WacdemoAmbulanceWlApp],
      html: `<wacdemo-ambulance-wl-app base-path="/ambulance-wl/"></wacdemo-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("wacdemo-ambulance-wl-list");
  });
});