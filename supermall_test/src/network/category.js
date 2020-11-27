import {currentRequest} from "./request"

export function getcategory(){
  return currentRequest({
    url:"/category"
  })
}

export function getsubCategory(maitKey){
  return currentRequest({
    url:"/subcategory",
    params: {
      maitKey
    }
  })
}

export function getCategoryDetail(miniWallkey, type) {
  return currentRequest({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}