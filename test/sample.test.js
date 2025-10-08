// test/sample.test.js
function add(a, b) {
    return a + b;
  }
  
  // 模擬單元測試
  function testAdd() {
    const result = add(2, 3);
    if (result !== 5) {
      console.error("❌ Test failed: expected 5, got " + result);
      process.exit(1); // 結束並回報錯誤
    } else {
      console.log("✅ Test passed: add(2,3) = 5");
    }
  }
  
  testAdd();
  