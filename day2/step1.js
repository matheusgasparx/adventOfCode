const fs = require('fs');

function isSafe(report) {
    const levels = report.split(" ").map(Number);
    
    const differences = levels.slice(1).map((num, i) => num - levels[i]);

    const aliceCresce = differences.every(diff => diff >= 1 && diff <= 3);
    const sentaDescresce = differences.every(diff => diff <= -1 && diff >= -3);

    return aliceCresce || sentaDescresce;
}

function safeReports(reports) {
    return reports.filter(isSafe).length;
}

fs.readFile('priquito.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const reports = data.trim().split("\n");
    const safeCount = safeReports(reports);

    console.log(safeCount);
});