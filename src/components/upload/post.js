const bodyEl = document.body;
// 临时元素
const tmpEl = document.createElement('div');

let uid = 0;
const getUid = () => ++uid;

export default function (options) {
  const { action, filename, _fileEl, onSuccess, onError } = options;
  const fileElParent = _fileEl.parentNode;

  // iframe元素
  const ifrId = `post_ifr_${getUid()}`;
  tmpEl.innerHTML = `<iframe name="${ifrId}" style="display: none;"></iframe>`;
  const ifrEl = tmpEl.childNodes[0];
  bodyEl.appendChild(ifrEl);

  // form元素
  tmpEl.innerHTML = `<form enctype="multipart/form-data" style="display: none;" target="${ifrId}" method="post" action="${action}"></form>`;
  const formEl = tmpEl.childNodes[0];
  _fileEl.name = filename;
  // 将文件元素添加到form中
  formEl.appendChild(_fileEl);

  ifrEl.onload = () => {
    const resText = ifrEl.contentWindow.document.body.innerText;
    const res = JSON.parse(resText);
    onSuccess(res);
    // 将文件元素恢复到原处
    fileElParent.appendChild(_fileEl);

    // 延迟运行
    setTimeout(() => {
      bodyEl.removeChild(ifrEl);
      bodyEl.removeChild(formEl);
    }, 100);
  };

  ifrEl.onerror = (err) => {
    onError(err);
  };

  // 提交
  bodyEl.appendChild(formEl);
  formEl.submit();
}
