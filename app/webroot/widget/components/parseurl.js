
/**
 * @desc 解析url的get参数
 * @param [url] [string]
 * @return {} [object]
 * @author rgy
 */
var parseUrl = function(url) {
  var index = url.indexOf('?');
  if (index < 0) {
    return {};
  }
  var p = url.slice(index + 1);
  var json = {},
    rs = p.split('&');
  for (var i = 0, len = rs.length; i < len; i++) {
    var items = rs[i].split('=');
    json[items[0]] = items[1];
  }
  return json;
}

module.exports = parseUrl;
