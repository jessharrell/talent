export default class BowlingScorer {
    score(scorecard) {

        let score = 0;
        scorecard.forEach((frame) => {
            score += frame.one;
        });
        return score;
    }
}
