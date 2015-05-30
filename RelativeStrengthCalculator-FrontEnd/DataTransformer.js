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
                "color": o.color,
                "name": o.request.name
            });

            counter++;
        });

        return circleData;
    };

    function getColor(num) {
        if (num < 1)
            return "red";
        if (num < 2)
            return "yellow";

        return "green";
    }

    function getRelativePlacement(scores) {
        var sorted = _.sortBy(scores, function(s) {
            return s.result.Score;
        });

        var third = sorted.length / 3;

        for (var i = 0; i < sorted.length; i++) {
            if (i < third) {
                sorted[i].color = "red";
            }
            else if (i < third * 2) {
                sorted[i].color = "yellow";
            } else {
                sorted[i].color = "green"
            }
        }

        return sorted;
    }
})(DataTransformer);