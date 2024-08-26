declare global {
  // windowを拡張するためにinterfaceを使用
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

// moduleとして扱いたいため記述、他にimport/exportが追記される場合は削除してよい
export {}
