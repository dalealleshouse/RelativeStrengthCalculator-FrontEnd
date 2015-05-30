var ResultsNotifier = ResultsNotifier || {};
(function(resultsNotifier, calculator) {
    ResultsNotifier.Notifier = function(callback) {
        var results = [];

        this.addScore = function(params) {
            calculator.score(params, function(response) {
                results.push({ request: params, result: response });
                callback(results);
            });
        }
    }

})(ResultsNotifier, Calculator);