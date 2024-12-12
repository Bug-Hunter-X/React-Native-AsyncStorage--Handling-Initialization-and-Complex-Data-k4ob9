This solution addresses both initialization and nested data issues with AsyncStorage. It uses a wrapper to ensure AsyncStorage is ready and employs JSON.stringify/parse for safe data handling.  Error handling is added for robustness.

```javascript
// bugSolution.js
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error('Error storing data:', e);
  }
};

export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Error retrieving data:', e);
  }
};

export const isAsyncStorageReady = async () => {
    try {
        await AsyncStorage.getItem('@test');
        return true; // AsyncStorage is initialized
    } catch (error) {
        return false; // AsyncStorage is not ready
    }
};
```

Example Usage:
```javascript
import { storeData, getData, isAsyncStorageReady } from './bugSolution';

const complexData = {
  name: 'John Doe',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown'
  },
  hobbies: ['reading', 'hiking']
};

const test = async () => {
    const isReady = await isAsyncStorageReady();
    if (isReady) {
        await storeData('complexData', complexData);
        const retrievedData = await getData('complexData');
        console.log('Retrieved data:', retrievedData);
    } else {
        console.warn('AsyncStorage not ready yet');
    }
}

test();
```