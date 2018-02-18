'use strict';

const roboter = require('roboter');

roboter.
  workOn('server').
  equipWith(task => {
    task('universal/license', {
      compatible: [ 'MIT', 'ISC', 'MIT*', 'Apache-2.0', 'Apache-2.0*', 'BSD', 'BSD-2-Clause', 'BSD-3-Clause', 'Unlicense', 'CC0-1.0', '(MIT AND CC-BY-3.0)', '(WTFPL OR MIT)', 'MIT/X11', 'UNKNOWN', '(MIT OR Apache-2.0)', '(BSD-2-Clause OR MIT OR Apache-2.0)', 'MIT Licensed. http://www.opensource.org/licenses/mit-license.php', 'BSD-3-Clause OR MIT', '(Apache-2.0 OR MPL-1.1)' ]
    });
  }).
  start();
