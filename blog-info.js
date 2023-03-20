import {apiKey, blogUrl, postListFields, postFields}
from "./app-info.js";
//--------------------------------
function postListUrl()
{
	let url = blogUrl + "posts?key=" + apiKey;
	if (postListFields != undefined) {
		url += "&fields=" + postListFields;
	}
	return url;
}
function postUrl(postId)
{
	let url = blogUrl + "posts/" + postId;
    url += "?key=" + apiKey;
	if (postFields != undefined) {
		url += "&fields=" + postFields;
	}
	return url;
}
const Url = Object.freeze({
    postList : postListUrl,
    post : postUrl
});
export {Url};