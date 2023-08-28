import { layer, map, mapSimultaneous, rule, writeToProfile } from 'karabiner.ts';

writeToProfile('ts', [
  // rule('homerow').manipulators([
  //   map('a').to('left_control', undefined, { lazy: true }).toIfAlone('a'),
  //   map('s').to('left_option', undefined, { lazy: true }).toIfAlone('s'),
  //   map('d').to('left_control', undefined, { lazy: true }).toIfAlone('d'),
  //   map('f').to('left_shift', undefined, { lazy: true }).toIfAlone('f'),
  //
  //   map('j').to('right_shift', undefined, { lazy: true }).toIfAlone('j'),
  //   map('k').to('right_command', undefined, { lazy: true }).toIfAlone('k'),
  //   map('l').to('right_option', undefined, { lazy: true }).toIfAlone('l'),
  //   map(';').to('right_control', undefined, { lazy: true }).toIfAlone(';'),
  // ]),

  rule('modifiers').manipulators([
    map('caps_lock').to('left_control', undefined, { lazy: true }).toIfAlone('escape'),
    // mapDoubleTap('tab', 'optionalAny').to('caps_lock').delay(300),
    map('left_command').to('left_command', undefined, { lazy: true }).toIfAlone('tab'),
    // map('spacebar').toIfAlone('spacebar').toIfHeldDown(toSetVar('NAV', 1)).toAfterKeyUp(toSetVar('NAV', 0)),

    map('right_command').to('right_command', undefined, { lazy: true }).toIfAlone('delete_or_backspace'),
    // map('right_option').to('right_option', undefined, { lazy: true }).toIfAlone('delete_or_backspace'),

    // mapSimultaneous(['v', 'n']).to('hyphen', 'shift'),
    // mapSimultaneous(['r', 'u']).to('hyphen'),
    // mapSimultaneous(['g', 'h']).to('equal_sign'),
  ]),

  layer('tab'
    // , ifVar('NAV')
  ).manipulators([
    map('h').to('left_arrow'),
    map('j').to('down_arrow'),
    map('k').to('up_arrow'),
    map('l').to('right_arrow'),

    map('u').to('open_bracket', 'shift'),
    map('i').to('close_bracket', 'shift'),
    map('o').to('9', 'shift'),
    map('p').to('0', 'shift'),

    map('n').to('open_bracket'),
    map('m').to('close_bracket'),
    map('comma').to('comma', 'shift'),
    map('period').to('period', 'shift'),
  ]),

])
