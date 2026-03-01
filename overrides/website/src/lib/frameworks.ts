import { cookies } from 'next/headers';

export type Framework = (typeof frameworks)[number];
export const frameworks = ['react', 'vue', 'svelte', 'solid', 'ripple'] as const;

export const getFramework = async (): Promise<Framework> => {
	const cookieStore = await cookies();
	const framework = cookieStore.get('framework')?.value ?? 'ripple';

	return framework as Framework;
};
