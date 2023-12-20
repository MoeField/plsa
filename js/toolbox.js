
function jAbsoluteValueOfTheSummationOfExpRoot(X){
    var K = X.length;
    var Y = 0;
    var exp;
    for(var n = 0; n < K; n++){
        if(n >= 0.25 * K && n <= 0.75 * K){ exp = 0.5;}
        else{ exp = 0.75;}
        Y = Y + Math.pow(X[n], exp);
    }
    return Math.abs(Y / K);
}

function jAbsoluteValueOfTheSummationOfSquareRoot(X){
  var temp = X.map(Math.sqrt(i));
  return Math.abs(temp);
}

function jAutoRegressiveModel(X, opts){
    var order = 4;
    if(opts.order){order = opts.order;}
    var Y = arburg(X, order);
    return Y.slice(1, order + 1);
}

function jAverageAmplitudeChange(X){
    var K = X.length;
    var Y = 0;
    for(var n = 1; n < K; n++){
        Y = Y + Math.abs(X[n] - X[n - 1]);
    }
    return Y / (K - 1);
}

function jAverageEnergy(X){
    var K = X.length;
    var Y = 0;
    for(var n = 0; n < K; n++){
        Y = Y + Math.pow(X[n], 2);
    }
    return Y / K;
}

function jAverageMagnitudeDifferenceFunction(X){
    var K = X.length;
    var Y = 0;
    for(var n = 1; n < K; n++){
        Y = Y + Math.abs(X[n] - X[n - 1]);
    }
    return Y / (K - 1);
}

function jAverageMagnitudeDifference(X){
    var K = X.length;
    var Y = 0;
    for(var n = 1; n < K; n++){
        Y = Y + Math.abs(X[n] - X[n - 1]);
    }
    return Y / (K - 1);
}

function jAverageMagnitude(X){
    var K = X.length;
    var Y = 0;
    for(var n = 0; n < K; n++){
        Y = Y + Math.abs(X[n]);
    }
    return Y / K;
}

function jCardinality(X, opts){//可能不对劲，慎用
    var thres = 0.01;
    if(opts.thres){thres = opts.thres;}
    var N = X.length;
    var Y = X.sort();
    var Z = [];
    for(var n = 0; n < N - 1; n++){
        Z[n] = Math.abs(Y[n] - Y[n + 1]) > thres;
    }
    return Z.reduce(function(a, b){return a + b;});
}

function jStandardDeviation(X){
    var N = X.length;
    var mu = jMean(X);
    var Y = 0;
    for(var n = 0; n < N; n++){
        Y = Y + Math.pow(X[n] - mu, 2);
    }
    return Math.sqrt((1 / (N - 1)) * Y);
}

function jCoefficientOfVariation(X){
    return jStandardDeviation(X) / jMean(X);
}

function jDifferenceAbsoluteMeanValue(X){
    var N = X.length;
    var Y = 0;
    for(var i = 0; i < N - 1; i++){
        Y = Y + Math.abs(X[i + 1] - X[i]);
    }
    return Y / (N - 1);
}

function jDifferenceAbsoluteStandardDeviationValue(X){
    var N = X.length;
    var Y = 0;
    for(var i = 0; i < N - 1; i++){
        Y = Y + Math.pow(X[i + 1] - X[i], 2);
    }
    return Math.sqrt(Y / (N - 1));
}

function jDifferenceVarianceValue(X){
    var N = X.length;
    var Y = 0;
    for(var i = 0; i < N - 1; i++){
        Y = Y + Math.pow(X[i + 1] - X[i], 2);
    }
    return Y / (N - 2);
}

function jEnhancedMeanAbsoluteValue(X){
    var L = X.length;
    var Y = 0;
    for(var i = 0; i < L; i++){
        var p;
        if(i >= 0.2 * L && i <= 0.8 * L){p = 0.75;}
        else{ p = 0.5;}
        Y = Y + Math.pow(Math.abs(X[i]), p);
    }
    return Y / L;
}

function jEnhancedWaveLength(X){
    var L = X.length;
    var Y = 0;
    for(var i = 1; i < L; i++){
        var p;
        if(i >= 0.2 * L && i <= 0.8 * L){ p = 0.75;}
        else{ p = 0.5;}
        Y = Y + Math.pow(Math.abs(X[i] - X[i - 1]), p);
    }
    return Y;
}
/*
function IEMG = jIntegratedEMG(X, ~)
IEMG = sum(abs(X));
end
*/
function jIntegratedEMG(X){
    absX=X.map(Math.abs(i));
    return Math.sum(...absX);
}

function jInterquartileRange(X){//可能不对劲，慎用
    var N = X.length;
    var Y = X.sort();
    return Y[Math.floor(0.75 * N)] - Y[Math.floor(0.25 * N)];
}

/*
function jKurtosis(X){//可能不对劲，慎用
    var N = X.length;
    var mu = jMean(X);
    var Y = 0;
    for(var n = 0; n < N; n++){
        Y = Y + Math.pow(X[n] - mu, 4);
    }
    return (1 / N) * Y / Math.pow(jStandardDeviation(X), 4);
}*/

function jLogCoefficientOfVariation(X){
    var mu = jMean(X);
    var sd = jStandardDeviation(X);
    return Math.log(sd / mu);
}

function jLogDetector(X){
    var N = X.length;
    var Y = 0;
    for(var n = 0; n < N; n++){
        Y = Y + Math.log(Math.abs(X[n]));
    }
    return Y / N;
}

function jLogDifferenceAbsoluteMeanValue(X){
    var N = X.length;
    var Y = 0;
    for(var i = 0; i < N - 1; i++){
        Y = Y + Math.log(Math.abs(X[i + 1] - X[i]));
    }
    return Y / (N - 1);
}

function jLogDifferenceAbsoluteStandardDeviationValue(X){
    var N = X.length;
    var Y = 0;
    for(var i = 0; i < N - 1; i++){
        Y = Y + Math.pow(Math.log(Math.abs(X[i + 1] - X[i])), 2);
    }
    return Math.sqrt(Y / (N - 1));
}

function jLogTeagerKaiserEnergyOperator(X){
    var N = X.length;
    var Y = 0;
    for(var n = 1; n < N - 1; n++){
        Y = Y + Math.pow(X[n], 2) - X[n - 1] * X[n + 1];
    }
    return Math.log(Y);
}

function jMaximumFractalLength(X){
    var N = X.length;
    var Y = 0;
    for(var n = 1; n < N - 1; n++){
        Y = Y + Math.abs(X[n + 1] - 2 * X[n] + X[n - 1]);
    }
    return Y;
}

function jMeanAbsoluteDeviation(X){
    var N = X.length;
    var mu = jMean(X);
    var Y = 0;
    for(var n = 0; n < N; n++){
        Y = Y + Math.abs(X[n] - mu);
    }
    return Y / N;
}

function jMeanAbsoluteValue(X){
    var N = X.length;
    var Y = 0;
    for(var n = 0; n < N; n++){
        Y = Y + Math.abs(X[n]);
    }
    return Y / N;
}

function jMean(X){
    var N = X.length;
    var Y = 0;
    for(var n = 0; n < N; n++){
        Y = Y + X[n];
    }
    return Y / N;
}

function jMeanValueOfTheSquareRoot(X){
    var N = X.length;
    var Y = 0;
    for(var n = 0; n < N; n++){
        Y = Y + Math.sqrt(Math.abs(X[n]));
    }
    return Y / N;
}

function jModifiedMeanAbsoluteValue(X){
    var N = X.length;
    var Y = 0;
    for(var n = 0; n < N; n++){
        Y = Y + Math.abs(X[n]);
    }
    return Y / (N - 1);
}

function jModifiedMeanAbsoluteValue2(X){
    var N = X.length;
    var Y = 0;
    for(var n = 0; n < N; n++){
        Y = Y + Math.abs(X[n]);
    }
    return Y / N;
}

function jMyopulsePercentageRate(X){
    var N = X.length;
    var Y = 0;
    for(var n = 0; n < N; n++){
        if(X[n] > 0.01){Y = Y + 1;}
    }
    return Y / N;
}

function jNewZeroCrossing(X){
    var N = X.length;
    var Y = 0;
    for(var n = 1; n < N; n++){
        if(X[n] * X[n - 1] < 0){Y = Y + 1;}
    }
    return Y;
}

function jRootMeanSquare(X){
    var N = X.length;
    var Y = 0;
    for(var n = 0; n < N; n++){
        Y = Y + Math.pow(X[n], 2);
    }
    return Math.sqrt(Y / N);
}

function jSimpleSquareIntegral(X){
    var N = X.length;
    var Y = 0;
    for(var n = 0; n < N; n++){
        Y = Y + Math.pow(X[n], 2);
    }
    return Y;
}

function jSlopeSignChange(X){
    var N = X.length;
    var Y = 0;
    for(var n = 2; n < N; n++){
        if((X[n] - X[n - 1]) * (X[n - 1] - X[n - 2]) < 0){Y = Y + 1;}
    }
    return Y;
}

function jSkewness(X){//可能不对劲，慎用
    var N = X.length;
    var mu = jMean(X);
    var Y = 0;
    for(var n = 0; n < N; n++){
        Y = Y + Math.pow(X[n] - mu, 3);
    }
    return (1 / N) * Y / Math.pow(jStandardDeviation(X), 3);
}

function jSpectralEntropy(X){
    var N = X.length;
    var Y = 0;
    for(var n = 0; n < N; n++){
        Y = Y + X[n] * Math.log(X[n]);
    }
    return -Y;
}

function jSpectralMoment(X){
    var N = X.length;
    var Y = 0;
    for(var n = 0; n < N; n++){
        Y = Y + Math.pow(X[n], 2);
    }
    return Y;
}

function jStandardDeviation(X){
    var N = X.length;
    var mu = jMean(X);
    var Y = 0;
    for(var n = 0; n < N; n++){
        Y = Y + Math.pow(X[n] - mu, 2);
    }
    return Math.sqrt((1 / (N - 1)) * Y);
}

function jTemporalMoment(X){
    var N = X.length;
    var Y = 0;
    for(var n = 0; n < N; n++){
        Y = Y + Math.pow(n, 2) * X[n];
    }
    return Y;
}

function jVarianceOfEMG(X){
    var N = X.length;
    var Y = 0;
    for(var n = 0; n < N; n++){
        Y = Y + Math.pow(X[n], 2);
    }
    return Y / (N - 1);
}

function jVariance(X){
    var N = X.length;
    var mu = jMean(X);
    var Y = 0;
    for(var n = 0; n < N; n++){
        Y = Y + Math.pow(X[n] - mu, 2);
    }
    return Y / (N - 1);
}

function jVOrder(X){
    var N = X.length;
    var Y = 0;
    for(var n = 1; n < N; n++){
        Y = Y + Math.abs(X[n] - X[n - 1]);
    }
    return Y;
}

function jWaveformLength(X){
    var N = X.length;
    var Y = 0;
    for(var n = 1; n < N; n++){
        Y = Y + Math.abs(X[n] - X[n - 1]);
    }
    return Y;
}

function jWillisonAmplitude(X){
    var N = X.length;
    var Y = 0;
    for(var n = 1; n < N; n++){
        if(Math.abs(X[n] - X[n - 1]) > 0.01){Y = Y + 1;}
    }
    return Y;
}

function jZeroCrossing(X){
    var N = X.length;
    var Y = 0;
    for(var n = 1; n < N; n++){
        if(X[n] * X[n - 1] < 0){Y = Y + 1;}
    }
    return Y;
}
