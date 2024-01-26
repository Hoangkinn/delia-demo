const btnDetails = document.querySelectorAll('.btn-detail');
const modalPopups = document.querySelectorAll('.modal-popup');
const closeBtns = document.querySelectorAll('.close-btn');

btnDetails.forEach((btnDetail, index) => {
    btnDetail.addEventListener('click', () => {
        modalPopups[index].style.display = 'flex';
        modalPopups[index].style.top = '-100%';
        setTimeout(() => {
            modalPopups[index].style.top = '0';
        }, 100);
    });
});

closeBtns.forEach((closeBtn, index) => {
    closeBtn.addEventListener('click', () => {
        modalPopups[index].style.top = '-100%';
        setTimeout(() => {
            modalPopups[index].style.display = 'none';
        }, 300);
    });
});

const imgInLis = document.querySelectorAll('.imgg');
imgInLis.forEach((img, index) => {
    img.addEventListener('click', () => {
        if (window.innerWidth < 767) {
            modalPopups[index].style.display = 'flex';
            modalPopups[index].style.top = '-100%';
            setTimeout(() => {
                modalPopups[index].style.top = '0';
            }, 100);
        }
    });
});




//

    // Lắng nghe sự kiện click trên thẻ li
    $('.tab-link').click(function() {
        var tabId = $(this).data('tab');
        $('.tab-content').hide();
        $('#' + tabId).show();
        return false;
      });
  
      $(document).ready(function() {
    var currentVideoPlayer; // Biến lưu trữ video player hiện tại
  
    // Lắng nghe sự kiện click trên các phần tử .testimonimg
    $('.testimonimg').click(function() {
      var videoLink = $(this).data('video');
      var videoId = videoLink;
      var playerId = 'video-player';
  
      // Kiểm tra nếu đã có video player hiện tại
      if (currentVideoPlayer) {
        // Dừng video player hiện tại
        currentVideoPlayer.stopVideo();
  
        // Xóa video player hiện tại
        currentVideoPlayer.destroy();
      }
  
      // Tạo video player mới
      createPlayer(videoId, playerId);
  
      // Hiển thị modal
      $('#modal').css('display', 'block');
  
      // Lưu trữ video player hiện tại
      currentVideoPlayer = YT.get(playerId);
    });
  
    // Lắng nghe sự kiện click trên nút đóng modal
    $('.close').click(function() {
      // Đóng modal
      $('#modal').css('display', 'none');
  
      // Dừng video player hiện tại
      if (currentVideoPlayer) {
        currentVideoPlayer.stopVideo();
      }
    });
  
    // // Lắng nghe sự kiện click trên thẻ li
    // $('.tab-link').click(function() {
    //   var tabId = $(this).data('tab');
    //   $('.tab-content').hide();
    //   $('#' + tabId).show();
  
    //   // Xóa video player hiện tại
    //   if (currentVideoPlayer) {
    //     currentVideoPlayer.destroy();
    //     currentVideoPlayer = null;
    //   }
  
    //   return false;
    // });
  });
  
  // Hàm tạo video player
  function createPlayer(videoId, playerId) {
    new YT.Player(playerId, {
      height: '360',
      width: '640',
      videoId: videoId,
      playerVars: {
        autoplay: 1,
      },
      events: {
        onReady: function(event) {
          event.target.playVideo();
        },
      },
    });
  }