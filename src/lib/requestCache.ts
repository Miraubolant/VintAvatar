interface CacheEntry<T> {
  data: T;
  timestamp: number;
  promise?: Promise<T>;
}

class RequestCache {
  private cache = new Map<string, CacheEntry<any>>();
  private defaultTtl = 30000; // 30 seconds

  async get<T>(
    key: string,
    fetcher: () => Promise<T>,
    ttl: number = this.defaultTtl
  ): Promise<T> {
    const now = Date.now();
    const cached = this.cache.get(key);

    // Return cached data if still valid
    if (cached && now - cached.timestamp < ttl) {
      return cached.data;
    }

    // Return ongoing promise if exists
    if (cached?.promise) {
      return cached.promise;
    }

    // Create new request
    const promise = fetcher();

    // Store promise immediately to prevent duplicate requests
    this.cache.set(key, {
      data: null,
      timestamp: now,
      promise
    });

    try {
      const data = await promise;

      // Store successful result
      this.cache.set(key, {
        data,
        timestamp: now
      });

      return data;
    } catch (error) {
      // Remove failed request from cache
      this.cache.delete(key);
      throw error;
    }
  }

  clear(key?: string) {
    if (key) {
      this.cache.delete(key);
    } else {
      this.cache.clear();
    }
  }

  // Clean expired entries
  cleanup() {
    const now = Date.now();
    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp > this.defaultTtl * 2) {
        this.cache.delete(key);
      }
    }
  }
}

export const requestCache = new RequestCache();

// Auto cleanup every 5 minutes
setInterval(() => {
  requestCache.cleanup();
}, 5 * 60 * 1000);