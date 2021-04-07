$(document).ready(() => {
    TLN.append_line_numbers('code');
    readTextFile("assets/test.txt")
    
});

const Compile = () => {
    var code = $('#code').val();
    $.post('/compile',{code:code},function (response) {
        const result = response.result;
        const log = result.logs.join('\n');
        if(response.success){
            $('#console').val("Compilado");
            $('#tree').val(result.tree);
        }else{
            $('#console').val(log);
        }
    });
}

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                $('#code').val(allText);
            }
        }
    }
    rawFile.send(null);
}
