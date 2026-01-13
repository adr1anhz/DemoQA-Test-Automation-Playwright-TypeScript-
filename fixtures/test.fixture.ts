import { test as base } from '@playwright/test';
import { TextBoxPage } from '../pages/elements/TextBoxPage';
import { CheckBoxPage } from '../pages/elements/CheckBoxPage';
import { RadioButtonPage } from '../pages/elements/RadioButtonPage'
import { WebTablesPage } from '../pages/elements/WebTablesPage'
import { ButtonsPage } from '../pages/elements/ButtonsPage';
import { UploadAndDownloadPage } from '../pages/elements/UploadAndDownloadPage';
import { DynamicPropertiesPage } from '../pages/elements/DynamicPropertiesPage';
import { SelectablePage } from '../pages/SelectablePage';
import { LinksPage } from '../pages/elements/LinksPage';
import { PracticeFormPage } from '../pages/forms/PracticeFormPage';

type PagesFixtures = {
  textBoxPage: TextBoxPage;
  checkBoxPage: CheckBoxPage;
  radioButtonPage: RadioButtonPage;
  webtablesPage: WebTablesPage;
  buttonsPage: ButtonsPage;
  uploadAndDownloadPage: UploadAndDownloadPage;
  dynamicPropertiesPage: DynamicPropertiesPage;
  selectablePage: SelectablePage;
  linksPage: LinksPage;
  practiceFormPage: PracticeFormPage;
};

export const test = base.extend<PagesFixtures>({
  textBoxPage: async ({ page }, use) => {
    await use(new TextBoxPage(page));
  },

  checkBoxPage: async ({ page }, use) => {
    await use(new CheckBoxPage(page));
  },

  radioButtonPage: async ({ page }, use) => {
    await use(new RadioButtonPage(page));
  },

  webtablesPage: async ({ page }, use) => {
    await use(new WebTablesPage(page));
  },

  buttonsPage: async ({ page }, use) => {
    await use(new ButtonsPage(page));
  },

  uploadAndDownloadPage: async ({ page }, use) => {
    await use(new UploadAndDownloadPage(page));
  },

  dynamicPropertiesPage: async ({ page }, use) => {
    await use(new DynamicPropertiesPage(page));
  },

  selectablePage: async ({ page }, use) => {
    await use(new SelectablePage(page));
  },

  linksPage: async ({ page }, use) => {
    await use(new LinksPage(page));
  },

  practiceFormPage: async ({ page }, use) => {
    await use(new PracticeFormPage(page));
  },
});
