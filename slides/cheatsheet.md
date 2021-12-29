
# Resumen de la API
```ts {1|2|4|5-10|11-23|14|15|16|17-21|22}
import { fireEvent, render, screen } from '@testing-library/react';
import { Input } from './input';

describe('Input Component', () => {
	it('should display its placeholder', async () => {
		const placeholder = 'Agregar tarjeta';
		render(<Input placeholder={placeholder} />);
		const inputFound = await screen.findByPlaceholderText(placeholder);
		expect(inputFound).toHaveAttribute('placeholder', placeholder);
	});

	it('should retrieve input text when type', async () => {
		const placeholder = 'Agregar tarjeta';
    const onChange = jest.fn();
		render(<Input placeholder={placeholder} onChange={onChange} />);
		const inputFound = await screen.findByPlaceholderText(placeholder);
		fireEvent.change(inputFound, {
			target: {
				value: 'Nueva tarjeta',
			},
		});
    expect(onChange).toHaveBeenCalledWith('Nueva tarjeta');
	});
});
```

