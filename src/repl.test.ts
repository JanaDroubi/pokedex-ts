import { describe, expect, test } from "vitest";
import { cleanInput } from "./utils.js";   // ← or wherever you put it

describe.each([
  {
    input: "  hello  world  ",
    expected: ["hello", "world"],
  },
  {
    input: "Charmander Bulbasaur PIKACHU",
    expected: ["charmander", "bulbasaur", "pikachu"],
  },
  {
    input: "   ",
    expected: [],
  },
  {
    input: "pikachu",
    expected: ["pikachu"],
  },
  {
    input: "  squirtle   charizard     ",
    expected: ["squirtle", "charizard"],
  },
])("cleanInput($input)", ({ input, expected }) => {
  test(`returns ${expected}`, () => {
    const actual = cleanInput(input);

    expect(actual).toHaveLength(expected.length);

    for (const i in expected) {
      expect(actual[i]).toBe(expected[i]);
    }
  });
});
