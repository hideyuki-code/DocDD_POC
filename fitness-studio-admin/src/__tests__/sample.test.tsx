import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('サンプルテスト', () => {
  it('真であれば成功する', () => {
    expect(true).toBe(true);
  });

  it('DOMテストの例', () => {
    render(<div data-testid="test-element">テスト</div>);
    expect(screen.getByTestId('test-element')).toHaveTextContent('テスト');
  });
}); 