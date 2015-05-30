var DataTransformer = DataTransformer || {};

(function (dt) {
    dt.transform = function(data) {
        var circleData = [];

        var counter = 1;
        data.forEach(function (o) {
            circleData.push({
                "x_axis": counter * 10,
                "y_axis": counter * 10,
                "radius": o.result.Score,
                "color": "green"
            });

            counter++;
        });

        return circleData;
    };
})(DataTransformer);