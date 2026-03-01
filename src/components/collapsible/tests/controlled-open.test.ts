import user from '@testing-library/user-event';
import { render, screen, waitFor } from '../../../test-utils';
import { ControlledOpenTest } from './controlled-open.ripple';

describe('Collapsible — controlled open from parent', () => {
  it('should update data-state when parent open signal changes', async () => {
    render(ControlledOpenTest);

    const content = screen.getByTestId('content');
    const toggle = screen.getByTestId('toggle');

    // Initially closed
    expect(screen.getByTestId('open-state').textContent).toBe('false');
    expect(content).not.toBeVisible();

    // Parent flips open=true
    await user.click(toggle);

    expect(screen.getByTestId('open-state').textContent).toBe('true');
    await waitFor(() => {
      expect(content).toBeVisible();
    });
  });

  it('should go back to closed when parent open signal returns to false', async () => {
    render(ControlledOpenTest);

    const toggle = screen.getByTestId('toggle');
    const content = screen.getByTestId('content');

    await user.click(toggle); // open → true
    await waitFor(() => expect(content).toBeVisible());

    await user.click(toggle); // open → false
    await waitFor(() => expect(content).not.toBeVisible());
  });
});
