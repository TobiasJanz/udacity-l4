// Import the necessary modules and functions
import { checkForName } from '../src/client/js/nameChecker';

describe('checkForName', () => {
  it('should return false for undefined or empty inputText', () => {
    expect(checkForName()).toBe(false);
    expect(checkForName('')).toBe(false);
  });

  it('should return true for valid inputText', () => {
    expect(checkForName('Picard')).toBe(true);
    expect(checkForName('Kirk')).toBe(true);
    expect(checkForName('Sisko')).toBe(true);
  });

  it('should call console.log with the correct message', () => {
    const consoleLogSpy = jest.spyOn(console, 'log');
    const inputText = 'Janeway';
    checkForName(inputText);
    expect(consoleLogSpy).toHaveBeenCalledWith('::: Running checkForName :::', inputText);
    consoleLogSpy.mockRestore();
  });

  it('should call alert with the correct message for matching names', () => {
    global.alert = jest.fn();
    checkForName('Picard');
    expect(global.alert).toHaveBeenCalledWith('Welcome, Captain!');
  });
});