import { JsonView } from 'react-json-view-lite'; // json 格式套件 測試用的
import useSWR from 'swr' 
// SWR 的主要目的是處理數據的緩存和同步，而不是直接發送 HTTP 請求。雖然 SWR 可以用來發送 GET 請求，但它的核心功能是管理數據的緩存、重新驗證和同步。


function Profile() {
  const fetcher = (url) => fetch(url, {
    headers: {
      'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}` // 假設你使用 Bearer Token
    }
  }).then((res) => res.json()) // 這個函數使用 `fetch` 來發送 HTTP 請求並將響應轉換為 JSON 格式

  const result = useSWR(`${import.meta.env.VITE_BONVIES_PUBLIC_APIS}/member?page=1&limit=10&sort=name asc`, fetcher);
 
  console.log(result)
  return <JsonView data={result}/>
}

export default function SwrTest() {
  return (
    <>
      <Profile/>
    </>
  )
}