import { newE2EPage } from '@stencil/core/testing';

describe('wacdemo-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wacdemo-ambulance-wl-list></wacdemo-ambulance-wl-list>');

    const element = await page.find('wacdemo-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
