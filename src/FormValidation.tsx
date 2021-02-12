export class FormValidation {
  private static numericField = (inputValue: string) => {
    return /^[0-9]*$/.test(inputValue);
  };

  private static alphabetField = (inputValue: string) => {
    return /^[a-zA-Z ]*$/.test(inputValue);
  };

  public static validCvv = (cvv: number) => {
    const strCvv = String(cvv);
    return FormValidation.numericField(strCvv);
  };

  public static validCardNumber = (cardNumber: number) => {
    const strCardNumber = String(cardNumber);
    return (
      FormValidation.numericField(strCardNumber) && strCardNumber.length == 16
    );
  };

  public static validName = (name: string) => {
    return FormValidation.alphabetField(name) && name.length > 0;
  };

  public static validDate = (date: string) => {
    const parsedDate = date.split('/');
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = parseInt(
      currentDate.getFullYear().toString().substr(-2)
    );
    if (parseInt(parsedDate[1]) > currentYear) {
      return true;
    } else if (
      parseInt(parsedDate[1]) == currentYear &&
      parseInt(parsedDate[0]) >= currentMonth
    ) {
      return true;
    }
    return false;
  };

  public static validate(
    fullName: string,
    cardCVV: number,
    cardNumber: number,
    expDate: string
  ) {
    return (
      this.validName(fullName) &&
      this.validCvv(cardCVV) &&
      this.validCardNumber(cardNumber) &&
      this.validDate(expDate)
    );
  }
}
