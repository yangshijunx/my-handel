// 防抖
// 单位时间内多次点击只生效一次
function debounce(fn, delay=300) {
  let timer = null
  return function () {
    const args = arguments
    if(timer){
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

// 示例函数，用于演示防抖效果
function exampleFunction(input) {
  console.log(`input: ${input}`);
}

const testClick = debounce(exampleFunction)
testClick(1)
testClick(2)
testClick(3)
setTimeout(() => {
  testClick(4)
}, 400)