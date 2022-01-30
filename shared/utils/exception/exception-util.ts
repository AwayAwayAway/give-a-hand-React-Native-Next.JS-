export class ExceptionUtils {
  static setErrorMessage(error: string) {
    let errorMessage: string;

    switch (true) {
      case error.includes('401'):
        errorMessage = 'Bad email or password';
        break;
      case error.includes('400'):
        errorMessage = 'User already exist';
        break;
      default:
        errorMessage = 'Something went wrong'
    }

    return errorMessage
  }
}