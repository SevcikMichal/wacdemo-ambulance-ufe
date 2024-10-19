import { newE2EPage } from '@stencil/core/testing';

describe('wacdemo-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wacdemo-ambulance-wl-app></wacdemo-ambulance-wl-app>');

    const element = await page.find('wacdemo-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
