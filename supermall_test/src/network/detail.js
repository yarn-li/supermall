import {currentRequest} from './request'

export function getDetaildata(iid) {
  return currentRequest({
    url: '/detail',
    params: {
      iid
    }
  })
}


export function getRecommend() {
  return currentRequest({
    url: '/recommend',
  })
}


export class detail{
  constructor(itemInfo,columns,shopInfo,rate,detailInfo,itemParams){
    this.itemInfo = itemInfo
    this.columns = columns
    this.topImages = itemInfo.topImages
    this.shopInfo = shopInfo
    this.rate = rate
    this.detailInfo = detailInfo
    this.itemParams = itemParams
  }
}

