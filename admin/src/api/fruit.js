import request from '@/utils/request'

export function getkind(){
    return request({
        url:'/fruit/getkind',
        method:'get',
    })
}

export function upload(data){
    return request({
        url:'/fruit/upload',
        method:'post',
        data
    })
}

export function addfruit(data){
    return request({
        url:'/fruit/addfruit',
        method:'post',
        data
    })
}


export function getlist(data){
    return request({
        url:`/fruit/getlist?pagesize=${data.pagesize}&page=${data.currentpage}`,
        method:'get',
    })
}


export function delfruit(id){
    return request({
        url:'/fruit/delfruit/'+id,
        method:'delete',
    })
}

export function getthisfruit(id){
    return request({
        url:'/fruit/getthisfruit/'+id,
        method:'get'
    })
}

export function putfruit(data){
    return request({
        url:'/fruit/putfruit',
        method:'put',
        data
    })
}