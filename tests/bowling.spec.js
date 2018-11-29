import BowlingScorer from "../BowlingScorer";

describe("Bowling Scorer", () => {
    it("Return zero when all gutterballs are rolled", () => {
        const scorer = new BowlingScorer();
        const scorecard = [{one: 0, two: 0},{one: 0, two: 0},{one: 0, two: 0},{one: 0, two: 0},{one: 0, two: 0},
                            {one: 0, two: 0},{one: 0, two: 0},{one: 0, two: 0},{one: 0, two: 0},{one: 0, two: 0}]
        expect(scorer.score(scorecard)).toEqual(0);
    });

    it("Return 10 when all first balls are one and seconds are gutterballs", () => {
        const scorer = new BowlingScorer();
        const scorecard = [{one: 1, two: 0},{one: 1, two: 0},{one: 1, two: 0},{one: 1, two: 0},{one: 1, two: 0},
                            {one: 1, two: 0},{one: 1, two: 0},{one: 1, two: 0},{one: 1, two: 0},{one: 1, two: 0}];
        expect(scorer.score(scorecard)).toEqual(10);
    });

    it("Return 9 when all first balls are one and seconds are gutterballs and tenth is gutters", () => {
        const scorer = new BowlingScorer();
        const scorecard = [{one: 1, two: 0},{one: 1, two: 0},{one: 1, two: 0},{one: 1, two: 0},{one: 1, two: 0},
            {one: 1, two: 0},{one: 1, two: 0},{one: 1, two: 0},{one: 1, two: 0},{one: 0, two: 0}];
        expect(scorer.score(scorecard)).toEqual(9);
    });

    
});

//
// const allEmployees = ["John", "Bob", "Joe"];
//
// const allEmployees2 = [
//     {name: "John", age: 25}
// ]