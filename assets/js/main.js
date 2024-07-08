$(document).ready(function () {
	$(".select-2").select2();
	if ($("body").find("#lines").length) {
		lines.getAll();
		$('#date').val(new Date().toDateInputValue());
	}
    $('#searchHoraryLine').on('click', function(){
        lines.findHorary()
    })
});

Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});
function checkPassedTime(hor) {
    const now = new Date().getTime()
    const time = new Date().setHours(hor.split(':')[0], hor.split(':')[1])
    return time < now
}