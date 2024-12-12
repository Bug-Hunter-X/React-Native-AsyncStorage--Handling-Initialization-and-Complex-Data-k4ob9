# React Native AsyncStorage: Handling Initialization and Complex Data

This repository demonstrates common issues and solutions related to using AsyncStorage in React Native, specifically focusing on initialization problems and handling nested data structures.

## Issues Addressed:

* **AsyncStorage Initialization:** The 'undefined is not an object' error when accessing AsyncStorage before it's ready.
* **Nested Data Handling:**  Challenges in storing and retrieving complex JSON objects (objects with nested arrays or other objects).  Improper serialization/deserialization leading to data corruption.

## Solutions:

* **Initialization:**  The solution employs a simple but effective method for ensuring AsyncStorage is initialized before accessing it.  This avoids the common initialization error.
* **Nested Data:** The solution demonstrates proper techniques for serializing and deserializing complex data structures to and from AsyncStorage, preventing data loss and corruption.  It uses `JSON.stringify` and `JSON.parse` carefully and illustrates safe practices.

## How to Run:

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `react-native run-android` or `react-native run-ios` (depending on your platform).