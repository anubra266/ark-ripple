import { track, get, set } from 'ripple';
import { onMount } from 'zag-ripple';

export function useAsync<T>(fn: (signal: AbortSignal | null) => Promise<T>) {
  let loading = track(false);
  let error = track<Error | null>(null);

  let controller: AbortController | null = null;
  const abort = () => {
    controller?.abort('useAsync');
  };

  const load = async () => {
    set(loading, true);
    set(error, null);

    abort();
    controller = new AbortController();

    try {
      const data = await fn(controller.signal);
      return data;
    } catch (err) {
      if (controller.signal.aborted || err === 'useAsync') return;
      set(error, err instanceof Error ? err : new Error(String(err)));
    } finally {
      set(loading, false);
    }
  };

  onMount(() => {
    void load();
    return () => {
      abort();
    };
  });

  return { loading, error, load };
}
