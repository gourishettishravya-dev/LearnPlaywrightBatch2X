let totalScore = 70
switch (true) {
    case (totalScore >= 95):
        console.log("Outstanding - Top Performer");
        break;
    case (totalScore >= 85):
        console.log("Excellent - Above Excepctations");
        break;
    case (totalScore >= 70):
        console.log("Good - Meets Excepctation");
        break;
    case (totalScore >= 50):
        console.log("Needs Improvement");
        break;
    default:
        console.log("Unsatisfactory - Requires Training");
}