// 分页对象类
export default class Paginate {
  /**
   * @param {条目总数量} total
   * @param {总页面数量 如果设定了这个total失效} totalPage
   * @param {总共显示几页} pageRage
   * @param {每页的记录条数} numItemsPerPage 默认10
   */
  constructor ({ total, totalPage, pageRange = 5, numItemsPerPage = 10 }) {
    if (!total && !totalPage) {
      console.log('请传入total或totalPage参数！') // eslint-disable-line
    }
    this.totalPage = Math.ceil(total / numItemsPerPage)
    if (totalPage) {
      this.totalPage = totalPage
    }
    this.pageRange = pageRange
    this.init()
  }
  init () {
    const _totalPageArr = []
    for (let p = 1; p <= this.totalPage; p++) {
      _totalPageArr.push(p)
    }
    this.totalPageArr = _totalPageArr
  }
  getPageInRange (currentPage) {
    this.calcStartIdx(currentPage)
    return this.totalPageArr.slice(this.startIdx, this.startIdx + this.pageRange)
  }
  // 计算分页对象开始索引
  calcStartIdx (currentPage) {
    const leftSideNumber = this.pageRange >> 1
    this.startIdx = currentPage - leftSideNumber - 1
    // 总页数小于范围
    if (this.totalPage < this.pageRange) {
      this.startIdx = 0
      return
    }

    // 索引左边界超出
    if (this.startIdx < 0) {
      this.startIdx = 0
      return
    }
    // 索引右边界超出
    if (this.startIdx > (this.totalPage - this.pageRange)) {
      this.startIdx = this.totalPage - this.pageRange
      return
    }
  }
}
