exports.getMatchScore = () =>{
    let scores = data.reduce((acc, cur) => {
        // Check if the attempt matches the provided match data
        let attemptMatches = cur.attempt.some(attempt => 
            attempt.questionId === match.questionId && attempt.answerId === match.answerId
        );
    
        if (attemptMatches) {
            // If the userId already exists in the acc object, increment the score, otherwise set it to 1
            acc[cur.userId] = acc[cur.userId] ? acc[cur.userId] + 1 : 1;
        }
        
        return acc;
    }, {});

    return scores;
}