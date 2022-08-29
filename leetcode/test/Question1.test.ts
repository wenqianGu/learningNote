import twoSum from "../src/Question1";

describe("Two sum", () => {
  it("Given a list When target is 9 Then return matched result", () => {
    // arrange
    const nums = [2, 7, 11, 15]
    const target = 9

    // act
    const output = twoSum(nums, target)

    // assert
    expect(output).toMatchObject([0, 1])
  });
});

