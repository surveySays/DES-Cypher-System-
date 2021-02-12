export function GenerateKeys() {
  var key = "0011101010111011000010010001100000100111001101101100110011011101";

  var pc1 = [
    57,
    49,
    41,
    33,
    25,
    17,
    9,
    1,
    58,
    50,
    42,
    34,
    26,
    18,
    10,
    2,
    59,
    51,
    43,
    35,
    27,
    19,
    11,
    3,
    60,
    52,
    44,
    36,
    63,
    55,
    47,
    39,
    31,
    23,
    15,
    7,
    62,
    54,
    46,
    38,
    30,
    22,
    14,
    6,
    61,
    53,
    45,
    37,
    29,
    21,
    13,
    5,
    28,
    20,
    12,
    4,
  ];
  // The PC2 table
  var pc2 = [
    14,
    17,
    11,
    24,
    1,
    5,
    3,
    28,
    15,
    6,
    21,
    10,
    23,
    19,
    12,
    4,
    26,
    8,
    16,
    7,
    27,
    20,
    13,
    2,
    41,
    52,
    31,
    37,
    47,
    55,
    30,
    40,
    51,
    45,
    33,
    48,
    44,
    49,
    39,
    56,
    34,
    53,
    46,
    42,
    50,
    36,
    29,
    32,
  ];

  // 1. Compressing the key using the PC1 table
  var perm_key = "";
  var i;

  for (i = 0; i < 56; i++) {
    perm_key += key[pc1[i] - 1];
  }
  // 2. Dividing the result into two equal halves
  var left = perm_key.substr(0, 28);
  var right = perm_key.substr(28, 28);
  // Generating 16 keys
  for (i = 0; i < 16; i++) {
    // 3.1. For rounds 1, 2, 9, 16 the key_chunks
    // are shifted by one.
    if (i == 0 || i == 1 || i == 8 || i == 15) {
      left = shift_left_once(left);
      right = shift_left_once(right);
    }
    // 3.2. For other rounds, the key_chunks
    // are shifted by two
    else {
      left = shift_left_twice(left);
      right = shift_left_twice(right);
    }
    // 4. The chunks are combined
    var combined_key = left + right;
    var round_key = "";
    // 5. Finally, the PC2 table is used to transpose
    // the key bits
    for (var y = 0; y < 48; y++) {
      round_key += combined_key[pc2[y] - 1];
    }
    round_keys[i] = round_key;
  }

  return round_keys;
}

var round_keys = [];
// Function to do a circular left shift by 1
function shift_left_once(key_chunk) {
  var shifted = "";
  var i;
  for (i = 1; i < 28; i++) {
    shifted += key_chunk[i];
  }
  shifted += key_chunk[0];
  return shifted;
}
// Function to do a circular left shift by 2
function shift_left_twice(key_chunk) {
  var shifted = "";
  var i;
  var j;
  for (i = 0; i < 2; i++) {
    for (j = 1; j < 28; j++) {
      shifted += key_chunk[j];
    }
    shifted += key_chunk[0];
    key_chunk = shifted;
    shifted = "";
  }
  return key_chunk;
}
