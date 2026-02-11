import { Cache } from "./pokecache.js";
import { test, expect } from "vitest";

test.concurrent.each([
  { key: "url1", val: { data: "test1" }, interval: 500 },
  { key: "url2", val: { data: "test2" }, interval: 1000 },
])("caches and expires after $interval ms", async ({ key, val, interval }) => {
  const cache = new Cache(interval);

  cache.add(key, val);
  expect(cache.get(key)).toEqual(val);

  // انتظر أكتر من الـ interval
  await new Promise((r) => setTimeout(r, interval + 100));

  expect(cache.get(key)).toBe(undefined);

  cache.stopReapLoop();
});
