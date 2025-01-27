function sumExcludingMultiplesOfThreeAndFive(n) {
  let sum = 0; 

  for (let i = 1; i <= n; i++) {
    
    if (i % 3 == 0 || i % 5 == 0) {
      continue;
    }

    
    sum += i;
  }

  return sum; // 최종 합계 반환
}

module.exports = sumExcludingMultiplesOfThreeAndFive;