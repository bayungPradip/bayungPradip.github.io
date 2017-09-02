var i=0;
function onclicked()
	{
			i++;
			if((i%2)==0)
				{
					document.getElementById('img1').src="resource/light-bulb-off-icon.png";
					document.getElementById('img2').src="resource/switch-off-icon.png";
					document.getElementById('body').style.backgroundColor="white";
					

				}
			else
				{
					document.getElementById("img1").src="resource/light-bulb-on-icon.png";
					document.getElementById('img2').src="resource/switch-on-icon.png";
					document.getElementById('body').style.backgroundColor="grey";

				}
	}
	
	