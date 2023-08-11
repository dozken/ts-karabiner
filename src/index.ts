import {
  ModifierKeyCode,
  NumberKeyValue,
  controlOrSymbolKeyCodes,
  ifVar,
  layer,
  letterKeyCodes,
  map,
  modifierKeyCodes,
  numberKeyCodes,
  rule,
  withMapper,
  writeToProfile
} from 'karabiner.ts';



declare const homeRowKeyCodes: readonly ['a', 's', 'd', 'f', 'j', 'k', 'l', 'semicolon'];
declare type HomeRowKeyCode = (typeof homeRowKeyCodes)[number];

const homeRowMods: Record<HomeRowKeyCode, ModifierKeyCode> = {
  "a": "left_control",
  's': 'left_option',
  'd': 'left_command',
  'f': 'left_shift',
  'j': 'right_shift',
  'k': 'right_command',
  'l': 'right_option',
  'semicolon': 'right_control'
} as const;
// ! Change '--dry-run' to your Karabiner-Elements Profile name.
// (--dry-run print the config json into console)
// + Create a new profile if needed.
writeToProfile('ts', [
  // It is not required, but recommended to put symbol alias to layers,
  // (If you type fast, use simlayer instead, see https://evan-liu.github.io/karabiner.ts/rules/simlayer)
  // to make it easier to write '←' instead of 'left_arrow'.
  // Supported alias: https://github.com/evan-liu/karabiner.ts/blob/main/src/utils/key-alias.ts
  layer('/', 'symbol-mode').manipulators([
    //     / + [ 1    2    3    4    5 ] =>
    withMapper(['⌘', '⌥', '⌃', '⇧', '⇪'])((k, i) =>
      map((i + 1) as NumberKeyValue).toPaste(k),
    ),
    withMapper(['←', '→', '↑', '↓', '␣', '⏎', '⇥', '⎋', '⌫', '⌦', '⇪'])((k) =>
      map(k).toPaste(k),
    ),
  ]),


  ...Object.entries(homeRowMods).map(([homeRowKey, mod]) =>
  (layer(homeRowKey as HomeRowKeyCode, `${homeRowKey}-${mod}`).manipulators([
    withMapper([...letterKeyCodes, ...numberKeyCodes, ...modifierKeyCodes, ...controlOrSymbolKeyCodes])((key) =>
      (map(key).to(key, mod).condition(ifVar(`${homeRowKey}-${mod}`)))
    )
  ]))
  ),

  //loop through HomeRowKeyCode



  // layer('a', 'a-mode').manipulators([
  //   withMapper([...letterKeyCodes, ...numberKeyCodes, ...modifierKeyCodes])((k) =>
  //     map(k).to(k, 'left⇧')
  //   )
  // ]),

  rule('Key mapping').manipulators([
    // config key mappings
    map('⇪').to('⎋'),
  ]),
])
//↓↓←←←↑↑↓↓→→→`⌘⌥⌃⇧⇪⏎␣`:w
///OOOOWWWMMMWSSSDDD;4;;;LMN94
