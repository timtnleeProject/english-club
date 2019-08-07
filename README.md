# english-club

## 簡述

* 使用 vue-cli
* branch `helper` 是可以將 docx 轉成 html 的小程式
* UI庫使用 __Vuetify__

## Journal, Class 頁面

這兩頁使用了同個樹狀結構元件 `Tree`

## Tree

包含了 vuetify 的 `tree`

### 紀錄開關的功能 (避免回到這頁又全部關閉)

當設置了 `historyStoreName`，vuex需要設置對應的 name，用來儲存開關的狀態

## 加載 html

`journals/**`, `classes/**` 會加載 html 並呈現在頁面上，這裡要注意的是

`journals/**` 會去找 public folder 的 `journal/**` 同理 class 也是，這是故意將路徑區分的，避免重整時因為 url 和靜態資源路徑一樣，直接serve html檔案。

## menu tree generate

menu 是在 build 的時候產生的，是 json 格式。script 可以在 `scripts/getMenu.js`找到

根據 folder 的結構產生對應的tree, 讓前端讀取，呈現目錄結構。注意的是這邊前端會用到的 tree id 等等也一併長好。

## 404.html

Github Page SPA 的轉導 solution

## Vuex

### state

menu tree, 開啟狀態 記錄在這 (journal, class)，APP產生時 fetch menu.

### mutaion

設置了一個 `set` 方法當成通用設定值的方法
