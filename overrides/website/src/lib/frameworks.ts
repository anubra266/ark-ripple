/** biome-ignore-all lint/suspicious/noExplicitAny: 🚀 */
import { cookies } from 'next/headers';

export type Framework = any;
export const frameworks = ['react', 'vue', 'svelte', 'solid', 'ripple'] as any;

export const getFramework = async (): Promise<Framework> => {
	const cookieStore = await cookies();
	const framework = cookieStore.get('framework')?.value ?? 'ripple';

	return framework as Framework;
};
