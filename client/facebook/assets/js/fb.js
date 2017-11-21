$(document).ready(function(){
  console.log('masuk sini')
  axios.get('http://localhost:3000/api/fb/getTimeLine', {
    headers: {
      accesstoken: localStorage.getItem('fbaccesstoken')
    }
  })
  .then(function (response) {
    console.log(response);
    response.data.data.forEach((data) => {
      // if (data.story && data.message) {
      $('#timeline').append(`
        <div class="panel panel-primary">
          <div class="panel-heading">
            <a href="https://facebook.com/${data.id}" class="close" target="_blank">
              <i class="fa fa-external-link-square"></i>
            </a>
            <h3 class="panel-title">${data.story || 'Your Status'}</h3>
          </div>
          <div class="panel-body">
            ${data.message || ''}
          </div>
        </div>
      `)
    })
  })
  .catch(function (error) {
    console.log(error);
  });
});

function postStatus() {
  axios.post('http://localhost:3000/api/fb', {
    status: $("input#newStatus" ).val()
  },{
    headers: {
      accesstoken: localStorage.getItem('fbaccesstoken')
    }
  })
  .then(function (response) {
    console.log(response);
    location.reload();
  })
  .catch(function (error) {
    console.log(error);
  });
}