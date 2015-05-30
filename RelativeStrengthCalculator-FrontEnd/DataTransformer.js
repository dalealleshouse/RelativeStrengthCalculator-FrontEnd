var DataTransformer = DataTransformer || {};

(function (dt) {
    dt.transform = function(data) {
        var circleData = [];

        var counter = 1;
        var previous = 0;
        data = getRelativePlacement(data);
        data.forEach(function (o) {
            var adjustedScore = o.result.Score / 10;
            previous = previous + adjustedScore;

            circleData.push({
                "x_axis": counter * 10 + previous,
                "y_axis": counter * 10 + previous,
                "radius": adjustedScore,
                "color": o.color
            });

            counter++;
        });

        return circleData;
    };

    function getColor(num) {
        if (num <= 1)
            return "green";
        if (num <= 2)
            return "yellow";

        return "red";
    }

    function getRelativePlacement(scores) {
        scores.sort(function(a, b) {
            if (a.result.Score > b.result.Score) {
                return -1;
            }
            if (a.result.Score < b.result.Score) {
                return 1;
            }
            // a must be equal to b
            return 0;
        });

        var totalNumber = scores.length;
        for (var i = 0; i < scores.length; i++) {
            scores[i].color = getColor(i);
        }

        return scores;
    }
})(DataTransformer);