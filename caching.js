import {getCache as gcache, Url} from "./cache-info.js";

async function getCache(url, needJson)
{
    const cache = await gcache().match(url);
    if (cache === undefined) {
    	return undefined;
    }
    if (needJson) {
    	return await cache.json();
    }
    retur  await cache.text();
}
async function setCache(url, content)
{
	const cache = await gcache();
	await cache.put(url, new Response(content));
}
async function getPostList(needJson)
{
	return await  getCache(Url.postList(), needJson);
}
async function getPost(postId, needJson)
{
	return await getCache(Url.post(postId), needJson);
}
async function setPostList(content)
{
	await setCache(Url.postList(), new Response(content));
}
async function setPost(postId, content)
{
	await setCache(Url.post(postId), new Response(content));
}
const Caching = Object.freeze({
    getPostList,
    getPost,
    setPostList,
    setPost
});
export default Caching;
