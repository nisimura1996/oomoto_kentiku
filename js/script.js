$(function () {
  // スライダー
  $(".result").slick({
    autoplay: true, //自動再生
    infinite: true, //スライドのループ有効化
    dots: true, //ドットのナビゲーションを表示
    slidesToShow: 4, //表示するスライドの数
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  // トップに戻るボタン
  var topBtn = $(".to-top");
  topBtn.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
  topBtn.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });

  // スクロールナビ
  $('.item a[href^="#"]').click(function () {
    // #で始まるリンクをクリックしたら実行されます
    var speed = 400; // ミリ秒で記述
    // スクロールの速度
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  // アコーディオン
  $(".ac-item").click(function () {
    const $answer = $(this).find(".answer");

    if ($answer.hasClass("open")) {
      $answer.removeClass("open");
      // slideUpメソッドを用いて、$answerを隠してください
      $answer.slideUp();
      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $(this).find(".toggle").text("+");
    } else {
      $answer.addClass("open");
      // slideDownメソッドを用いて、$answerを表示してください
      $answer.slideDown();
      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $(this).find(".toggle").text("-");
    }
  });

  $(".open-btn").click(function () {
    $(".answer").slideDown();
    $(".toggle").text("-");
  });
  $(".close-btn").click(function () {
    $(".answer").slideUp();
    $(".toggle").text("+");
  });

  // ハンバーガーメニュー
  function toggleNav() {
    var body = document.body;
    var hamburger = document.getElementById("js-hamburger");
    var blackBg = document.getElementById("js-black-bg");

    hamburger.addEventListener("click", function () {
      body.classList.toggle("nav-open");
    });
    blackBg.addEventListener("click", function () {
      body.classList.remove("nav-open");
    });
  }
  toggleNav();
});
