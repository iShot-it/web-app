/**
 * Save an item to localStorage
 * @param key - The key to store the value under
 * @param value - The value to store (object or primitive)
 */
export const setItem = <T>(key: string, value: T): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error saving to localStorage: ${error}`);
    }
  };
  
  /**
   * Retrieve an item from localStorage
   * @param key - The key to retrieve the value from
   * @returns Parsed object or primitive value, or null if not found
   */
  export const getItem = <T>(key: string): T | null => {
    try {
      const data = localStorage.getItem(key);
      return data ? (JSON.parse(data) as T) : null;
    } catch (error) {
      console.error(`Error reading from localStorage: ${error}`);
      return null;
    }
  };
  
  /**
   * Remove an item from localStorage
   * @param key - The key to remove
   */
  export const removeItem = (key: string): void => {
    localStorage.removeItem(key);
  };
  
  /**
   * Clear all localStorage data
   */
  export const clearStorage = (): void => {
    localStorage.clear();
  };
  
  /**
   * Check if a key exists in localStorage
   * @param key - The key to check
   * @returns True if the key exists, false otherwise
   */
  export const exists = (key: string): boolean => {
    return localStorage.getItem(key) !== null;
  };
  