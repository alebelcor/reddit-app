// optional: configure or set up a testing framework before each test
// if you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// https://github.com/testing-library/jest-dom
// add jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';

afterEach(jest.clearAllMocks);
