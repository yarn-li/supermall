import{request} from "./request"

export function getHomeMultidata(){
 return request({
    url:"/home/multidata"
  })
}

export function getHomePopdata(page){
  return request({
     url:"/home/data?type=pop&page="+page
   })
 }
 export function getHomeSelldata(page){
  return request({
     url:"/home/data?type=sell&page="+page
   })
 }
 export function getHomeNewdata(page){
  return request({
     url:"/home/data?type=new&page="+page
   })
 }