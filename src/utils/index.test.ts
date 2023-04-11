import { describe, expect, it } from "vitest";

import { isProd } from "./index";

describe("isProd", () => {
  it("should be return true when Production", () => {
    const result = isProd("production");
    expect(result).toBe(true);
  });

  it("should not be return true when Development", () => {
    const result = isProd("development");
    expect(result).not.toBe(true);
  });

  it("should not be return true when Test", () => {
    const result = isProd("test");
    expect(result).not.toBe(true);
  });
});
