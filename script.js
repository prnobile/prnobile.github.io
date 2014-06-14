$( document ).ready(function()
{
        var loadCastInterval = setInterval(function()
								{
										if (chrome.cast.isAvailable) 
										{
												console.log('Cast has loaded.');
												clearInterval(loadCastInterval);
												initializeCastApi();
										} 
										else 
										{
												console.log('Unavailable');
										}
								}, 1000);
});

function initializeCastApi() 
{
        var applicationID = chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID;
        var sessionRequest = new chrome.cast.SessionRequest(applicationID);
        var apiConfig = new chrome.cast.ApiConfig(sessionRequest,
                sessionListener,
                receiverListener);
        chrome.cast.initialize(apiConfig, onInitSuccess, onInitError);
};