
const full = document.querySelector("#LastModified");



const today = new Date();
const time = new Date();

full.innerHTML = `Last Modification: <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "short",
        timeStyle: "medium"
	}
).format(today)}</span>`;




