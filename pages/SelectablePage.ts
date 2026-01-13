import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class SelectablePage extends BasePage {
    readonly crasJustoOdio: Locator;
    readonly dapibusacfacilisisin: Locator;
    readonly morbiLeoRisus: Locator;
    readonly portaAcConsecteturAc: Locator;


  constructor(page: Page) {
    super(page);
    this.crasJustoOdio = page
      .locator('#verticalListContainer .list-group-item')
      .filter({ hasText: 'Cras justo odio' });
    this.dapibusacfacilisisin = page
      .locator('#verticalListContainer .list-group-item')
      .filter({ hasText: 'Dapibus ac facilisis in' });
    this.morbiLeoRisus = page
      .locator('#verticalListContainer .list-group-item')
      .filter({ hasText: 'Morbi leo risus' });
    this.portaAcConsecteturAc = page
      .locator('#verticalListContainer .list-group-item')
      .filter({ hasText: 'Porta ac consectetur ac' });
  }

  async clickcrasJustoOdio() {
    await this.crasJustoOdio.click();
  }

  async clickdapibusacfacilisisin() {
    await this.dapibusacfacilisisin.click();
  }

  async clickmorbiLeoRisus() {
    await this.morbiLeoRisus.click();
  }

  async clickportaAcConsecteturAc() {
    await this.portaAcConsecteturAc.click();
  }

}
