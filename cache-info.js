import {cacheVersion, cacheHost}
from "./app-info.js";
//---------------------------------
function postListUrl()
{
	return cacheHost + "posts";
}
function postUrl(postId)
{
	return postListUrl() + "/" + postId;
}
const Url = Object.freeze({
    postList : postListUrl,
    post : postUrl
});
async function getCache()
{
	return await caches.open(cacheVersion);
}
export {Url, getCache};