import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Next.jsアプリへのパスを指定
  dir: './',
});

// Jest設定
const config = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};

// createJestConfigを使用してNext.jsの設定を組み込む
export default createJestConfig(config); 