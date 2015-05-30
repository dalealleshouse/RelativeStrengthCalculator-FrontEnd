var DataTransformer = DataTransformer || {};

(function (dt) {
    dt.transform = function(data) {
        var circleData = [];

        var counter = 1;
        var previous = 0;
        data.forEach(function (o) {
            var adjustedScore = o.result.Score / 10;
            previous = previous + adjustedScore;

            circleData.push({
                "x_axis": counter * 10 + previous,
                "y_axis": counter * 10 + previous,
                "radius": adjustedScore,
                "color": "green"
            });

            counter++;
        });

        return circleData;
    };
})(DataTransformer);