/* Javascript 샘플 코드 */
function loadDoc(date) {
  console.log(date);
  var xhr = new XMLHttpRequest();
  var url =
    "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson"; /*URL*/
  var queryParams =
    "?" +
    encodeURIComponent("serviceKey") +
    "=" +
    "uiiGq0KmbA9PSCo4%2Byz%2BRW6NF7VLatpDrQoB%2BoYt7Oy0sN6r%2F%2Bm1cZRB%2BUz9Y3tDE%2BHaheYDvI%2BFvrKkiIKkrQ%3D%3D"; /*Service Key*/
  queryParams +=
    "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /**/
  queryParams +=
    "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("10"); /**/
  queryParams +=
    "&" +
    encodeURIComponent("startCreateDt") +
    "=" +
    encodeURIComponent(date); /**/
  queryParams +=
    "&" +
    encodeURIComponent("endCreateDt") +
    "=" +
    encodeURIComponent(date); /**/
  xhr.open("GET", url + queryParams);
  console.log(url + queryParams);
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      loadItem(this);
    }
  };

  xhr.send("");
}

function loadItem(xml) {
  console.log(xml);
}
