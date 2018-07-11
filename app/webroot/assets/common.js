/**
 * @desc 序列号表单数据
 * @param [form] [string]
 * @return [object]
 * @author ranguangyu@zbj.com
 */
window.serializeForm = function(form) {
  var list = form.serializeArray();
  var data = {};
  $.each(list, function() {
    data[this.name] = this.value;
  });
  return data;
}

/**
 * @desc 判断对象是否为空
 * @param [object] [object]
 * @return [boolean]
 * @author ranguangyu@zbj.com
 */
window.isEmptyObject = function(object) {
  for (var key in obj) {
    return false;
  }
  return true;
}

/**
 * @desc 设置异步按钮
 * @param [object] [jquery object]
 * @author ranguangyu@zbj.com
 */
window.makeAsyncButton = function($node) {
  if (!$node.hasClass('icon-loading')) {
    $node.prop('disabled', true).append(' <i class="icon-loading"></i>');
  }
}

/**
 * @desc 恢复异步按钮
 * @param [object] [jquery object]
 * @author ranguangyu@zbj.com
 */
window.recoverAsyncButton = function($node) {
  $node.prop('disabled', false).find('.icon-loading').remove();
}

/**
 * @desc 转义符 -> 普通字符
 * @param [str] [string]
 * @return [string]
 * @author ranguangyu@zbj.com
 */
window.escape2Html = function(str) {
  var arrEntities = { 'lt': '<', 'gt': '>', 'nbsp': ' ', 'amp': '&', 'quot': '"', '#39': '\'' };
  return str.replace(/&(lt|gt|nbsp|amp|quot|#39);/ig, function(all, t) {
    return arrEntities[t];
  });
}

/**
 * @desc 普通字符 -> 转义符 
 * @param [sHtml] [string]
 * @return [string]
 * @author ranguangyu@zbj.com
 */
window.html2Escape = function(sHtml) {
  return sHtml.replace(/[<>&"]/g, function(c) {
    return { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c];
  });
}

/**
 * @desc 手机号码 脱敏处理
 * @param [mobile] [string]
 * @return [string]
 * @author ranguangyu@zbj.com
 */
window.mobileEnc = function(mobile) {
  return mobile.toString().replace(/^([0-9]{3})\.{5}([0-9]{3})$/, '$1*****$2');
}

/**
 * @desc cookie 设置
 * @param [key] [string]
 * @param [value] [string]
 * @param [min] [number] 分钟
 * @author ranguangyu@zbj.com
 */
window.setCookie = function(key, value, min) {
  min = min || 30; // 默认30分钟
  var exp = new Date();
  exp.setTime(exp.getTime() + min * 60 * 1000);
  document.cookie = key + '=' + escape(value) + ';expires=' + exp.toGMTString() + ';path=/';
}

/**
 * @desc cookie 读取
 * @param [key] [string]
 * @return [string]
 * @author ranguangyu@zbj.com
 */
window.getCookie = function(key) {
  var arr, reg = new RegExp('(^| )' + key + '=([^;]*)(;|$)');
  if (arr = document.cookie.match(reg))
    return unescape(arr[2]);
  else
    return null;
}

/**
 * @desc cookie 删除
 * @param [key] [string]
 * @return [string]
 * @author ranguangyu@zbj.com
 */
window.delCookie = function(key) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(key);
  if (cval != null) {
    document.cookie = key + '=' + cval + ';expires=' + exp.toGMTString();
  }
}
