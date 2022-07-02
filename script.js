function getDownloadLink(){
	$('#videoSubmitButton').attr("disabled", true);
	$("#loadingSection").removeClass('d-none');
	$("#resultSection").addClass('d-none');
	$("#videoUrl").removeClass('is-invalid');
	
	const videoUrl = $('#videoUrl').val();
	
	$.post("api.php", {videoUrl: videoUrl})
	.done(function(data){
		try{
			const videoObj = JSON.parse(data);
			const targetVideo = videoObj['formats'].slice(-1)[0];
			const videoFormatString = targetVideo['format'].substr(targetVideo['format'].indexOf('-')+2);
			$("#videoThumbnail").attr('src', videoObj['thumbnail']);
			$("#videoTitle").text(videoObj['title']);
			$("#videoChannel").text(videoObj['channel']);
			$("#videoFormat").text(videoFormatString);
			$("#videoDownloadButton").attr('href', targetVideo['url']);
			$("#resultSection").removeClass('d-none');
		}
		catch(e){
			$("#videoUrl").addClass('is-invalid');
		}
		$("#loadingSection").addClass('d-none');
		$('#videoSubmitButton').attr("disabled", false);
	});
}