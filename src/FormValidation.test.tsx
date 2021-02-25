import { FormValidation } from './FormValidation';

test('Name with numbers is invalid', () => {
  expect(FormValidation.validName('Homer 5 Simpson')).toBeFalsy();
});

test('Name with only letters and space is valid', () => {
  expect(FormValidation.validName('Lisa Simpson')).toBeTruthy();
});

test('Card expiration date in the past is invalid', () => {
  expect(FormValidation.validDate('04/08')).toBeFalsy();
});

test('Card expiration date in the current month is valid', () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = parseInt(currentDate.getFullYear().toString().substr(-2));
  expect(
    FormValidation.validDate(currentMonth + '/' + currentYear)
  ).toBeTruthy();
});
