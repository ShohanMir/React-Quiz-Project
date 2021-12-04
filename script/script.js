document.querySelector('.floatingBtn').addEventListener(
  'click',
  function () {
    this.classList.remove('floatingBtn');
  },
  true
);

document.querySelector('.miniPlayer .close').addEventListener(
  'click',
  function () {
    document.querySelector('.miniPlayer').classList.add('miniPlayer');
  },
  true
);

// tooltip
document.querySelector('.progress').addEventListener(
  'mouseover',
  function () {
    document.querySelector('tooltip').stle.display = 'block';
  },
  true
);

document.querySelector('.progress').addEventListener(
  'mouseout',
  function () {
    document.querySelector('.tooltip').stle.display = 'none';
  },
  true
);
