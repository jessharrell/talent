import Foo from "../Foo";

describe("FOO", () => {
    it("fails one test", () => {
	const foo = new Foo();
	expect(foo.getBar()).toEqual("Baz");
    });
});
