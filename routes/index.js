var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    thetitle: 'Express Pierre',
    lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum eget nunc in malesuada. In condimentum placerat tristique. Suspendisse pellentesque, turpis ullamcorper vestibulum molestie, felis massa euismod sem, vel sagittis erat purus sed quam. Praesent ut dolor vulputate leo suscipit malesuada. In mauris orci, eleifend quis convallis vitae, dapibus sed arcu. Donec quis enim nec quam dictum dignissim sit amet eget urna. Praesent vel ultrices quam, nec tempor felis. Nam non volutpat mi. Integer pulvinar libero in neque luctus, et luctus lacus accumsan. Nunc suscipit eros lorem, sit amet vehicula sem accumsan in.'});
});

router.get('/boot', (req, res, next) => {
  res.render('bootstrap', {
    thetitle: 'bootstrap'
  });
})

module.exports = router;
