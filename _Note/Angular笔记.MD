#### Angular笔记

##### 1. 防止重复导入 模组

一般情况下，建立一个共享模组ShareModule，是仅在AppModule中导入的。为了防止重复导入，可以使用Angular自带的装饰器 **@Optional()** **@SkipSelf()** 加以限制：
```typescript
export class ShareModule {
  constructor (@Optional() @SkipSelf() shareModule?: ShareModule) {
    if (shareModule) {
      throw new Error(`ShareModule is already loaded. Import it in the AppModule only.`);
    }
  }
}
```