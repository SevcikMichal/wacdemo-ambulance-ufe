import { newSpecPage } from '@stencil/core/testing';
import { WacdemoAmbulanceWlList } from '../wacdemo-ambulance-wl-list';

describe('wacdemo-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WacdemoAmbulanceWlList],
      html: `<wacdemo-ambulance-wl-list></wacdemo-ambulance-wl-list>`,
    });

    const wlList = page.rootInstance as WacdemoAmbulanceWlList; 
    const expectedPatients = wlList?.waitingPatients?.length 
    
    const items = page.root.shadowRoot.querySelectorAll("md-list-item"); 
    expect(items.length).toEqual(expectedPatients); 
  });
});
