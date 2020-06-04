ng generate语句实际并没有 创建page的概念，这里参考Ionic创建page所生产的文件。
创建angular的module、component 合并成为page
```code
ng g m pages/pagename --routing
ng g c pages/pagename -S

// 參數注釋：
// --routing 創建模塊時，加入routing設置
// -S 是 --skipTests=true 創建組件時，不建立測試文件(*.spec.ts)
```


