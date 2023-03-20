//cache info
const cacheVersion = "version-2-0";

//
const blogId = "94494281881816115";
const apiKey = "AIzaSyBhdX3WKvxjEw3phjHPCH3lefkuzoDXgJc";
const blogUrlPrefix = "https://www.googleapis.com/blogger/v3/blogs/";
const blogUrl = blogUrlPrefix + blogId + "/";
//console.log(blogUrl);
const postListFields = "items(id,title),etag";
const postFields = "id,title,content,etag";
const blogInfo = Object.freeze({
	blogId,
	apiKey,
	blogUrl,
	postListFields,
	postFields
});
//cache host name
const cacheHost = "https://www.phamvankhoa-pkmm.com";

export {
	cacheVersion,
	cacheHost,
	blogInfo
};