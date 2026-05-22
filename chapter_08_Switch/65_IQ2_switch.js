let testscore = 85;
switch (true) {
    case testscore >= 95:
        console.log("Outstanding - Top performer");
        break;
    case testscore >= 85:
        console.log("Excellent - Above expectations");
        break;
    case testscore >= 70:
        console.log("Good - Meets Expectations");
        break;
    case testscore >= 50:
        console.log("Needs improvement");
    default:
        console.log("Unsatisfactory - Needs Training");
}