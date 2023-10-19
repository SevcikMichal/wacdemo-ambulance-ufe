import { newSpecPage } from '@stencil/core/testing';
import { WacdemoAmbulanceWlList } from '../wacdemo-ambulance-wl-list';

describe('wacdemo-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WacdemoAmbulanceWlList],
      html: `<wacdemo-ambulance-wl-list></wacdemo-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <wacdemo-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wacdemo-ambulance-wl-list>
    `);
  });
});
