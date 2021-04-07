$(document).ready(() => {
    TLN.append_line_numbers('code');
});

const Compile = () => {
    var code = $('#code').val();
    $.post('/compile',{code:code},function (response) {
        const result = response.result;
        const log = result.logs.join('\n');
        if(response.success){
            $('#console').val(log);
            $('#tree').val(result.tree);
        }else{
            $('#console').val(log);
        }
    });
}

