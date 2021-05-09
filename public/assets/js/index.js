$(document).ready(() => {
    TLN.append_line_numbers('code');
    readTextFile("assets/test2.txt");
});

var sessionId = null;
var consoleLogs = [];

const compile = () => {
    var code = $('#code').val();

    $.post('/compile', { code: code, sessionId: sessionId }, function (response) {
        sessionId = response.sessionId;
        consoleLogs.push('Compilado');

        $('#declarationTree').empty();
        for (let i = 0; i < response.declarationTree.length; i++) {
            console.log("Vuelta")
            $('#declarationTree').append(`<li> ${response.declarationTree[i].type}  ${response.declarationTree[i].name} </li>`);
        }

        $('#console').val(consoleLogs.join('\n'));

    }).fail(function (data) {
        const result = data.responseJSON.result
        consoleLogs = consoleLogs.concat(result.logs);
        $('#console').val(consoleLogs.join('\n'));
    });
}

const clearConsole = () => {
    consoleLogs = [];
    $('#console').val('');
}

function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                $('#code').val(allText);
            }
        }
    }
    rawFile.send(null);
}
