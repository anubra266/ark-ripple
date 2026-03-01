import user from '@testing-library/user-event';
import { render, screen, waitFor } from '../../../test-utils';
import {
	BasicSelectionTest,
	MultipleSelectionTest,
	RangeSelectionTest,
} from './list-selection.ripple';
import { FilteredListCollectionTest, ListCollectionTest } from './list-collection.ripple';

describe('useListSelection', () => {
	it('should select an item on click', async () => {
		render(BasicSelectionTest);

		await user.click(screen.getByTestId('react'));
		await waitFor(() => expect(screen.getByTestId('selected')).toHaveTextContent('react'));
	});

	it('should deselect when selecting same item in single mode', async () => {
		render(BasicSelectionTest);

		await user.click(screen.getByTestId('react'));
		await user.click(screen.getByTestId('react'));
		await waitFor(() => expect(screen.getByTestId('selected')).toHaveTextContent(''));
	});

	it('should replace selection when clicking different item in single mode', async () => {
		render(BasicSelectionTest);

		await user.click(screen.getByTestId('react'));
		await user.click(screen.getByTestId('vue'));
		await waitFor(() => {
			expect(screen.getByTestId('selected')).toHaveTextContent('vue');
			expect(screen.getByTestId('selected')).not.toHaveTextContent('react');
		});
	});

	it('should mark item as selected', async () => {
		render(BasicSelectionTest);

		await user.click(screen.getByTestId('react'));
		await waitFor(() => expect(screen.getByTestId('react')).toHaveAttribute('data-selected'));
	});
});

describe('useListSelection / Multiple', () => {
	it('should select multiple items', async () => {
		render(MultipleSelectionTest);

		await user.click(screen.getByTestId('react'));
		await user.click(screen.getByTestId('vue'));
		await waitFor(() => expect(screen.getByTestId('count')).toHaveTextContent('2'));
	});

	it('should select all items', async () => {
		render(MultipleSelectionTest);

		await user.click(screen.getByTestId('select-all'));
		await waitFor(() => expect(screen.getByTestId('count')).toHaveTextContent('3'));
	});

	it('should clear selection', async () => {
		render(MultipleSelectionTest);

		await user.click(screen.getByTestId('react'));
		await user.click(screen.getByTestId('vue'));
		await user.click(screen.getByTestId('clear'));
		await waitFor(() => expect(screen.getByTestId('selected')).toHaveTextContent(''));
	});

	it('should keep other items selected when deselecting one', async () => {
		render(MultipleSelectionTest);

		await user.click(screen.getByTestId('react'));
		await user.click(screen.getByTestId('vue'));
		await user.click(screen.getByTestId('react'));
		await waitFor(() => {
			expect(screen.getByTestId('selected')).not.toHaveTextContent('react');
			expect(screen.getByTestId('selected')).toHaveTextContent('vue');
		});
	});
});

describe('useListCollection', () => {
	it('should render initial items', () => {
		render(ListCollectionTest);
		const items = screen.getAllByTestId('item');
		expect(items).toHaveLength(3);
		expect(items[0]).toHaveTextContent('React');
		expect(items[1]).toHaveTextContent('Solid');
		expect(items[2]).toHaveTextContent('Vue');
	});

	it('should clear all items', async () => {
		render(ListCollectionTest);

		await user.click(screen.getByTestId('clear'));
		await waitFor(() => expect(screen.queryAllByTestId('item')).toHaveLength(0));
	});

	it('should reset to initial items', async () => {
		render(ListCollectionTest);

		await user.click(screen.getByTestId('clear'));
		await user.click(screen.getByTestId('reset'));
		await waitFor(() => expect(screen.getAllByTestId('item')).toHaveLength(3));
	});

	it('should append an item', async () => {
		render(ListCollectionTest);

		await user.click(screen.getByTestId('append'));
		await waitFor(() => {
			const items = screen.getAllByTestId('item');
			expect(items).toHaveLength(4);
			expect(items[3]).toHaveTextContent('Svelte');
		});
	});
});

describe('useListCollection / Filter', () => {
	it('should filter items by text', async () => {
		render(FilteredListCollectionTest);

		await user.type(screen.getByTestId('search'), 're');
		await waitFor(() => {
			const items = screen.getAllByTestId('item');
			expect(items).toHaveLength(1);
			expect(items[0]).toHaveTextContent('React');
		});
	});

	it('should show all items when filter is cleared', async () => {
		render(FilteredListCollectionTest);

		await user.type(screen.getByTestId('search'), 're');
		await user.clear(screen.getByTestId('search'));
		await waitFor(() => expect(screen.getAllByTestId('item')).toHaveLength(4));
	});
});
