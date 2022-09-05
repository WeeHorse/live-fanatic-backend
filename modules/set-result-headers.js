
module.exports = function setResultHeaders(res, data){
  console.log(data.length)
  let count = data.length? data.length : (Object.keys(data).length > 0 ? 1 : 0)
  res.set('pragma', 'no-cache')
  res.set('x-total-count', count)
  res.set('Content-Range', 'posts 0-' + count + '/' + count)
  res.set('Content-Type', 'application/json');
}