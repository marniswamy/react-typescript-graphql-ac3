import { formatDateHelper } from "./dateHelper";

describe("formatDateHelper", () => {
  it("should return the valid formated date default", () => {
    const mockDate = "2022-01-14T02:50:05Z";
    const expected = formatDateHelper(mockDate);
    const result = "Jan 14th, 2022";
    expect(expected).toEqual(result);
  });

  it("should return the valid formated date", () => {
    const mockDate = "2022-01-15T02:50:05Z";
    const expected = formatDateHelper(mockDate);
    const result = "Jan 15th, 2022";
    expect(expected).toEqual(result);
  });
});
