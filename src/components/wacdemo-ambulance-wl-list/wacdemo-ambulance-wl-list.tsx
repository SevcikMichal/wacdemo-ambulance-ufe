import { Component, Event, EventEmitter, Host, Prop, State, h } from '@stencil/core';
import { AmbulanceWaitingListApiFactory, WaitingListEntry } from '../../api/ambulance-wl'; 

@Component({
  tag: 'wacdemo-ambulance-wl-list',
  styleUrl: 'wacdemo-ambulance-wl-list.css',
  shadow: true,
})
export class WacdemoAmbulanceWlList {

  @Prop() apiBase: string; 
  @Prop() ambulanceId: string; 
  @Event({ eventName: "entry-clicked"}) entryClicked: EventEmitter<string>;
  
  @State() errorMessage: string; 
  
  waitingPatients: WaitingListEntry[]; 

  private async getWaitingPatientsAsync(){  
    try { 
      const response = await 
        AmbulanceWaitingListApiFactory(undefined, this.apiBase). 
          getWaitingListEntries(this.ambulanceId) 
      if (response.status < 299) { 
        return response.data; 
      } else { 
        this.errorMessage = `Cannot retrieve list of waiting patients: ${response.statusText}`  
      } 
    } catch (err: any) { 
      this.errorMessage = `Cannot retrieve list of waiting patients: ${err.message || "unknown"}`  
    } 
    return [];
  }

  async componentWillLoad() {
    this.waitingPatients = await this.getWaitingPatientsAsync();
  }

  render() {
    return (
      <Host>
        {this.errorMessage 
          ? <div class="error">{this.errorMessage}</div>  
          :  
          <md-list>
            {this.waitingPatients.map((patient, index) => 
              <md-list-item onClick={ () => this.entryClicked.emit(index.toString())}>
                <div slot="headline">{patient.name}</div>
                <div slot="supporting-text">{"Predpokladaný vstup: " + this.isoDateToLocale(patient.estimatedStart)}</div>
                  <md-icon slot="start">person</md-icon>
              </md-list-item>
            )}
          </md-list>
        }
      </Host>
    );
  }

  private isoDateToLocale(iso:string) {
    if(!iso) return '';
    return new Date(Date.parse(iso)).toLocaleTimeString()
  }
}
