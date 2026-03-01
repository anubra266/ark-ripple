import { Context } from 'ripple';
import type { ChannelProps } from '@zag-js/color-picker';

export const ColorPickerChannelPropsContext = new Context<ChannelProps>();

export const useColorPickerChannelPropsContext = (): ChannelProps =>
	ColorPickerChannelPropsContext.get();
