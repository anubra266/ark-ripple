import { screen } from '../../../test-utils';
import { render } from '../../../test-utils';
import { ComponentUnderTest } from './basic.ripple';

describe('Swap', () => {
  describe('default state (swap=false)', () => {
    it('should show the off indicator', () => {
      render(ComponentUnderTest, {});
      expect(screen.getByText('Off')).toBeVisible();
    });

    it('should hide the on indicator', () => {
      render(ComponentUnderTest, {});
      expect(screen.getByText('On')).not.toBeVisible();
    });

    it('should set data-swap to "off" on root', () => {
      const { container } = render(ComponentUnderTest, {});
      expect(container.querySelector('[data-swap]')).toHaveAttribute('data-swap', 'off');
    });
  });

  describe('swap=true state', () => {
    it('should show the on indicator', () => {
      render(ComponentUnderTest, { swap: true });
      expect(screen.getByText('On')).toBeVisible();
    });

    it('should hide the off indicator', () => {
      render(ComponentUnderTest, { swap: true });
      expect(screen.getByText('Off')).not.toBeVisible();
    });

    it('should set data-swap to "on" on root', () => {
      const { container } = render(ComponentUnderTest, { swap: true });
      expect(container.querySelector('[data-swap]')).toHaveAttribute('data-swap', 'on');
    });
  });

  describe('lazyMount', () => {
    it('should not mount the on indicator initially when swap=false', () => {
      render(ComponentUnderTest, { lazyMount: true });
      expect(screen.queryByText('On')).not.toBeInTheDocument();
    });

    it('should mount the on indicator when swap=true', () => {
      render(ComponentUnderTest, { lazyMount: true, swap: true });
      expect(screen.getByText('On')).toBeVisible();
    });
  });

  describe('unmountOnExit', () => {
    it('should not mount the on indicator when swap=false with lazyMount', () => {
      render(ComponentUnderTest, { unmountOnExit: true, lazyMount: true });
      expect(screen.queryByText('On')).not.toBeInTheDocument();
    });

    it('should not mount the off indicator when swap=true with lazyMount', () => {
      render(ComponentUnderTest, { unmountOnExit: true, lazyMount: true, swap: true });
      expect(screen.queryByText('Off')).not.toBeInTheDocument();
    });
  });
});
