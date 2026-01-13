import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base.page';
import { Subject, User } from '../../models/user.model';
import path from 'path';

export class PracticeFormPage extends BasePage {
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly email: Locator;
  readonly mobileNumber: Locator;
  readonly maleInput: Locator;
  readonly femaleInput: Locator;
  readonly subjectsInput: Locator;
  readonly hobbiesSport: Locator;
  readonly hobbiesReading: Locator;
  readonly hobbiesMusic: Locator;
  readonly dateOfBirthInput: Locator;
  readonly dateYear: Locator;
  readonly dateMonth: Locator;
  readonly currentAddress: Locator;
  readonly uploadInput: Locator;
  readonly submitButton: Locator;
  readonly modalTitle: Locator;
  readonly modalContent: Locator;

  constructor(page: Page) {
    super(page);
    this.firstName = page.locator('#firstName');
    this.lastName = page.locator('#lastName');
    this.email = page.locator('#userEmail');
    this.mobileNumber = page.locator('#userNumber');
    this.maleInput = page.locator('label[for="gender-radio-1"]');
    this.femaleInput = page.locator('label[for="gender-radio-2"]');
    this.subjectsInput = page.locator('#subjectsInput');
    this.hobbiesSport = page.locator('label[for="hobbies-checkbox-1"]');
    this.hobbiesReading = page.locator('label[for="hobbies-checkbox-2"]');
    this.hobbiesMusic = page.locator('label[for="hobbies-checkbox-3"]');
    this.dateOfBirthInput = page.locator('#dateOfBirthInput');
    this.dateYear = page.locator('.react-datepicker__year-select');
    this.dateMonth = page.locator('.react-datepicker__month-select');
    this.currentAddress = page.locator('textarea[placeholder="Current Address"]');
    this.uploadInput = page.locator('#uploadPicture');
    this.submitButton = page.locator('#submit');
    this.modalTitle = page.locator('#example-modal-sizes-title-lg');
    this.modalContent = page.locator('.modal-body');
  }

    async fillSubjects(subjects: string[]) {
      for (const subject of subjects) {
        await this.subjectsInput.fill(subject);
        await this.page.waitForSelector('.subjects-auto-complete__menu', {
          state: 'visible',
        });
        await this.subjectsInput.press('Enter');
      }
    }

  async chooseDateOfBirth(dateString?: string) {
    if (!dateString) return;

    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    await this.dateOfBirthInput.click();
    await this.page.waitForSelector('.react-datepicker', { state: 'visible' });

    await this.dateYear.selectOption(year.toString());
    await this.dateMonth.selectOption(month.toString());

    const dayLocator = this.page.locator('.react-datepicker__day')
      .filter({ hasText: new RegExp(`^${day}$`) })
      .filter({ hasNot: this.page.locator('.react-datepicker__day--outside-month') })
      .first();
    
    await dayLocator.waitFor({ state: 'visible' });
    await dayLocator.click();
  }

  async uploadFile(filePath: string): Promise<void> {
    await this.uploadInput.setInputFiles(filePath);
  }

  async submitUser(user: User) {
    await this.fillIfPresent(this.firstName, user.firstName);
    await this.fillIfPresent(this.lastName, user.lastName);
    await this.fillIfPresent(this.email, user.email);
    
    const genderInput = user.sex === 'male' ? this.maleInput : this.femaleInput;
    await genderInput.click();
    
    await this.fillIfPresent(this.mobileNumber, user.mobileNumber);
    
    if (user.subjects?.length) {
      await this.fillSubjects(user.subjects);
    }

    const hobbies = [this.hobbiesSport, this.hobbiesReading, this.hobbiesMusic];
    const randomHobbies = hobbies.sort(() => Math.random() - 0.5).slice(0, Math.floor(Math.random() * hobbies.length) + 1);
    for (const hobby of randomHobbies) {
      await hobby.click();
    }
    
    await this.fillIfPresent(this.currentAddress, user.currentAddress);
    await this.chooseDateOfBirth(user.dateOfBirth);
    
    const filePath = path.join(__dirname, '../../data/uploads/sampleFile.jpeg');
    await this.uploadFile(filePath);
    await this.submitButton.click();
  }

}
