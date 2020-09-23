// @see https://leetcode.com/problems/excel-sheet-column-title/
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  const M = 26;

  const conv = (y) => String.fromCharCode(0);

  let x = (n / M) << 0;
  let y = n % M;

  console.log(conv());
};

convertToTitle();
// a b c d e f g h i j(0, 10)
// k l m n o p q r s t
// u v w x y z aa ab ac ad(2, 10)

// ae af ag ah ai aj ak al am an
// ao ap aq ar as at au av aw ax
// ay az(5, 2)

// a-z 1 26 (+26) 1
// aa-az 27-52 (+26) 2
// ba-bz 53-79 (+26) 3
// ...
// za-zz 26*25+1 - 26*26+1 (+26) 26

// const c = 26;
// 701 / 26 = 26.x
// 701 % 26 = 25
