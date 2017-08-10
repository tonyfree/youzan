let url = {
  hotLists: '/index/hotLists',
  banner: '/index/banner'
}

// let host = 'http://rapapi.org/mockjsdata/23334'
let host = 'http://rapapi.org/mockjsdata/24170'

for (let key in url) {
  if (url.hasOwnProperty(key)) {
    url[key] = host + url[key]
  }
}

export default url