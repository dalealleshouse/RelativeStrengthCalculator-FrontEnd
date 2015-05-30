var Calculator = Calculator || {};
(function(calculator) {

    calculator.score = function(params, callback) {
        var url = buildUrl(params);

        $.get(url, function(data) {
            callback(data);
        });
    };

    calculator.coefficent = function(params, callback) {
        delete params.weight;
        var url = buildUrl(params);

        $.get(url, function(data) {
            callback(data);
        });
    };

    function buildUrl(requestParams) {
        var url = "http://relativestrengthcalculatorapi.azurewebsites.net/relativeStrength/"
            + requestParams.algorithm
            + "/" + requestParams.weightUnit
            + "/" + requestParams.sex
            + "/" + requestParams.bodyWeight
            + "/";

        if (requestParams.weight) {
            url = url + requestParams.weight + "/";
        }

        return url;
    }
})(Calculator);